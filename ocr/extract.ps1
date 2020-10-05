
Param(
               [Parameter(Mandatory=$True,Position=1,HelpMessage="Path to PDF file")]
               [string]$pdf_file,
               [Parameter(Mandatory=$True,Position=2,HelpMessage="Path to directory to store extracted filed")]
               [string]$extracts_directory
               )

Write-Host "Script:" $PSCommandPath
#Write-Host "Path:" $PSScriptRoot

if(!(Test-Path($extracts_directory))){
  New-Item -Path $extracts_directory -ItemType Directory
}

$outputFile = Split-Path $pdf_file -leaf

Write-Host "Processing $outputFile"

$extract_file_json = $extracts_directory + "/" + $outputFile + ".json"

#$extract_file_json = Resolve-Path $extract_file_json

Write-Host "The extract file is $extract_file_json"

#if(![System.IO.File]::Exists($extract_file_json)){
if(!(Test-Path($extract_file_json))){

  Write-Host "About to Tika Extract PDF file $pdf_file"

  $result = curl -T $pdf_file http://pdf-discovery-demo.dev.o19s.com:9998/rmeta --header "X-Tika-OCRLanguage: eng" --header "X-Tika-PDFOcrStrategy: ocr_and_text_extraction" --header "X-Tika-OCRoutputType: hocr"
  #$result = curl -T $pdf_file http://localhost:9998/rmeta --header "X-Tika-OCRLanguage: eng" --header "X-Tika-PDFOcrStrategy: ocr_and_text_extraction" --header "X-Tika-OCRoutputType: hocr"
  #$result = java -cp tika-app-1.24.1.jar org.apache.tika.cli.TikaCLI --config=tika-config.xml --xmp --jsonRecursive --extract --pretty-print -x $pdf_file

  Set-Content -Path $extract_file_json -Value $result
  Write-Host "Done with extract, now converting"

}


# some docs have both "created" and "Created", which needs the -asHashtable
$json = (Get-Content $extract_file_json -Raw) | ConvertFrom-Json -AsHashtable

$tika_content = [xml]$json.'X-TIKA:content'


$nsmgr = New-Object System.XML.XmlNamespaceManager($tika_content.NameTable)
$nsmgr.AddNamespace('x','http://www.w3.org/1999/xhtml')

$pages = $tika_content.SelectNodes("//x:div[@class='page']",$nsmgr)

$page_number = 0
foreach ($page in $pages){
  $page_number++
  $hocr_output = ""
  $extract_file_text = $extracts_directory + "/" + $outputFile + "_" + $page_number + ".txt"
  $extract_file_hocr = $extracts_directory + "/" + $outputFile + "_" + $page_number + ".hocr"

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

Write-Host "Done with extraction"
