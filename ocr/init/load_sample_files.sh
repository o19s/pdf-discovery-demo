#!/bin/bash

#PATH_TO_SAMPLE_PPTX=./sample_powerpoints
PATH_TO_SAMPLE_DOCS=$1
#UPLOAD_ENDPOINT=http://powerpoint-discovery-demo.dev.o19s.com:8080/documents
#UPLOAD_ENDPOINT=http://api:8080/documents
UPLOAD_ENDPOINT=$2
#UPLOAD_ENDPOINT=http://localhost:8080/documents

echo "Loading files in $PATH_TO_SAMPLE_DOCS"

for filename in $PATH_TO_SAMPLE_DOCS/*.pptx; do
  echo "Posting $filename"
  curl --silent --user admin:3YnRnaMk7sLbc -X POST -H "Content-Type: multipart/form-data" -F "file=@$filename" $UPLOAD_ENDPOINT
done

for filename in $PATH_TO_SAMPLE_DOCS/*.json; do
  echo "Posting $filename"
  curl -X POST -H "Content-Type: application/json" --data-binary @$filename $UPLOAD_ENDPOINT/json/docs
done
curl -X GET $UPLOAD_ENDPOINT?commit=true

echo "all done!"
