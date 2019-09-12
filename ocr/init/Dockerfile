FROM mcr.microsoft.com/powershell:ubuntu-18.04

#RUN apt-get install python3 -y




# Best practice is slow!
RUN apt-get update && apt-get install -y \
  python3 curl wget nodejs \
  && rm -rf /var/lib/apt/lists/*

RUN apt-get update
RUN apt install -y npm

RUN npm install http-server -g



ADD init /code
ADD files /files
ADD extracts /extracts

WORKDIR /code

CMD ./init.sh
