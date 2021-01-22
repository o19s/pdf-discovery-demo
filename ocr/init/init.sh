#!/bin/bash

# This script goes through the steps of setting up Solr for the PDF Discovery Demo.
set -e

# Ansi color code variables
ERROR='\033[0;31m[QUICKSTART] '
MAJOR='\033[0;34m[QUICKSTART] '
MINOR='\033[0;37m[QUICKSTART]    '
RESET='\033[0m' # No Color


echo -e "${MAJOR}Waiting for Solr cluster to start up and the one node to be online.${RESET}"
./wait-for-solr-cluster.sh

echo -e "${MINOR}upload security.json to zookeeper${RESET}"
java -jar ./jackhanna-0.0.4-SNAPSHOT.jar zoo1:2181 putfile --file security.json --zkFile /security.json

echo -e "${MINOR}wait for security.json to be available to solr${RESET}"
./wait-for-zk-200.sh

echo -e "${MAJOR}Package documents configset.${RESET}"
(cd configsets/documents/conf && zip -r - *) > ./configsets/documents.zip
echo -e "${MINOR}Upload documents.zip configset${RESET}"
curl  --user solr:SolrRocks -X POST --header "Content-Type:application/octet-stream" --data-binary @./configsets/documents.zip "http://solr:8983/solr/admin/configs?action=UPLOAD&name=documents"


echo "Creating documents collection...."
curl --user solr:SolrRocks "http://solr:8983/solr/admin/collections?action=CREATE&name=documents&collection.configName=documents&numShards=2&maxShardsPerNode=2"

echo "Sleeping 5"
sleep 5


echo "Load all the extracts"
./load_sample_files.sh /docs_for_solr http://solr:8983/solr/documents/update
./load_sample_files.sh /docs_for_solr2 http://solr:8983/solr/documents/update
echo "Done with setup"
