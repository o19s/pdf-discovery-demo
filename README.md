# pdfjs-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Run Solr Demo

## setup from project root

```
docker-compose up
```

And then browse to

```
http://localhost:8983/solr/documents/select?fl=id,path,page_dimensions:[json]&hl=on&hl.field=content_ocr&indent=on&q=For&wt=json&pl=on
```
