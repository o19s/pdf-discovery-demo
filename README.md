# pdfjs-vue

## Quickstart!

Just do `docker-compose up` and then browse to http://localhost:8080.  

Solr is running on http://localhost:8983, with a CORS version at http://localhost:8000, and PDF images are served up on https://localhost:8443.

You may need to do `docker-compose down -v` if you have already run the demo.


## Project setup
```
npm install
```

#Vue Component
`cd` into the `pdf-viewer` directory.

## Development
```
npm install
npm run serve
```

## To build new version of pdf viewer standalone module
from inside the `pdf-viewer` directory:

```
npx vue-cli-service build --target lib --name pdfviewer ./src/components/PDFVIewer.vue
```

copy the `dist` directory contents into `/app/pdfviewer/`

# Run Solr Demo

## setup from project root

```
docker-compose down -v
docker-compose build
docker-compose up
```

And then browse to

```
http://localhost:8983/solr/documents/select?fl=id,content,path,page_dimensions&hl=on&hl.snippets=10&hl.fl=content&indent=on&q=taxes&wt=json&pl=on&echoParams=all
```


# Building Docker images
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
