FROM apache/tika:1.28-full
MAINTAINER epugh@opensourceconnections.com

RUN apt-get update  \
  && apt-get install gdal-bin tesseract-ocr tesseract-ocr-eng tesseract-ocr-ita  \
    tesseract-ocr-fra tesseract-ocr-spa tesseract-ocr-deu -y \
	&& apt-get clean -y && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
