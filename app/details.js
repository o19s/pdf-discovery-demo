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
    docId: docId,
    query: query,
    highlights: {}
  }

  $.getJSON('//165.22.182.252:8983/solr/documents/select?q=' + query + '&fq=id:' + docId + '&fl=id,content,path,page_dimensions&hl=on&hl.snippets=500&hl.fl=content&indent=on&wt=json&pl=on&echoParams=all', function(data) {
    window.frb.highlights = data
    renderSnippetsList(data.highlighting[docId].content)
  })

  function renderSnippetsList(snippets) {
    console.log(snippets)
    $(snippets).each(function(index, snippet) {
      var snippetMarkup =  '<div class="snippet-item">';
          snippetMarkup +=   '<p>...' + snippet + '...</p>';
          snippetMarkup += '</div>';

      $('#the-snippet-list').find('.results').append(snippetMarkup)
    })
  }

  $(document).on('click', '.snippet-item', function() {
    $('.snippet-item').removeClass('selected');
    $(this).addClass('selected')
  })
});
