java -cp tika-server-1.22.jar:./tika org.apache.tika.server.TikaServerCli


curl -T ../public/brainard20190711a.pdf http://localhost:9998/tika --header "X-Tika-PDFOcrStrategy: ocr_only"

curl -T ../public/example.pdf http://localhost:9998/tika --header "X-Tika-OCRLanguage: eng" --header "X-Tika-PDFOcrStrategy: ocr_only"

curl -T ../public/brainard20190711a.pdf http://localhost:9998/tika --header "X-Tika-OCRLanguage: eng" --header "X-Tika-PDFOcrStrategy: ocr_only"

Adding --header "X-Tika-OCRoutputType: txt"

curl -T ../public/brainard20190711a.pdf http://localhost:9998/tika --header "X-Tika-OCRLanguage: eng" --header "X-Tika-PDFOcrStrategy: ocr_and_text_extraction" --header "X-Tika-OCRoutputType: hocr"  --header "X-Tika-OCRtessdataPath: /usr/local/Cellar/tesseract/4.1.0/share/tessdata" --header "X-Tika-OCRtesseractPath: /usr/local/bin"




/usr/local/bin/tesseract /var/folders/hd/s8jf5wvs4xl4t4mbf0c15rcw0000gp/T/apache-tika-4283227378248022789.tmp /var/folders/hd/s8jf5wvs4xl4t4mbf0c15rcw0000gp/T/apache-tika-4138920100103476876.tmp -l eng --psm 1


/usr/local/bin/tesseract /var/folders/hd/s8jf5wvs4xl4t4mbf0c15rcw0000gp/T/apache-tika-4283227378248022789.tmp /var/folders/hd/s8jf5wvs4xl4t4mbf0c15rcw0000gp/T/apache-tika-4138920100103476876.tmp -l eng --psm 1 -c page_separator= -c preserve_interword_spaces=0 hocr

  /usr/local/bin/tesseract /var/folders/hd/s8jf5wvs4xl4t4mbf0c15rcw0000gp/T/apache-tika-4283227378248022789.tmp /var/folders/hd/s8jf5wvs4xl4t4mbf0c15rcw0000gp/T/apache-tika-eric.tmp -l eng --psm 1 -c page_separator= -c preserve_interword_spaces=0 hocr


[/usr/local/bin/tesseract, /var/folders/hd/s8jf5wvs4xl4t4mbf0c15rcw0000gp/T/apache-tika-310780474151606022.tmp, /var/folders/hd/s8jf5wvs4xl4t4mbf0c15rcw0000gp/T/apache-tika-8552240237463289270.tmp, -l, eng, --psm, 1, -c, page_separator=, -c, preserve_interword_spaces=0, txt]


## Working Query!

Assuming you ran `brew install tesseract`

* Start Tika via:
```
java -cp tika-server-1.22.jar org.apache.tika.server.TikaServerCli
```

* Post a document and get back embedded HOCR output

```
curl -T ../public/brainard20190711a.pdf http://localhost:9998/rmeta --header "X-Tika-OCRLanguage: eng" --header "X-Tika-PDFOcrStrategy: ocr_only" --header "X-Tika-OCRoutputType: hocr"

```

Assuming you have 'brew install powershell'

```
pwsh extract.ps1 ../public/brainard20190711a.pdf
```

* How to run tika as a cli app

java -jar tika-app-1.22.jar --help

java -jar tika-app-1.22.jar --xml --jsonRecursive --extract --pretty-print --header "X-Tika-OCRLanguage: eng" --header "X-Tika-PDFOcrStrategy: ocr_only" --header "X-Tika-OCRoutputType: hocr" ../public/brainard20190711a.pdf

java -jar ./tika-properties:tika-app-1.22.jar --json --jsonRecursive --extract --pretty-print ../public/brainard20190711a.pdf


java -cp ./tika-properties:tika-app-1.22.jar org.apache.tika.cli.TikaCLI --json --jsonRecursive --extract --pretty-print ../public/brainard20190711a.pdf

```
java -cp tika-app-1.22.jar org.apache.tika.cli.TikaCLI --xmp --jsonRecursive --extract --pretty-print -x ../public/brainard20190711a.pdf
```

this one works
```
java -cp ./tika-properties:tika-app-1.22.jar org.apache.tika.cli.TikaCLI --xmp --jsonRecursive --extract --pretty-print --verbose -x ../public/branard20190711a.pdf
```


```
java -cp ./tika-properties:tika-app-1.22.jar org.apache.tika.cli.TikaCLI --xmp --jsonRecursive --extract --pretty-print -x ../public/branard20190711a.pdf 
```

{
  "id":"brainard201900711a.pdf",
  "page_dimensions":"page1: 0 0 1224 1584 | page2: 0 0 1224 1584 | page3: 0 0 1224 1584"
  "extracted_text": "lorum ipsom facto.",
  "hocr_text": "lorum|bbox 287 321 319 332; x_wconf 96 ipsom|bbox 325 315 429 332; x_wconf 96 facto.|bbox 325 315 429 332; x_wconf 96",
  "hocr_text_clean": "lorum|287 321 319 332 ipsom|325 315 429 332 facto|325 315 429 332"
  "hocr_text_clean_64": "lorum|Mjg3IDMyMSAzMTkgMzMy ipsom|MzI1IDMxNSA0MjkgMzMy facto|MzI1IDMxNSA0MjkgMzMy"
}



java -cp ./tika-properties:tika-app-1.22.jar org.apache.tika.cli.TikaCLI --xmp --jsonRecursive --extract --pretty-print --verbose -x ../public/branard20190711a.pdf


java -cp tika-app-1.22.jar org.apache.tika.cli.TikaCLI --xmp --jsonRecursive --extract --pretty-print -x ../public/branard20190711a.pdf






1) move ocr code to github project
1.5) 1.5.1) Update code to solr 7.1.  1.5.2)Remove base64?  1.5.3)Setup Gradle based build.
2) create simple demo project to test with/demo with.  demo highlights.
3) Eric test with powerpoint.
4) Eric test non server version of Tika works
5) Eric test /extract with those header and see...
6) Eric update powerpoint demo with new ocr project
7) solr-hocr-field
8) Eric stand up demo with some FRB docs and give static responsw ith highlight to Andrew to work with.
