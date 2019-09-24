/* eslint-disable */

// ==========================================
// Set up helper functions we may want to
// access inside of our jQuery block
// ==========================================

$.urlParam = function (name) {
  var results = new RegExp('[\?&]' + name + '=([^&#]*)')
    .exec(window.location.search);
  return (results !== null) ? results[1] || 0 : false;
}

// ==========================================
// Run our jQuery logic on document ready
// ==========================================

$(document).ready(function () {
  var query = $.urlParam('query');
  var docId = $.urlParam('id');

  window.frb = {
    // renders the pdf if the function is set, or re-calls every
    // 200ms waiting for the data to be ready
    renderPDF: window.frb && typeof window.frb.renderPDF !== "undefined"
      ? window.frb.renderPDF
      : function () { window.setTimeout(function () {
        window.frb.renderPDF();
      }, 200); },
    docId: docId,
    query: query,
    highlights: {}
  }

  $.getJSON('//' + window.location.hostname + ':8983/solr/documents/select?q=' + query + '&fq=parent_id:' + docId + '&fl=id,path,page_dimension,page_number&hl=on&hl.snippets=500&hl.fl=content&indent=on&wt=json&pl=on&rows=1000&sort=page_number ASC', function(data) {
    window.frb.highlights = data

    // Setup page number to doc dictionary
    var pageDict = {};
    $(data.response.docs).each(function(idx, doc) {
      pageDict[doc.page_number.toString()] = doc;
    });
    window.frb.highlights.pageDict = pageDict;

    var snippets = [];
    for (var key in data.highlighting) {
      var highlightPageNumber = key.split('.pdf_')[1]

      for (var highlightKey in data.highlighting[key].content) {
        snippets.push({
          page_number: highlightPageNumber,
          index: highlightKey,
          highlight: data.highlighting[key].content[highlightKey]
        })
      }
    }

    renderSnippetsList(snippets)
  })

  function renderSnippetsList(snippets) {
    $(snippets).each(function(index, snippet) {
      var snippetMarkup =  '<div class="snippet-item" data-pdf-page="' + snippet.page_number + '" data-highlight-index="' + snippet.index + '">';
          snippetMarkup +=   '<p>...' + snippet.highlight + '...</p>';
          snippetMarkup += '</div>';

      $('#the-snippet-list').find('.results').append(snippetMarkup)
    })

    // call the render function to kick off rendering or
    // the wait loop for data to be ready
    window.frb.renderPDF()
  }

  // ==========================================
  // Set up the front-end listener
  // and corresponding events
  // ==========================================


  $(document).on('click', '.snippet-item', function() {
    $('.snippet-item').removeClass('selected');
    $(this).addClass('selected');
    scrollPdfViewer($(this).data('pdf-page'), $(this).data('highlight-index'));
  })

  var $targetHighlight = false

  function scrollPdfViewer(pageNumber, index) {
    var $pdfViewer = $('#the-frb-pdf-viewer .pdf-viewer-container');
    var $targetPage = $pdfViewer.find('.page[data-page-number="' + pageNumber + '"]');
    var pageOffset = $targetPage.offset().top - $targetPage.closest('#pdf-viewer').offset().top - $targetPage.closest('#pdf-viewer').scrollTop();

    $pdfViewer.animate({ scrollTop: pageOffset}, 800);

    checkForHighlight($pdfViewer, $targetPage, index);
  }

  function checkForHighlight(viewer, page, index) {
    $targetHighlight = page.find('span.box-highlight')[index]

    if ($targetHighlight) {
       var highlightOffset = $($targetHighlight).offset().top - $($targetHighlight).closest('#pdf-viewer').offset().top - $($targetHighlight).closest('#pdf-viewer').scrollTop() - 150
      viewer.animate({ scrollTop: highlightOffset, easing: 'linear'}, 500);
      $('span.box-highlight').removeClass('active')
      $($targetHighlight).addClass('active')
    } else {
      window.setTimeout(function() {
        checkForHighlight(viewer, page, index);
      }, 200)
    }
  }
});
