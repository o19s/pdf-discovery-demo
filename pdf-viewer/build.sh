#!/bin/bash
npx vue-cli-service build --target lib --name pdfviewer ./src/components/PDFVIewer.vue
rm -r ../app/pdfviewer
cp -r dist ../app/pdfviewer
