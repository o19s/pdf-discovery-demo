## setup from project root

```
docker-compose up
```

```
http://localhost:8983/solr/documents/select?fl=id,path,page_dimensions:[json]&hl=on&indent=on&q=For&wt=json
```

## Measuring Quality

https://abbyy.technology/en:kb:tip:ocr-accuracy
https://www.hsassocs.com/what-is-ocr-accuracy/
https://dataturks.com/blog/compare-image-text-recognition-apis.php

Okay, Let's just try and compare the tokens.

So, running it with pairwise, we have one issue, wihth is OCR has `Iam` and text is `I am`.  Then change to only looking at 4 character or longer pairs, and it all matched!  This was with Brainard.

## serving up files.

npm install http-server -g

http-server ../files --cors --ssl --cert ./cert.pem --key ./key.pem

## Manually run Processing

```
java -cp ./tika-properties:tika-app-1.22.jar org.apache.tika.cli.TikaCLI --xmp --jsonRecursive --extract --pretty-print -x ./files/lots-of-files/bernanke_20100203a.pdf
```

java -cp tika-app-1.22.jar org.apache.tika.cli.TikaCLI --config=tika-config.xml --xmp --jsonRecursive --extract --pretty-print -x ./files/lots-of-files/bernanke_20100203a.pdf


java -cp tika-app-1.23-SNAPSHOT.jar org.apache.tika.cli.TikaCLI --config=tika-config.xml --jsonRecursive --extract --pretty-print -v -x ./files/lots-of-files/bernanke_20100203a.pdf


pwsh create-solr-docs.ps1 ./temp/extracts ./temp/files ./temp/solr

curl --user admin:3YnRnaMk7sLbc "http://localhost:8983/solr/admin/collections?action=CREATE&name=documents&collection.configName=configuration1&numShards=2&maxShardsPerNode=2"

  curl -X POST -H "Content-Type: application/json" --data-binary @./temp/solr/alvarez20140715a.pdf.json http://localhost:8983/solr/documents/update?commit=true


Before
-rw-r--r--   1 epugh  staff   267K Oct 24 13:20 GPRAreport2008-2009_frb.pdf.json
-rw-r--r--   1 epugh  staff   921K Oct 24 13:20 UnsolicitedCreditOffers2004.pdf.json
-rw-r--r--   1 epugh  staff    74K Oct 24 13:20 alvarez20140715a.pdf.json
-rw-r--r--   1 epugh  staff   550K Oct 24 13:20 bcreg20090507a1.pdf.json
-rw-r--r--   1 epugh  staff   194K Oct 24 13:20 duke20100226a.pdf.json
-rw-r--r--   1 epugh  staff   264K Oct 24 13:20 powell20180824a.pdf.json
-rw-r--r--   1 epugh  staff   173K Oct 24 13:20 table2.pdf.json
-rw-r--r--   1 epugh  staff   137K Oct 24 13:20 tarullo20100520a.pdf.json
-rw-r--r--   1 epugh  staff   312K Oct 24 13:20 tarullo20161202a.pdf.json
-rw-r--r--   1 epugh  staff   719K Oct 24 13:20 usb_p5.pdf.json
-rw-r--r--   1 epugh  staff    13K Oct 24 13:20 webcharts.pdf.json

After with base64PDF
-rw-r--r--   1 epugh  staff   586K Oct 24 14:05 GPRAreport2008-2009_frb.pdf.json
-rw-r--r--   1 epugh  staff   1.3M Oct 24 14:05 UnsolicitedCreditOffers2004.pdf.json
-rw-r--r--   1 epugh  staff   143K Oct 24 14:04 alvarez20140715a.pdf.json
-rw-r--r--   1 epugh  staff    14M Oct 24 14:04 bcreg20090507a1.pdf.json
-rw-r--r--   1 epugh  staff   273K Oct 24 14:04 duke20100226a.pdf.json
-rw-r--r--   1 epugh  staff   919K Oct 24 14:05 powell20180824a.pdf.json
-rw-r--r--   1 epugh  staff   268K Oct 24 14:05 table2.pdf.json
-rw-r--r--   1 epugh  staff   191K Oct 24 14:05 tarullo20100520a.pdf.json
-rw-r--r--   1 epugh  staff   463K Oct 24 14:05 tarullo20161202a.pdf.json
-rw-r--r--   1 epugh  staff   903K Oct 24 14:05 usb_p5.pdf.json
-rw-r--r--   1 epugh  staff    28K Oct 24 14:05 webcharts.pdf.json



1) Post PDF + ID to /documents/update
2) SURH:

  a) Save base64 pdf to temp dir.
  b) Run tika-app as a cmnd line....
  c) Get back output.
  d) Create final child documents.
  e) Pass on to indexing pipeline.

  Copy tika-app-1.23.jar up to Solr.   Do it all in ScriptingUpdateRequestHandler

OR

1) /documents/update/extracts - ExtractHandler
    - Need to confirm that ExtractHandler with magic tika-config.xml products hocr.
    - pass in parameteterized metadata.
    - Drop in tika 1.23 with our custom tika-config.xml
    -> Tika and Tesseract do their thing.

2) ScriptingUpdateRequestHandler - gets the output from the ExtractHandler.
    - build the final parent/children doc, and pass that along.

Todos:
1) Confirm ExtractHandler after running can then move to ScriptingUpdateRequestHandler
2) Figure out how to add the .properties to Solr?
3) try out the


curl 'http://localhost:8983/solr/documents/update/extract?literal.id=doc1&commit=true -F "myfile=@files/alvarez20140715a.pdf"

# Does HOCR response
curl 'http://localhost:8983/solr/documents/update/extract?literal.id=doc2&commit=true&extractOnly=true' -F "myfile=@files/alvarez20140715a.pdf"

# Store via /update/speeches end point.
curl 'http://localhost:8983/solr/documents/update/speeches?literal.id=doc2&commit=true' -F "myfile=@files/alvarez20140715a.pdf"
curl 'http://localhost:8983/solr/documents/update/speeches?commit=true&fmap.stream_name=id' -F "myfile=@files/alvarez20140715a.pdf"
http://localhost:8983/solr/documents/select?fq=content_type:childDocument&q=parent_id:alvarez20140715a.pdf&sort=page_number%20asc&wt=xml

curl 'http://localhost:8983/solr/documents/update/speeches?commit=true&fmap.stream_name=id' -F "myfile=@files/alvarez20140715a.pdf"

# Need to debug the JavaScript file `process-speech.js`?

There is a copy that runs outside of Solr:
`npm test-parsing-ocr-text.js`

# How to load test the Tika/Tesseract/Solr stack
```
post -url http://localhost:8983/solr/documents/update/speeches -filetypes pdf -out yes https://www.federalreserve.gov/newsevents/speech/powell20191008a.htm
```

## Using scrapy.  https://scrapy.org/

Run the spider via `scrapy runspider download_pdf_files_spider.py`
