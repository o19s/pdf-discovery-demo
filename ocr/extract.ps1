
Param(
               [Parameter(Mandatory=$True,Position=1,HelpMessage="Enter path to PDF file")]
               [string]$pdf_file
               )

Write-Host "Script:" $PSCommandPath
#Write-Host "Path:" $PSScriptRoot


$outputFile = Split-Path $pdf_file -leaf

Write-Host "Processing $outputFile"

$extract_file_json = "./extracts/" + $outputFile + ".json"

#$extract_file_json = Resolve-Path $extract_file_json

#Write-Host "The extract file is $extract_file_json"

if(![System.IO.File]::Exists($extract_file_json)){

  # Recreate it
  $extract_file_json = "./extracts/" + $outputFile + ".json"
  Write-Host "About to Tika Extract PDF file $pdf_file"

  #$result = curl -T $pdf_file http://pdf-discovery-demo.dev.o19s.com:9998/rmeta --header "X-Tika-OCRLanguage: eng" --header "X-Tika-PDFOcrStrategy: ocr_and_text_extraction" --header "X-Tika-OCRoutputType: hocr"
  $result = java -cp ./tika-properties:tika-app-1.22.jar org.apache.tika.cli.TikaCLI --xmp --jsonRecursive --extract --pretty-print -x $pdf_file

  Set-Content -Path $extract_file_json -Value $result
  Write-Host "Done with extract, now converting"

}



$json = (Get-Content $extract_file_json -Raw) | ConvertFrom-Json

if ($json -eq $null){
  Write-Host "Badly formatted JSON file $extract_file_json"
  Write-Host "Pending fix of TIKA-2931, need to scrub output of lines starting with text Extracting"

  $raw = (Get-Content $extract_file_json -Raw)

  $json_starts_index = $raw.IndexOf('[')

  $raw = $raw.Substring($json_starts_index)

  #$extract_file_json =$extract_file_json + ".cleaned"
  Set-Content -Path $extract_file_json -Value $raw
  $json = (Get-Content $extract_file_json -Raw) | ConvertFrom-Json
}


$tika_content = [xml]$json.'X-TIKA:content'

Write-Host "Done with Result"
$nsmgr = New-Object System.XML.XmlNamespaceManager($tika_content.NameTable)
$nsmgr.AddNamespace('x','http://www.w3.org/1999/xhtml')



$pages = $tika_content.SelectNodes("//x:div[@class='page']",$nsmgr)

$page_number = 0
foreach ($page in $pages){
  $page_number++
  $hocr_output = ""
  $extract_file_text = "./extracts/" + $outputFile + "_" + $page_number + ".txt"
  $extract_file_hocr = "./extracts/" + $outputFile + "_" + $page_number + ".hocr"

  $page_xml = $page.innerxml
  $page_xml = "<xhtml>$page_xml</xhtml>"
  $page_xml = [xml]$page_xml

  $nsmgr = New-Object System.XML.XmlNamespaceManager($page_xml.NameTable)
  $nsmgr.AddNamespace('x','http://www.w3.org/1999/xhtml')

  $words = $page_xml.SelectNodes("//x:span[@class='ocrx_word']",$nsmgr)
  foreach ($word in $words) {

    $split = $word.title.split(";")
    $payload = $split[0].Replace("bbox ","")
    $payload = "$page_number $payload"
    #Write-Host $payload

    $payload=[Convert]::ToBase64String([System.Text.Encoding]::ASCII.GetBytes($payload))

    $hocr_output = $hocr_output + $word.InnerText + "|" + $payload + " "
  }

  Set-Content -Path $extract_file_text -Value $page.p
  Set-Content -Path $extract_file_hocr -Value $hocr_output


}
