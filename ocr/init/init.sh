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

echo "Uploading security.json to ZK"

java -jar ./jackhanna-0.0.4-SNAPSHOT.jar zookeeper:2181 putfile --file security.json --zkFile /security.json



#/opt/solr/server/scripts/cloud-scripts/zkcli.sh -zkhost zookeeper:2181 -cmd putfile /security.json /code/security.json
sleep 5 #give ZK chance to sync with Solr first

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
curl --user solr:SolrRocks "http://solr:8983/solr/admin/collections?action=CREATE&name=documents&collection.configName=configuration1&numShards=2&maxShardsPerNode=2" #place holder

echo "Sleeping 5"
sleep 5


echo "Load all the extracts"
./load_sample_files.sh /docs_for_solr http://solr:8983/solr/documents/update
./load_sample_files.sh /docs_for_solr2 http://solr:8983/solr/documents/update
echo "Done with setup"
