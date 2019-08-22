
Param(
               [Parameter(Mandatory=$True,Position=1,HelpMessage="Enter path to directory of PDFs")]
               [string]$directory_path
               )

Write-Host "Script:" $PSCommandPath
Write-Host "Path:" $PSScriptRoot



$pdf_files = Get-ChildItem -Path $directory_path –Recurse | Where-Object {$_.Extension -eq ".pdf"}

foreach ($pdf_file in $pdf_files) {

  Write-Host $pdf_file
  Invoke-Expression "./extract-old-style.ps1 $pdf_file"

}
