# PDF.JS End-to-End Search / Snippets / Highlighting

## Quickstart!

Just do `docker-compose up` and then browse to http://localhost:8080.

Solr is running on http://localhost:8983, with a CORS version at http://localhost:8000, and PDF images are served up on http://localhost:8443.

You may need to do `docker-compose down -v` if you have already run the demo.

Online you can access the app at http://165.22.182.252:8080/

You will need to wait till the _init_ process finishes loading all of the Solr documents to use the website properly.

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
npx vue-cli-service build --target lib --name pdfviewer ./src/components/PDFVIewer.vue
```

copy the `dist` directory contents into `/app/pdfviewer/`

## Text Extraction and OCR process

From the `./ocr/` directory, there are some Powershell ( ;-) ) scripts to recreate the files if you want.

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


## Run Solr Demo

### setup from project root

```
docker-compose down -v
docker-compose build
docker-compose up
```

And then browse to

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
