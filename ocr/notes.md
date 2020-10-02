# How to run OCR process

put source PDF files into ./ocr/files/

> cd ocr/

> pwsh extract-directory.ps1 ./files ./extracts
> pwsh extract-directory.ps1 ./files2 ./extracts2

> pwsh create-solr-docs.ps1 ./extracts ./files ./docs_for_solr/
> pwsh create-solr-docs.ps1 ./extracts2 ./files2 ./docs_for_solr2/

_Note: if you don't want to pollute the Git history, you can use a different directory, just fix the paths_

## setup from project root
```
docker-compose up
```

```
http://localhost:8983/solr/documents/select?fl=id,path,page_dimensions:[json]&hl=on&indent=on&q=For&wt=json
```

# Measuring Quality

https://abbyy.technology/en:kb:tip:ocr-accuracy
https://www.hsassocs.com/what-is-ocr-accuracy/
https://dataturks.com/blog/compare-image-text-recognition-apis.php
https://cwiki.apache.org/confluence/display/TIKA/TikaEval

## Pairwise comparison of OCR and Electronic Text

### Manually run Processing Pairwise Comparison

Okay, Let's just try and compare the tokens.

So, running it with pairwise, we have one issue, which is that OCR has `Iam` and text is `I am`.  Then change the script to only looking at 4 character or longer pairs, and it all matched!  This was with Brainard file.

> pwsh ./accuracy.ps1 ./files/powell20180824a.pdf


## Tika Eval

We are interested in some specific old files that were done in typewritter and Digitized for FRASER.
So, in the below docs add a filter parameter: `-fileList digitized_for_fraser_pdfs.txt`



> cd ocr/

Extract the original "Digitized for FRASER" electronic text, as our baseline.
> java -jar tika-app-1.24.1.jar -c ./measure_quality/tika-config-no-ocr.xml -J -t -i files -o measure_quality/extractsA

Now run the Tesseract OCR process over the same documents as our experiment.
> java -jar tika-app-1.24.1.jar -c ./measure_quality/tika-config-ocr-only.xml -J -t -i files -o measure_quality/extractsB

Okay, time to run the analytics!

> java -jar tika-eval-1.24.1.jar Compare -extractsA measure_quality/extractsA -extractsB measure_quality/extractsB -db measure_quality/comparisondb

> java -jar tika-eval-1.24.1.jar Report -db measure_quality/comparisondb  -rd measure_quality/reports

So..    That was fine and dandy, but honestly, maybe what we care about are the old ones?  That would
be 1634473.pdf, 1743612.pdf, and 1743664.pdf.  Lets re-test just those.

> java -jar tika-app-1.24.1.jar -c ./measure_quality/tika-config-no-ocr.xml -J -t -i files -o measure_quality/digitizedForFraserExtracts -fileList measure_quality/digitized_for_fraser_pdfs.txt

> java -jar tika-app-1.24.1.jar -c ./measure_quality/tika-config-ocr-only.xml -J -t -i files -o measure_quality/tesseractExtracts -fileList measure_quality/digitized_for_fraser_pdfs.txt

And make some reports:

> java -jar tika-eval-1.24.1.jar Compare -extractsA measure_quality/digitizedForFraserExtracts -extractsB measure_quality/tesseractExtracts -db measure_quality/fraserVsTesseract

> java -jar tika-eval-1.24.1.jar Report -db measure_quality/fraserVsTesseract  -rd measure_quality/reportsDigitizedOnly

So, B looks amazingly better, however, this is due to a quirk where the text in 1634473.pdf is exported as `F e d e r a l R e s e r v e` instead of `Federal Reserve` for some reason.  However, Adobe Acrobat does list it as `Federal Reserve`, so maybe a quirk of Tika/PDFBox?

> java -jar pdfbox-app-2.0.20.jar ExtractText ./files/1634473.pdf

## Can I Understand Candidates for Spell Checking?

wget "https://raw.githubusercontent.com/apache/tika/master/tika-eval/src/main/resources/common_tokens/eng"

Then remove everything but the actual word data we want and the headers:
TOKEN	DOCFREQ	TERMFREQ
save it as eng_cleaned.tsv

docker cp eng_cleaned.tsv pdf-discovery-demo_solr_1:/var/solr/data/userfiles/

commit(real_estate,
  update(real_estate,
    parseTSV(
      cat('eng')
    )
  )
)

curl --data-urlencode 'expr=parseTSV(
  cat("eng_cleaned.tsv",maxLines=-1)
  )' http://localhost:8983/solr/documents/stream

curl --data-urlencode 'expr=
select(
  parseTSV(
    cat("eng_cleaned.tsv",maxLines=-1)
  ),
  TOKEN as token
)' http://localhost:8983/solr/documents/stream

