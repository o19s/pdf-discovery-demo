
Param(
               [Parameter(Mandatory=$True,Position=1,HelpMessage="Enter path to extract root pdf")]
               [string]$pdf_file
               )

Write-Host "About to check accuracy for extracts from PDF file " + $pdf_file


$baseFile = Split-Path $pdf_file -leaf

Write-Host $baseFile

$hocr_file = "./extracts/" + $baseFile + ".hocr"
$txt_file = "./extracts/" + $baseFile + ".txt"

$hocr = Get-Content $hocr_file -Raw
$txt = Get-Content $txt_file -Raw

$pattern = '[^a-zA-Z]'

$txts = @()
foreach ($bit in $txt.split(' ',[System.StringSplitOptions]::RemoveEmptyEntries)){
  $bit = $bit -replace [Environment]::NewLine
  $bit = $bit -replace $pattern, ''
  If ($bit.length -gt 3){
    $txts += $bit
  }
}

$hocrs = @()

foreach ($bit in $hocr.split()) {
  $bit = $bit.split("|")[0]
  $bit = $bit -replace $pattern, ''
  If ($bit.length -gt 3){
    $hocrs += $bit
  }
}

$pairs = @()
$counter = 0
foreach ($bit in $txts){
  #Write-Host $bit
  #Write-Host $hocrs[$counter]
  $pair = $bit + "||" + $hocrs[$counter]
  $pairs += $pair
  $counter++

  If ($counter -gt 2000){
    break
  }

}

$counter = 0
foreach ($pair in $pairs){
  $counter++
  $bits = $pair.split("||")
  Write-Host $bits
  if ($bits[0] -eq $bits[1]){
    Write-Host "Match"
  }
  else {
    Write-Host "Boom " + $counter
  }

}


#$pairs
