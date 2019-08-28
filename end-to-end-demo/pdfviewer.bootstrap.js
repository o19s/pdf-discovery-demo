/* eslint-disable */

(function () {
  var mountTarget = document.getElementById('frb-pdf-viewer')
  var pdfViewerEl = document.createElement('div')
  pdfViewerEl.setAttribute('id', 'pdf-viewer')
  mountTarget.parentNode.insertBefore(pdfViewerEl, mountTarget)

  console.log(window.frb.docId, window.frb.query, window.frb.highlights)

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
})();
