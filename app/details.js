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

  $.getJSON('//' + window.location.hostname + ':8983/solr/documents/select?q=' + query + '&fq=id:' + docId + '&fl=id,content,path,page_dimensions&hl=on&hl.snippets=500&hl.fl=content&indent=on&wt=json&pl=on&echoParams=all', function(data) {
    window.frb.highlights = data
    renderSnippetsList(data.highlighting[docId].content)
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
