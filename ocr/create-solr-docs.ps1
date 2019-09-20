
Param(
               [Parameter(Mandatory=$True,Position=1,HelpMessage="Enter path to directory of extracts")]
               [string]$directory_path,
               [Parameter(Mandatory=$True,Position=2,HelpMessage="Enter path to root directory with PDF files")]
               [string]$files_root_path,
               [Parameter(Mandatory=$True,Position=3,HelpMessage="Enter path to root directory where we store Solr docs")]
               [string]$target_solr_docs
               )

Write-Host "Script:" $PSCommandPath
Write-Host "Path:" $PSScriptRoot

Write-Host "Extracts in :" $directory_path
Write-Host "PDF Files:" $files_root_path
Write-Host "Solr Docs:" $target_solr_docs

$files_root_path = Resolve-Path $files_root_path

$base_files = Get-ChildItem -Path $directory_path –Recurse | Where-Object {$_.Extension -eq ".json"}

# Uncomment this to just run over the first two documents!
#$base_files = $base_files[0..1]

foreach ($base_file in $base_files) {

  Write-Host $base_file

  $json = (Get-Content $base_file -Raw) | ConvertFrom-Json
  $tika_content = [xml]$json.'X-TIKA:content'

  Write-Host $json

  $nsmgr = New-Object System.XML.XmlNamespaceManager($tika_content.NameTable)
  $nsmgr.AddNamespace('x','http://www.w3.org/1999/xhtml')

  #Write-Host $tika_content

  $pages = $tika_content.SelectNodes("//x:div[@class='page']",$nsmgr)



  $outputPath = $base_file -replace '.json',''
  $outputFile = Split-Path $outputPath -leaf
  #Write-Host $outputFile




  # I thought this would work, but it doesn't.  There doesn't seem to be any Dublin Core metadata returned...?
  $subject = $json.'dc:subject'

  # Need to go find the first occurrence of the $outputFile.
  $paths = gci -Recurse -Filter $outputFile -File -ErrorAction SilentlyContinue -Path $files_root_path
  $file = $paths[0]
  $path = $file.ToString().Replace($files_root_path.ToString(),'')




  $nsmgr = New-Object System.XML.XmlNamespaceManager($tika_content.NameTable)
  $nsmgr.AddNamespace('x','http://www.w3.org/1999/xhtml')

  $pages = $tika_content.SelectNodes("//x:div[@class='ocr_page']",$nsmgr)

  [System.Collections.ArrayList]$child_docs = @()
  $parent_doc = @([pscustomobject]@{id=$outputFile;content_type="parentDocument";path=$path;_childDocuments_=$child_docs})


  $page_number = 0
  foreach ($page in $pages){
    $page_number++
    $bbox = $page.title.split('bbox')[1].split(';')[0]
    #Write-Host $bbox
    $page_dimension = $bbox

    $hocr_file = $outputPath + "_" + $page_number + '.hocr'
    $hocr = (Get-Content $hocr_file)

    $text_file = $outputPath + "_" + $page_number +  '.txt'
    $text = (Get-Content $text_file)

    $childDoc = @{
        id = $outputFile + "_" + $page_number
        parent_id = $outputFile
        content_type = "childDocument"
        page_dimension = $page_dimension
        page_number = $page_number
        content = [string]$text
        content_ocr = [string]$hocr

    }



    $child_docs.add($childDoc)
  }

  $parent_doc = $parent_doc | ConvertTo-Json

  $parent_doc = "[" + $parent_doc + "]"

  # Uncomment to see the json to be sent to Solr
  #$parent_doc
  $extract_file = $target_solr_docs + $outputFile + '.json'
  Set-Content -Path $extract_file -Value $parent_doc


}
