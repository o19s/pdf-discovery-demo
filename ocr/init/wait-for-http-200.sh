bash -c 'while [[ "$(curl -s -o /dev/null -w ''%{http_code}'' http://solr1:8983/solr/documents/admin/ping)" != "200" ]]; do sleep 5; done'
