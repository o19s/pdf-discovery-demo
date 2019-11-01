#!/bin/bash

PATH_TO_SAMPLE_DOCS=./load_testing_files
#PATH_TO_SAMPLE_DOCS=$1
#UPLOAD_ENDPOINT=http://powerpoint-discovery-demo.dev.o19s.com:8080/documents
#UPLOAD_ENDPOINT=http://api:8080/documents
#UPLOAD_ENDPOINT=$2
UPLOAD_ENDPOINT=http://localhost:8983/solr/documents/update/speeches

echo "Loading files in $PATH_TO_SAMPLE_DOCS"

for filename in $PATH_TO_SAMPLE_DOCS/*.pdf; do
  echo "Posting ${filename}"
  curl "http://localhost:8983/solr/documents/update/speeches?commit=false&literal.id=${filename}" -F "myfile=@${filename}"
done
curl -X GET 'http://localhost:8983/solr/documents/update?commit=true'

echo "all done!"
