/* eslint-disable */

(function () {
  var mountTarget = document.getElementById('frb-pdf-viewer')
  var pdfViewerEl = document.createElement('div')
  pdfViewerEl.setAttribute('id', 'pdf-viewer')
  mountTarget.parentNode.insertBefore(pdfViewerEl, mountTarget)

  // set timeout for now to help unsure that the window object
  // is set before we try to render the PDF viewer
  window.setTimeout(() => {
    var app = new Vue({
      el: '#pdf-viewer',
      components: {
        pdfviewer: pdfviewer
      },
      render: function (h) {
        return h('div', {}, [
          h(pdfviewer, {
            props: {
              id: window.frb.docId,
              highlights: window.frb.highlights
            }
          })
        ])
      }
    })
  }, 500);
})();
