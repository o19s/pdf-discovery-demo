
Param(
               [Parameter(Mandatory=$True,Position=1,HelpMessage="Path to directory of PDFs")]
               [string]$source_directory,
               [Parameter(Mandatory=$True,Position=2,HelpMessage="Path to directory to store Extracts")]
               [string]$extracts_directory
               )


Write-Host "Script:" $PSCommandPath
Write-Host "Path:" $PSScriptRoot



$pdf_files = Get-ChildItem -Path $source_directory –Recurse | Where-Object {$_.Extension -eq ".pdf"}

foreach ($pdf_file in $pdf_files) {

  Write-Host $pdf_file
  Invoke-Expression "./extract2.ps1 $pdf_file $extracts_directory"

}
