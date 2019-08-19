FROM solr:6.2.1

# Best practice is slow!
#RUN apt-get update && apt-get install -y \
#  curl \
#  && rm -rf /var/lib/apt/lists/*

ADD . /code

USER solr
CMD /code/init.sh
