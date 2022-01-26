FROM mcr.microsoft.com/powershell:ubuntu-20.04

# Best practice is slow!
RUN apt-get update && apt-get install -y \
  curl wget openjdk-8-jdk \
  && rm -rf /var/lib/apt/lists/*

ADD init /init
ADD docs_for_solr /docs_for_solr
ADD docs_for_solr2 /docs_for_solr2
ADD files /files

WORKDIR /init

CMD ./init.sh
