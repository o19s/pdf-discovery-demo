FROM solr:7.1

# Add customizations
ADD lib/*.jar /opt/solr/server/solr-webapp/webapp/WEB-INF/lib/
ADD web.xml /opt/solr/server/solr-webapp/webapp/WEB-INF

USER root
COPY solr-home /solr-config
ADD set_heap.sh /docker-entrypoint-initdb.db
RUN chown -R 8983:8983 /opt/solr/server/solr
USER solr
