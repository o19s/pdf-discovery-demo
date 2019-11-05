/*
  This is a basic skeleton JavaScript update processor.
  In order for this to be executed, it must be properly wired into solrconfig.xml; by default it is commented out in
  the example solrconfig.xml and must be uncommented to be enabled.
  See http://wiki.apache.org/solr/ScriptUpdateProcessor for more details.
*/

function processAdd(cmd) {

  doc = cmd.solrDoc;  // org.apache.solr.common.SolrInputDocument
  id = doc.getFieldValue("id");
  logger.info("process-speech#processAdd: id=" + id);



  logger.info("Here comes some base 64: " + Packages.org.apache.solr.common.util.Base64.byteArrayToBase64(id.getBytes()));

  doc.setField( "parent_id", doc.getFieldValue("id"));
  doc.setField( "content_type", "parentDocument");
  doc.setField( "path", doc.getFieldValue("attr_stream_name"));

  content = doc.getFieldValue("content");

  //logger.info("process-speech#processAdd: content=" + content);
  var pages = content.split(/ocr_page page_1/);

  // Skip page one, it's garbage
  for (var page_number = 0; page_number < pages.length -1;page_number++){
    //logger.info("process-speech#processAdd: Looking at page " + page_number);
    var childDoc = new Packages.org.apache.solr.common.SolrInputDocument();
    childDoc.setField( "id", doc.getFieldValue("id") + "_" + page_number);
    childDoc.setField( "parent_id", doc.getFieldValue("id"));
    childDoc.setField( "content_type", "childDocument");

    // Grab content after the split on ocr_page to get the page_dimension
    var lines = pages[page_number+1].split("\n");
    var page_dimension = lines[0].split(";")[1].replace("bbox","").trim()
    logger.info("process-speech#processAdd: Page " + page_number + " has dimension " + page_dimension);
    // Grab content before the split on ocr_page to get text_extracted
    var lines = pages[page_number].split("\n");
    var foundPage = -1;
    var foundOcr = -1;
    var extracted_text = "";
    for (i = 0; i < lines.length;i++){

      if (lines[i].trim() == 'page'){
        foundPage = i;
      }
      if (lines[i].trim() == 'ocr'){
        foundOcr = i;
      }
      if (foundPage > -1 & foundOcr > -1){

        extracted_text = lines.slice(foundPage+1,foundOcr).join(" ");
        logger.info("process-speech#processAdd: Slice from " + foundPage+1 + " to " + foundOcr);
        foundPage = -1;
        foundOcr = -1;
      }
    }


    var page_words = pages[page_number + 1].split(/ocrx_word/);

    var tokens_array = []
    var tokens_payloads_array = []
    for (var i = 1; i <= page_words.length;i++){
      var chunk = page_words[i];
      if (chunk == undefined){
        continue;
      }
      // process a chunk to the elements, removing spaces or empty cells.
      //logger.info("*" + chunk);
      var raw_tokens = chunk.trim().split(" ");
      var tokens = []
      for(var j = 0; j< raw_tokens.length;j++){
        if (raw_tokens[j].trim() != ""){
          tokens.push(raw_tokens[j]);
        }
      }

      if (tokens[9] === 'ltr'){
        token = tokens[10];
      }
      else if (tokens[8] === 'eng'){
        token = tokens[9];
      }
      else {
        logger.info("process-speech#processAdd: Unknown line formatting: " + tokens);
      }
      if (token == undefined){ // Sometimes we don't have a token, just an empty ocrx_word chunk!
        logger.error("process-speech#processAdd: Undefined token for chunk:" + chunk);
        //logger.error("process-speech#processAdd: Here is the tokens_array:" + tokens_array.join(" "));
        //logger.error("Here comes the page:" + pages[page_number+1]);
      }
      else {
        token = token.replace(/\s+/g, '');

        if (token.indexOf("|") > -1){
          logger.error("process-speech#processAdd: Payload delimiter | was in the token:" + token);
          token = token.replace(/\|/g,"l"); // Making a assumption that pipes should be lowercase l's.
        }

        tokens_array.push(token);

        payload = chunk.split(/bbox/)[1].split(/;/)[0].trim();
        payload = page_number + " " + payload;
        payload = Packages.org.apache.solr.common.util.Base64.byteArrayToBase64(payload.getBytes());
        tokens_payloads_array.push(token + '|' + payload)
      }

    }


    childDoc.setField("page_dimension", page_dimension);
    childDoc.setField("page_number", page_number+1);

    childDoc.setField("content", tokens_array.join(" "));
    childDoc.setField("content_ocr", tokens_payloads_array.join(" "));
    childDoc.setField("content_extracted", extracted_text);

    doc.addChildDocument(childDoc);
  }
  logger.info("process-speech#processAdd: finish with id=" + id);


// Set a field value:
//  doc.setField("foo_s", "whatever");

// Get a configuration parameter:
//  config_param = params.get('config_param');  // "params" only exists if processor configured with <lst name="params">

// Get a request parameter:
// some_param = req.getParams().get("some_param")

// Add a field of field names that match a pattern:
//   - Potentially useful to determine the fields/attributes represented in a result set, via faceting on field_name_ss
//  field_names = doc.getFieldNames().toArray();
//  for(i=0; i < field_names.length; i++) {
//    field_name = field_names[i];
//    if (/attr_.*/.test(field_name)) { doc.addField("attribute_ss", field_names[i]); }
//  }

}

function processDelete(cmd) {
  // no-op
}

function processMergeIndexes(cmd) {
  // no-op
}

function processCommit(cmd) {
  // no-op
}

function processRollback(cmd) {
  // no-op
}

function finish() {
  // no-op
}
