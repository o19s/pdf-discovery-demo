# PDF.JS End-to-End Search / Snippets / Highlighting

This is a demonstration project that leverages the Solr Payload Component from https://github.com/o19s/payload-component and the Offset Highlighter Component from https://github.com/o19s/offset-hl-formatter to make PDF documents both searchable and have highlighting of text in context.

## Quickstart!

Just run `docker-compose up --build` and then browse to http://localhost:8080.  You will need to wait till the _init_ process finishes loading all of the Solr documents to use the website properly.


Solr is running on http://localhost:8983, with a CORS version at http://localhost:8000, and PDF images are served up on http://localhost:8443.

You may need to do `docker-compose down -v` if you have already run the demo.

You can also access this demo at http://pdf-discovery-demo.dev.o19s.com:8080/

## I want to learn how this works!
There are actually a couple of things that you can learn from this project.  They are written up on the wiki:

1. [Using Tika/Tesseract standalone outside of Solr](https://github.com/o19s/pdf-discovery-demo/wiki/1.-Using-Tika-and-Tesseract-Outside-of-Solr).
1. [Using Tika/Tesseract as an API exposed by Solr via ExtractingRequestHandler](https://github.com/o19s/pdf-discovery-demo/wiki/2.-Using-Tika-and-Tesseract-as-an-API-exposed-by-Solr-via-ExtractingRequestHandler)
1. [Parsing Tika/Tesseract output inside of Solr via the StatelessScriptUpdateProcessorFactory](https://github.com/o19s/pdf-discovery-demo/wiki/3.-Parsing-Tika-Tesseract-Output-Inside-of-Solr-via-StatelessScriptUpdateProcessorFactory)
1. [Tesseract 3 and Tika](https://github.com/o19s/pdf-discovery-demo/wiki/Tesseract-3-and-Tika).
1. [Store binary data in Solr and serve it up like a object store!](https://github.com/o19s/pdf-discovery-demo/wiki/Store-binary-data-in-Solr-and-serve-it-up-like-a-object-store!)



# Development

## Vue Component
`cd` into the `pdf-viewer` directory.

### Development
```
npm install
npm run serve
```

### To build new version of pdf viewer standalone module
from inside the `pdf-viewer` directory:

```
./build.sh
```

And the script witll build and copy the `dist` directory contents into `/app/pdfviewer/`

## Text Extraction and OCR process

From the `./ocr/` directory, there are some Powershell ( ;-) ) scripts to recreate the files if you want.

1. `cd ./ocr`

1. Make sure you have Tesseract installed.  `brew install tesseract` on OSX.

1. Check the `./tika-properties/.../TesseractOCRConfig.properties` file, make sure it points to your Tesseract setup.

1. Run the extraction process, creating the working docs in the `/extracts` directory from the PDF's in `/files`.

```
pwsh extract-directory.ps1 ./files
```

1. Create Solr documents.

```
pwsh create-solr-docs.ps1 ./extracts ./files ./docs_for_solr/
```

### Interested in manually extracting content from Tika Server?

From the `./ocr/` directory run:

```
curl -T files/bcreg20090424a1.pdf http://pdf-discovery-demo.dev.o19s.com:9998/rmeta --header "X-Tika-OCRLanguage: eng" --header "X-Tika-PDFOcrStrategy: ocr_and_text_extraction" --header "X-Tika-OCRoutputType: hocr"
```


## Run the Demo using Docker

```
docker-compose down -v
docker-compose build
docker-compose up
```

And then browse to http://localhost:8080/

To see payloads in action in Solr then run:
```
http://localhost:8983/solr/documents/select?fl=id,content,path,page_dimensions&hl=on&hl.snippets=10&hl.fl=content&indent=on&q=taxes&wt=json&pl=on&echoParams=all
```


## Building Docker images
Build the docker images from scratch via:

```
docker-compose build

```

Deploy to our private Docker registry http://harbor.dev.o19s.com:

```
docker login harbor.dev.o19s.com

docker tag pdf-discovery-demo_solr-proxy harbor.dev.o19s.com/pdf-discovery-demo/solr-proxy
docker tag pdf-discovery-demo_app harbor.dev.o19s.com/pdf-discovery-demo/app
docker tag pdf-discovery-demo_solr harbor.dev.o19s.com/pdf-discovery-demo/solr
docker tag pdf-discovery-demo_init harbor.dev.o19s.com/pdf-discovery-demo/init

docker push harbor.dev.o19s.com/pdf-discovery-demo/solr-proxy
docker push harbor.dev.o19s.com/pdf-discovery-demo/app
docker push harbor.dev.o19s.com/pdf-discovery-demo/solr
docker push harbor.dev.o19s.com/pdf-discovery-demo/init
