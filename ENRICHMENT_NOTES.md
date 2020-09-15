

_note, we had to move to managed schema to support this!_
Set up field for details and dynamic fields for various ner_ combinations:
```
curl -X POST -H 'Content-type:application/json' --data-binary '{"add-field": {"name":"ner_details", "type":"string", "multiValued":false, "stored":true, "indexed": false}}' http://localhost:8983/solr/documents/schema
```
```
curl -X POST -H 'Content-type:application/json' --data-binary '{
  "add-dynamic-field":{
     "name":"ner_*",
     "type":"string",
     "multiValued":true
     "stored":true,
     "indexed":true}
}' http://localhost:8983/api/collections/documents/schema
```

curl -X POST -H 'Content-type:application/json'  -d '{
  "add-expressible": {
    "name": "spacy",
    "class": "com.o19s.solr.streaming.SpaCyStream"
  }
}' http://localhost:8983/solr/documents/config

curl "http://localhost:8983/solr/documents/stream?action=plugins" | grep spacy

```
commit(books_ner,
  update(books_ner,
    spacy(
      spacyUrl="http://spacy:80",
      fl="series_t",
      search(documents,
           q="content_type:childDocument"
      )
    )
  )
)
```

Look for child docuemnts

```
search(documents,
     q="content_type:childDocument AND parent_id:1634473.pdf AND page_number:1"
)
```

Space them up!

```
spacy(
  spacyUrl="http://spacy:80",
  fl="content",
  details="true",
  search(documents,
       q="content_type:childDocument AND parent_id:1634473.pdf AND page_number:1"
  )
)
```

Can we full round trip?

```
commit(documents,
  update(documents,
    spacy(
      spacyUrl="http://spacy:80",
      fl="content",
      details="true",
      search(documents,
           q="content_type:childDocument",
           rows="1000"

      )
    )
  )
)
```

```
curl http://localhost:8983/solr/documents/stream --data-urlencode 'expr=
commit(documents,
  update(documents,
    spacy(
      spacyUrl="http://spacy:80",
      fl="content",
      details="true",
      search(documents,
           q="content_type:childDocument",
           rows="1000"

      )
    )
  )
)
'
```

commit(dude,
  update(dude,
    spacy(
      spacyUrl="http://spacy:80",
      fl="content",
      details="true",
      search(documents,
           q="*:*",
           rows="1000"
      )
    )
  )
)