Check out some common words:

```
curl --data-urlencode 'expr=
select(
  parseTSV(
    cat("eng_cleaned.tsv",maxLines=-1)
  ),
  TOKEN as token
)' http://localhost:8983/solr/documents/stream | grep run
```

Now sort it
```
curl --data-urlencode 'expr=
sort(
  select(
    parseTSV(
      cat("eng_cleaned.tsv",maxLines=-1)
    ),
    TOKEN as token
  ),
  by="token asc"
)
' http://localhost:8983/solr/documents/stream
```


curl --data-urlencode 'expr=
  cat("eng",maxLines=5)
  ' http://localhost:8983/solr/documents/stream

curl --data-urlencode 'expr=
select(
  cat("eng",maxLines=5),
  line as line
  )
  ' http://localhost:8983/solr/documents/stream  


curl "http://localhost:8983/solr/documents/select?q=*:*&terms=true&terms.fl=content&terms.limit=2000000&terms.lower=a&terms.lower.incl=false&terms.sort=index&rows=0"

```
curl --data-urlencode 'expr=
significantTerms(documents,
                 q="*:*",
                 field="content",
                 limit="50000",
                 minDocFreq="1",
                 maxDocFreq="100000",
                 minTermLength="2")
  ' http://localhost:8983/solr/documents/stream
```
significantTerms(collection1,
                 q="body:Solr",
                 field="author",
                 limit="50",
                 minDocFreq="10",
                 maxDocFreq=".20",
                 minTermLength="5")

                 select(parseCSV(cat("yr2017.csv", maxLines="2")),
                        Resolution.Description,
                        analyze(Resolution.Description, _text_) as tokens_ss)

Can we get terms not using the terms component??

```
curl --data-urlencode 'expr=
search(documents,
                 q="*:*",
                 fl="content",
                 rows="1")
  ' http://localhost:8983/solr/documents/stream
```

Holy F, this below works with `attr_*` as the field type

```
curl --data-urlencode 'expr=
select(
  search(documents,
                   q="*:*",
                   fl="content",
                   rows="1"),
  content as tokens_ss,
  analyze(content, attr_*) as tokens_ss3
)
  ' http://localhost:8983/solr/documents/stream
```      

I think this SHOULD work, with `content` as the field type:

```
curl --data-urlencode 'expr=
select(
  search(documents,
                   q="*:*",
                   fl="content",
                   rows="1"),
  analyze(content, content) as token_ss
)
  ' http://localhost:8983/solr/documents/stream
```       

okay, lets blow it out into individual fields
```
curl --data-urlencode 'expr=
cartesianProduct(
  select(
    search(documents,
                     q="*:*",
                     fl="content",
                     rows="1"),
    analyze(content, content) as token
  ),
  token
)
  ' http://localhost:8983/solr/documents/stream           
```  

And now, lets subtract one from the other.

Actually. lets unique it up.

```
curl --data-urlencode 'expr=
sort(
  cartesianProduct(
    select(
      search(documents,
                       q="*:*",
                       fl="content",
                       rows="1"),
      analyze(content, content) as token
    ),
    token
  ),
  by="token asc"
)
  ' http://localhost:8983/solr/documents/stream           
```  
91641 tokens after doing `| grep token | wc -l`

```
curl --data-urlencode 'expr=
unique(
  sort(
    cartesianProduct(
      select(
        search(documents,
                         q="*:*",
                         fl="content",
                         rows="1"),
        analyze(content, content) as token
      ),
      token
    ),
    by="token asc"
  ),
  over="token"
)
  ' http://localhost:8983/solr/documents/stream           
```

now 6301 tokens after uniquing it!

OKAY LETS PUT IT TOGETHER.

Stream A: Our Tokens.
Stream B: The English Common Words

Both are sorted.

```
curl --data-urlencode 'expr=
complement(
  unique(
    sort(
      cartesianProduct(
        select(
          search(documents,
                           q="*:*",
                           fl="content",
                           rows="100000"),
          analyze(content, content) as token
        ),
        token
      ),
      by="token asc"
    ),
    over="token"
  ),
  sort(
    select(
      parseTSV(
        cat("eng_cleaned.tsv",maxLines=-1)
      ),
      TOKEN as token
    ),
    by="token asc"
  ),
  on="token"
)
  ' http://localhost:8983/solr/documents/stream           
```

Product is 2615 potential spelling issues.

Okay, need to include the counts to see what isn't just a one off.


So, lets try with significantTerms

```
curl --data-urlencode 'expr=
significantTerms(documents,
                 q="content:federal",
                 field="content",
                 limit="50",
                 minDocFreq="10",
                 maxDocFreq=".20",
                 minTermLength="5")
  ' http://localhost:8983/solr/documents/stream
```

