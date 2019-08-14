
Param(
               [Parameter(Mandatory=$True,Position=1,HelpMessage="Enter path to PDF file")]
               [string]$pdf_file
               )

Write-Host "About to hocr PDF file " + $pdf_file

$result = curl -T $pdf_file http://localhost:9998/rmeta --header "X-Tika-OCRLanguage: eng" --header "X-Tika-PDFOcrStrategy: ocr_only" --header "X-Tika-OCRoutputType: hocr"

Write-Host "Done with extract, now converting"
#Write-Host $result

# $json = (Get-Content "output_brainard20190711a.json" -Raw) | ConvertFrom-Json
$json = $result | ConvertFrom-Json


$hocr_xml = [xml]$json.'X-TIKA:content'


$nsmgr = New-Object System.XML.XmlNamespaceManager($hocr_xml.NameTable)
$nsmgr.AddNamespace('xsi','http://www.w3.org/2001/XMLSchema-instance')
$nsmgr.AddNamespace('x','http://www.w3.org/1999/xhtml')

$words = $hocr_xml.SelectNodes("//x:span[@class='ocrx_word']",$nsmgr)

$hocr_output = ''
foreach ($word in $words) {
  $hocr_output = $hocr_output + $word.InnerText + "|" + $word.title + " "
}

$hocr_output
