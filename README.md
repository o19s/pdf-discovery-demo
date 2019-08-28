# pdfjs-vue

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
