FROM solr:7.1

# Add Tesseract
USER root
RUN set -e; \
  apt-get update; \
  apt-get -y install tesseract-ocr tesseract-ocr-eng tesseract-ocr-ita tesseract-ocr-fra tesseract-ocr-spa tesseract-ocr-deu; \
  rm -rf /var/lib/apt/lists/*

# Add Tika
ADD tika-app-1.22.jar /opt/tika/tika-app-1.22.jar

# Add customizations
ADD lib/*.jar /opt/solr/server/solr-webapp/webapp/WEB-INF/lib/
ADD web.xml /opt/solr/server/solr-webapp/webapp/WEB-INF

COPY solr-home /solr-config
ADD set_heap.sh /docker-entrypoint-initdb.db
RUN chown -R 8983:8983 /opt/solr/server/solr
USER solr
