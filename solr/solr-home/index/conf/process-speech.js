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

  doc.setField( "parent_id", doc.getFieldValue("id"));
  doc.setField( "content_type", "parentDocument");
  doc.setField( "path", doc.getFieldValue("attr_stream_name"));

  content = doc.getFieldValue("content");

  var pages = content.split(/ocr_page page_1/);
  // Skip page one, it's garbage
  for (var page_number = 1; page_number < pages.length;page_number++){
    logger.info("process-speech#processAdd: Looking at page " + page_number);
    var childDoc = new Packages.org.apache.solr.common.SolrInputDocument();
    childDoc.setField( "id", doc.getFieldValue("id") + "_" + page_number);
    childDoc.setField( "parent_id", doc.getFieldValue("id"));
    childDoc.setField( "content_type", "childDocument");


    var lines = pages[page_number].split("\n");
    var page_dimension = lines[0].split(";")[1].replace("bbox","").trim()
    childDoc.setField("page_dimension", page_dimension);
    childDoc.setField("page_number", page_number);

    childDoc.setField("content", "content_coming soon");
    childDoc.setField("content_ocr", "content_ocr coming soon");
    childDoc.setField("content_extracted", "content_extracted coming soon");

    doc.addChildDocument(childDoc);
  }


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

function extractPageBboxFromContent(content){

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
