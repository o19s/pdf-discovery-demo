FROM mcr.microsoft.com/powershell:ubuntu-18.04

#RUN apt-get install python3 -y

# Best practice is slow!
RUN apt-get update && apt-get install -y \
  python3 curl \
  && rm -rf /var/lib/apt/lists/*

ADD init /code
ADD files /files
ADD extracts /extracts

#USER solr
CMD /code/init.sh