Now, lets get all the terms that show up at least in 1 doc (i.e all docs). and not more that 99.9 percent!

```
curl --data-urlencode 'expr=
significantTerms(documents,
                 q="content:*",
                 field="content",
                 limit="50000",
                 minDocFreq="1",
                 maxDocFreq=".999",
                 minTermLength="4")
    ' http://localhost:8983/solr/documents/stream
```

We have 5280 candidate terms.

Lets remove the common english ones!

```
curl --data-urlencode 'expr=
sort(
  select(
    significantTerms(documents,
                     q="content:*",
                     field="content",
                     limit="50000",
                     minDocFreq="1",
                     maxDocFreq=".999",
                     minTermLength="4"),
    term as token,
    foreground as count
  ),
  by="token asc"
)
    ' http://localhost:8983/solr/documents/stream
```

Here are our candidates with their counts:
```
curl --data-urlencode 'expr=
complement(
  sort(
    select(
      significantTerms(documents,
                       q="content:*",
                       field="content",
                       limit="50000",
                       minDocFreq="1",
                       maxDocFreq=".999",
                       minTermLength="4"),
      term as token,
      foreground as count
    ),
    by="token asc"
  ),
  sort(
    select(
      parseTSV(
        cat("eng_cleaned.tsv",maxLines=-1)
      ),
      TOKEN as token
    ),
    by="token asc"
  ),
  on="token"
)
  ' http://localhost:8983/solr/documents/stream           
```



Instead of Sorting, lets do a set of havings.

Now lets sort by the count!

```
curl --data-urlencode 'expr=
sort(
  having(
    complement(
      sort(
        select(
          significantTerms(documents,
                           q="content:*",
                           field="content",
                           limit="50000",
                           minDocFreq="1",
                           maxDocFreq=".999",
                           minTermLength="4"),
          term as token,
          foreground as count
        ),
        by="token asc"
      ),
      sort(
        select(
          parseTSV(
            cat("eng_cleaned.tsv",maxLines=-1)
          ),
          TOKEN as token
        ),
        by="token asc"
      ),
      on="token"
    ),
    and(
      notNull(count),
      gt(count,5),
      not(matches(token, "\d")),
      not(matches(token, "\."))
    )
  ),
  by="count desc"
)
  ' http://localhost:8983/solr/documents/stream           
```


> cat spelling_tokens.json | jq '."result-set" | .docs | .[]|[.count, .token] | @csv' > spelling_tokens.csv

Nice list of candidates.

# serving up files.

npm install http-server -g

http-server ../files --cors --ssl --cert ./cert.pem --key ./key.pem















# Storing PDF's in solr

> java -cp ./tika-properties:tika-app-1.24.1.jar org.apache.tika.cli.TikaCLI --xmp --jsonRecursive --extract --pretty-print -x ./files/lots-of-files/bernanke_20100203a.pdf


> java -cp tika-app-1.24.1.jar org.apache.tika.cli.TikaCLI --config=tika-config.xml --xmp --jsonRecursive --extract --pretty-print -x ./files/lots-of-files/bernanke_20100203a.pdf


> java -cp tika-app-1.24.1.jar org.apache.tika.cli.TikaCLI --config=tika-config.xml --jsonRecursive --extract --pretty-print -v -x ./files/lots-of-files/bernanke_20100203a.pdf


> pwsh create-solr-docs.ps1 ./temp/extracts ./temp/files ./temp/solr

> curl --user admin:3YnRnaMk7sLbc "http://localhost:8983/solr/admin/collections?action=CREATE&name=documents&collection.configName=configuration1&numShards=2&maxShardsPerNode=2"

> curl -X POST -H "Content-Type: application/json" --data-binary @./temp/solr/alvarez20140715a.pdf.json http://localhost:8983/solr/documents/update?commit=true


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

  Copy tika-app-1.24.1.jar up to Solr.   Do it all in ScriptingUpdateRequestHandler

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

We use the scrapy project https://scrapy.org/ to download lots of PDFs and then load them.

Run the spider via `scrapy runspider download_pdf_files_spider.py` which populates the `/ocr/load_testing_files/` directory.

If you have a local Solr, not the dockerized one, then you will need to load our configuration and jar files

bin/solr create_collection -c mycoll -d /tmp/myconfig

Then run `./load_test_loading_pdfs.sh`


# Testing JSON output

java -cp tika-app-1.24.1.jar org.apache.tika.cli.TikaCLI --config=tika-config.xml --xmp --jsonRecursive --extract --pretty-print -x ./files/alvarez20140715a.pdf



Ideas:
1) Look at the spellchecker to expand your query.
2) Look at the stats that OCR tools use.
3) Think about solving the "tion" using a stemmer? Instead of solving by fixing the OCR token stream
