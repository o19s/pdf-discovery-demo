Start with
https://opensourceconnections.com/?p=5595&preview=true




1. Lets Backup.

> curl 'http://localhost:8983/solr/admin/collections?action=BACKUP&name=documentsv7&collection=documents&location=/solr_backup' -H 'Content-type:application/json'

Then everything ends up `/solr_backup`.

1. Upgrade to Solr 8.6.2



Update `docker-compose.yml` for Solr to 8.6.2


1. Deploy `security.json`

We need a security.json file to be deployed in order to be able to use API's to deploy configsets.

> /opt/solr/server/scripts/cloud-scripts/zkcli.sh -zkhost zookeeper:2181 -cmd putfile /security.json /code/security.json

1. Lets Restore

> curl 'http://localhost:8983/solr/admin/collections?action=RESTORE&name=documentsv7&location=/solr_backup&collection=documentsv7' -H 'Content-type:application/json'


1. Lets deploy the Updated configset.

cd ./solr/solr_home/ecommerce/conf

edit `solrconfig.xml` and set luceneMatchVersion to 8.6

> (cd solr/solr-home/index/conf && zip -r - *) > ./solr/solr-home/documentsv8.zip

> curl  --user solr:SolrRocks -X POST --header "Content-Type:application/octet-stream" --data-binary @./solr/solr-home/documentsv8.zip "http://localhost:8983/solr/admin/configs?action=UPLOAD&name=documentsv8"

1. Create a new Collection using the Solr Admin called `documentsv8` using the new configset.

> curl 'http://localhost:8983/solr/admin/collections?action=REINDEXCOLLECTION&name=documentsv7&target=documentsv8&configName=documentsv8&numShards=2&maxShardsPerNode=2&async=99' -H 'Content-type:application/json'

Check the status with

> curl 'http://localhost:8983/solr/admin/colle
-type:application/json'


1. Point the UI at the new front end and confirm it works.



### Instructions for upgrading software.

> docker run -p 8983:8983 ubuntu

DO the wget to get Solr 7.1 and run the install script.

Do the command to install zookeeper that comes with 7.1

Do the command to uninstall Solr 7.1

Do the command to uninstall Zookeeper.

Do the command to download 8.6.2
