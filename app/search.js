/* eslint-disable */

$.urlParam = function (name) {
  var results = new RegExp('[\?&]' + name + '=([^&#]*)')
    .exec(window.location.search);
  return (results !== null) ? results[1] || 0 : false;
}

$(document).ready(function () {
  var query = $.urlParam('query');
  var $resultsList = $('#the-results-list');

  // reset the search input
  $('form input[type="text"]')[0].value = decodeURIComponent(query.replace(/\+/g, '%20'));

  $.getJSON('//' + window.location.hostname + ':8983/solr/documents/select?q=' + query + '&fl=id,content,path,page_dimensions&group=on&group.field=doc_id', function(data) {
    renderResultsList(data.grouped.doc_id.groups)
  })

  function renderResultsList(results) {
    $(results).each(function(index, result) {
      var resultMarkup =  '<div class="result-item">';
          resultMarkup +=  '<a href="/details.html?id=' + result.groupValue + '&query=' + query +'">';
          resultMarkup +=    '<h2>' + result.groupValue + '</h2>';
          resultMarkup +=  '</a>';
          resultMarkup += '<p>' + result.doclist.docs[0].content.slice(0, 200) + '</p>';
          resultMarkup += '</div>';

      $resultsList.append(resultMarkup)
    })
  }
});

