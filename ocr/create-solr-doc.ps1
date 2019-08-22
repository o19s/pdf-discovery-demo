
Param(
               [Parameter(Mandatory=$True,Position=1,HelpMessage="Enter path to directory of extracts")]
               [string]$directory_path
               )

Write-Host "Script:" $PSCommandPath
Write-Host "Path:" $PSScriptRoot

$base_files = Get-ChildItem -Path $directory_path –Recurse | Where-Object {$_.Extension -eq ".json"}

#$base_files = $base_files[0..0]

foreach ($base_file in $base_files) {

  Write-Host $base_file
  $json = (Get-Content $base_file -Raw) | ConvertFrom-Json
  $tika_content = [xml]$json.'X-TIKA:content'

  Write-Host $json

  $nsmgr = New-Object System.XML.XmlNamespaceManager($tika_content.NameTable)
  $nsmgr.AddNamespace('x','http://www.w3.org/1999/xhtml')

  Write-Host $tika_content

  $pages = $tika_content.SelectNodes("//x:div[@class='page']",$nsmgr)



  $outputPath = $base_file -replace '.json',''
  $outputFile = Split-Path $outputPath -leaf
  Write-Host $outputFile

  $hocr_file = $outputPath + '.hocr'
  $hocr = (Get-Content $hocr_file)

  $text_file = $outputPath + '.txt'
  $text = (Get-Content $text_file)



  $subject = $json.'dc:subject'
  $path = "../public/$outputFile"


  $page_dimensions = @()

  $nsmgr = New-Object System.XML.XmlNamespaceManager($tika_content.NameTable)
  $nsmgr.AddNamespace('x','http://www.w3.org/1999/xhtml')

  $pages = $tika_content.SelectNodes("//x:div[@class='ocr_page']",$nsmgr)

  $page_counter = 1
  foreach ($page in $pages){
    $bbox = $page.title.split('bbox')[1].split(';')[0]
    Write-Host $bbox
    $page_dimensions += "${page_counter}:${bbox}"
    $page_counter++
  }

  $jsonDoc = [pscustomobject]@{
      id = $outputFile
      doc_id = $outputFile
      content_type = "pdf"
      title = $subject
      page_dimensions = $page_dimensions
      path = $path
      content = [string]$text
      content_ocr = [string]$hocr

  }
  $jsonDoc

  $jsonDoc = $jsonDoc | ConvertTo-Json

  $extract_file = "./init/sample_docs/" + $outputFile + '.json'
  Set-Content -Path $extract_file -Value $jsonDoc
}
