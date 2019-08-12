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
