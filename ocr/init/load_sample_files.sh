#!/bin/bash

PATH_TO_SAMPLE_DOCS=$1
UPLOAD_ENDPOINT=$2
#UPLOAD_ENDPOINT=http://localhost:8080/documents

echo "Loading files in $PATH_TO_SAMPLE_DOCS"

for filename in $PATH_TO_SAMPLE_DOCS/*.json; do
  echo "Posting $filename"
  curl -X POST -H "Content-Type: application/json" --data-binary @$filename $UPLOAD_ENDPOINT
done
curl -X GET $UPLOAD_ENDPOINT?commit=true

echo "all done!"
