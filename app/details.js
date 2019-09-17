/* eslint-disable */

$.urlParam = function (name) {
  var results = new RegExp('[\?&]' + name + '=([^&#]*)')
    .exec(window.location.search);
  return (results !== null) ? results[1] || 0 : false;
}

$(document).ready(function () {
  var query = $.urlParam('query');
  var docId = $.urlParam('id');

  window.frb = {
    // renders the pdf if the function is set, or re-calls every
    // 200ms waiting for the data to be ready
    renderPDF: window.frb && typeof window.frb.renderPDF !== "undefined"
      ? window.frb.renderPDF
      : function () { window.setTimeout(() => {
        window.frb.renderPDF();
      }, 200); },
    docId: docId,
    query: query,
    highlights: {}
  }

  $.getJSON('//' + window.location.hostname + ':8983/solr/documents/select?q=' + query + '&fq=doc_id:' + docId + '&fl=id,path,page_dimension,page_number&hl=on&hl.snippets=500&hl.fl=content&indent=on&wt=json&pl=on&rows=1000&sort=page_number ASC', function(data) {
    window.frb.highlights = data

    // Setup page number to doc dictionary
    var pageDict = {};
    $(data.response.docs).each(function(idx, doc) {
        pageDict[doc.page_number.toString()] = doc;
    });
    window.frb.highlights.pageDict = pageDict;

    // TODO: Store out page/snippet in object for linkage?
    var snippets = [];
    for (var key in data.highlighting) {
      snippets.push(data.highlighting[key].content)
    }

    renderSnippetsList(snippets)
  })

  function renderSnippetsList(snippets) {
    $(snippets).each(function(index, snippet) {
      var snippetMarkup =  '<div class="snippet-item">';
          snippetMarkup +=   '<p>...' + snippet + '...</p>';
          snippetMarkup += '</div>';

      $('#the-snippet-list').find('.results').append(snippetMarkup)
    })

    window.frb.renderPDF()
  }

  $(document).on('click', '.snippet-item', function() {
    $('.snippet-item').removeClass('selected');
    $(this).addClass('selected')
  })
});
