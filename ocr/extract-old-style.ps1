
Param(
               [Parameter(Mandatory=$True,Position=1,HelpMessage="Enter path to PDF file")]
               [string]$pdf_file
               )

               Write-Host "Script:" $PSCommandPath
               Write-Host "Path:" $PSScriptRoot

Write-Host "About to hocr PDF file " + $pdf_file

#$result = curl -T $pdf_file http://localhost:9998/rmeta --header "X-Tika-OCRLanguage: eng" --header "X-Tika-PDFOcrStrategy: ocr_only" --header "X-Tika-OCRoutputType: hocr"
$result = java -cp ./tika-properties:tika-app-1.22.jar org.apache.tika.cli.TikaCLI --xmp --jsonRecursive --extract --pretty-print -x $pdf_file

Write-Host "Done with extract, now converting"

$outputFile = Split-Path $pdf_file -leaf

$extract_file = "./extracts/" + $outputFile + ".json"

Set-Content -Path $extract_file -Value $result

$json = (Get-Content $extract_file -Raw) | ConvertFrom-Json


$tika_content = [xml]$json.'X-TIKA:content'

Write-Host "Done with Result"
$nsmgr = New-Object System.XML.XmlNamespaceManager($tika_content.NameTable)
$nsmgr.AddNamespace('x','http://www.w3.org/1999/xhtml')

$pages = $tika_content.SelectNodes("//x:div[@class='page']",$nsmgr)

$content_encoded = $pages[0].p
Write-Host $content_encoded

$page = $pages[0]


$words = $tika_content.SelectNodes("//x:span[@class='ocrx_word']",$nsmgr)

$hocr_output = ''

# We keep the full formatting, and then base 64 encode it as the payload.
# String payload = "bbox 504 543 626 581; x_wconf 93";
foreach ($word in $words) {
  $payload = $word.title

  $payload=[Convert]::ToBase64String([System.Text.Encoding]::ASCII.GetBytes($payload))

  $hocr_output = $hocr_output + $word.InnerText + "|" + $payload + " "
}

$extract_file = "./extracts/" + $outputFile + ".hocr"

Set-Content -Path $extract_file -Value $hocr_output

$extract_file = "./extracts/" + $outputFile + ".txt"

Set-Content -Path $extract_file -Value $pages.p
