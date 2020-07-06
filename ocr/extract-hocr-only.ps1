
Param(
               [Parameter(Mandatory=$True,Position=1,HelpMessage="Enter path to PDF file")]
               [string]$pdf_file
               )

Write-Host "About to hocr PDF file " + $pdf_file

$result = curl -T $pdf_file http://localhost:9998/rmeta --header "X-Tika-OCRLanguage: eng" --header "X-Tika-PDFOcrStrategy: ocr_and_text_extraction" --header "X-Tika-OCRoutputType: hocr"
#$result = java -cp ./tika-properties:tika-app-1.24.1.jar org.apache.tika.cli.TikaCLI --xmp --jsonRecursive --extract --pretty-print -x $pdf_file


$outputFile = Split-Path $pdf_file -leaf

$extract_file = "./extracts/" + $outputFile + ".xml"

Set-Content -Path $extract_file -Value $result

Write-Host "Done with extract, now converting"
#Write-Host $result
Write-Host "Done with Result"

# $json = (Get-Content "output_brainard20190711a.json" -Raw) | ConvertFrom-Json
$json = $result | ConvertFrom-Json


$hocr_xml = [xml]$json.'X-TIKA:content'

#Write-Host $result

$nsmgr = New-Object System.XML.XmlNamespaceManager($hocr_xml.NameTable)
$nsmgr.AddNamespace('xsi','http://www.w3.org/2001/XMLSchema-instance')
$nsmgr.AddNamespace('x','http://www.w3.org/1999/xhtml')

$words = $hocr_xml.SelectNodes("//x:span[@class='ocrx_word']",$nsmgr)

$hocr_output = ''
foreach ($word in $words) {
  #Write-Host $word.title
  $split = $word.title.split(";")
  $payload = $split[0].Replace("bbox ","")
  #Write-Host $split[0]
  $hocr_output = $hocr_output + $word.InnerText + "|" + $payload + " "
}

$hocr_output
