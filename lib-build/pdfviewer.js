(function () {
  var head = document.getElementsByTagName('head')[0];
  var vueRuntimeScript = document.createElement('script');
  vueRuntimeScript.type = 'text/javascript';
  vueRuntimeScript.src = './vue.runtime.min.js';
  head.appendChild(vueRuntimeScript);

  vueRuntimeScript.onload = function () {
    loadPDFViewer();
  }

  function loadPDFViewer () {
    let pdfViewerModule = document.createElement('script');
    pdfViewerModule.type = 'text/javascript';
    pdfViewerModule.src = './pdfviewer/pdfviewer.umd.min.js';
    head.appendChild(pdfViewerModule);

    pdfViewerModule.onload = function () {
      pdfViewerBootstrap();
    }
  }

  function pdfViewerBootstrap () {
    let pdfViewerBootstrap = document.createElement('script');
    pdfViewerBootstrap.type = 'text/javascript';
    pdfViewerBootstrap.src = './pdfviewer.bootstrap.js';
    head.appendChild(pdfViewerBootstrap);
  }
})();
