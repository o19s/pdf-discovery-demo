wait-for-solr.sh --max-attempts 25 --wait-seconds 4 --solr-url http://solr:8983

bin/solr package add-repo osc https://raw.githubusercontent.com/o19s/payload-component/master/repo
bin/solr package install solr-payloads:1.1.4


