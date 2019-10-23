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

java -cp tika-app-1.22.jar org.apache.tika.cli.TikaCLI --config=default-tika-config.xml --xmp --jsonRecursive --extract --pretty-print -x ./files/lots-of-files/bernanke_20100203a.pdf


java -cp tika-app-1.23-SNAPSHOT.jar org.apache.tika.cli.TikaCLI --config=default-tika-config.xml --jsonRecursive --extract --pretty-print -v -x ./files/lots-of-files/bernanke_20100203a.pdf


pwsh extract.ps1 /Users/epugh/Google\ Drive\ File\ Stream/My\ Drive/frb_speeches/testimony/bernanke20100721a.pdf

pwsh create-solr-docs.ps1 ./temp/extracts ./temp/files ./temp/solr

curl --user admin:3YnRnaMk7sLbc "http://localhost:8983/solr/admin/collections?action=CREATE&name=documents&collection.configName=configuration1&numShards=2&maxShardsPerNode=2"

  curl -X POST -H "Content-Type: application/json" --data-binary @./temp/solr/alvarez20140715a.pdf.json http://localhost:8983/solr/documents/update?commit=true
