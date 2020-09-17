#!/bin/bash

# Wait until Solr is ready
#until wait-for-it.sh solr:8983  ";" ; do
#	echo "Waiting on MySQL init..."
#	sleep 5
#done
#echo "Sleeping 15"
sleep 15
./wait-for-solr.sh --max-attempts 10 --wait-seconds 4 --solr-url http://solr:8983
sleep 30

#echo "Uploading security.json to ZK"
#/opt/solr/server/scripts/cloud-scripts/zkcli.sh -zkhost zookeeper:2181 -cmd putfile /security.json /code/security.json
#sleep 5 #give ZK chance to sync with Solr first

#echo "Creating admin user"
#curl --user solr:SolrRocks http://solr:8983/solr/admin/authentication -H 'Content-type:application/json' -d '{
#  "set-user": {"admin" : "3YnRnaMk7sLbc","user" : "3YnRnaMk7sLbc"}
#}'

#echo "Creating new roles"
#curl --user solr:SolrRocks http://solr:8983/solr/admin/authorization -H 'Content-type:application/json' -d '{
# "set-user-role": {"admin":["admin","dev"]},
# "set-user-role": {"user":["admin","dev"]}
#}'

#echo "Deleting default Solr user"
#curl --user admin:3YnRnaMk7sLbc http://solr:8983/solr/admin/authentication -H 'Content-type:application/json' -d  '{
#                "delete-user": ["solr"]}'

echo "Creating documents collection...."
curl --user admin:3YnRnaMk7sLbc "http://solr:8983/solr/admin/collections?action=CREATE&name=documents&collection.configName=configuration1&numShards=2&maxShardsPerNode=2" #place holder

echo "Sleeping 5"
sleep 5

echo "Adding OCR field type"
curl -X POST -H 'Content-type:application/json' --data-binary '{
   "add-field-type" : {
      "name":"ocr",
      "stored": "false",
      "indexed": "true",
      "class":"solr.TextField",
      "analyzer" : {
         "tokenizer":{
            "class":"solr.WhitespaceTokenizerFactory" },
         "filters":[
           { "class":"solr.DelimitedPayloadTokenFilterFactory","encoder":"solr-payloads:com.o19s.payloads.Base64Encoder" },
           { "class":"solr-payloads:com.o19s.payloads.filter.PayloadBufferFilterFactory" },
           { "class":"solr.LowerCaseFilterFactory" },
           { "class":"solr.WordDelimiterFilterFactory" },
           { "class":"solr.KStemFilterFactory" },
           { "class":"solr-payloads:com.o19s.payloads.filter.PayloadBufferFilterFactory" },
         ]
     }
   }
 }' http://solr:8983/solr/documents/schema

echo "Adding content_ocr"
curl -X POST -H 'Content-type:application/json' --data-binary '{
   "add-field" : {
      "name":"content_ocr",
      "type": "ocr",
      "stored": "true",
      "indexed": "true",
      "multiValued": "false",
      "termPayloads": "true",
      "termOffsets": "true",
      "termPositions": "true",
      "termVectors": "true"
   }
 }' http://solr:8983/solr/documents/schema



echo "Load all the extracts"
./load_sample_files.sh /docs_for_solr http://solr:8983/solr/documents/update
echo "Done with setup"

# No longer need this because the PDF's are ALSO served up in the ./app image.
# https://github.com/http-party/http-server
#http-server ../files --cors --ssl --cert ./cert.pem --key ./key.pem -p 8443
#http-server ../files --cors -p 8443

#cd /files
#python3 -m http.server 8080
