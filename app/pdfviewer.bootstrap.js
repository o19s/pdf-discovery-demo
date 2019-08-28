/* eslint-disable */

(function () {
  var mountTarget = document.getElementById('frb-pdf-viewer')
  var pdfViewerEl = document.createElement('div')
  pdfViewerEl.setAttribute('id', 'pdf-viewer')
  mountTarget.parentNode.insertBefore(pdfViewerEl, mountTarget)

  // Mount the vue app when the window say's we're ready
  window.frb.renderPDF = function () {
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
  }
})();
