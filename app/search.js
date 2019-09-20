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

  $.getJSON('//' + window.location.hostname + ':8983/solr/documents/select?q={!parent which="content_type:parentDocument"}' + query + '&fl=id,content_type,path,[child parentFilter=content_type:parentDocument limit=1]', function(data) {
    renderResultsList(data.response.docs)
  })

  function renderResultsList(results) {
    $(results).each(function(index, result) {
      var resultMarkup =  '<div class="result-item">';
          resultMarkup +=  '<a href="/details.html?id=' + result.id + '&query=' + query +'">';
          resultMarkup +=    '<h2>' + result.id + '</h2>';
          resultMarkup +=  '</a>';
          resultMarkup += '<p>' + result._childDocuments_[0].content.slice(0, 200) + '</p>';
          resultMarkup += '</div>';

      $resultsList.append(resultMarkup)
    })
  }
});
