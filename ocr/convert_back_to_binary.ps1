$filename = "./temp/files/back_from_solr.pdf"

$result = curl "http://localhost:8983/solr/documents/select?csv.header=false&fl=file_binary_base64&fq=content_type:parentDocument&omitHeader=true&q=id:alvarez20140715a.pdf&wt=csv"
$bytes = [Convert]::FromBase64String($result)
[IO.File]::WriteAllBytes($filename, $bytes)
