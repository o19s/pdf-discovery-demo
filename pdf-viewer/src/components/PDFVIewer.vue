<template>
  <div class="the-pdf-viewer" id="the-frb-pdf-viewer">
    <div class="pdf-viewer-container" ref="pdf-viewer-container">
      <div id="pdf-viewer" class="pdf-viewer" ref="pdf-viewer" />
    </div>
  </div>
</template>

<script>
import * as PDFJS from 'pdfjs-dist/web/pdf_viewer'
import 'pdfjs-dist/web/pdf_viewer.css'

export default {
  props: {
    maxWidth: {
      type: Number,
      default: 900
    },
    highlights: {
      type: Object,
      default: () => {}
    },
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      pdfjsLib: null,
      PDFViewer: null,
      viewportWidth: 0,
      renderedPages: []
    }
  },
  mounted () {
    this.pdfjsLib = require('pdfjs-dist/webpack')
    this.initializeViewer()
  },
  computed: {
    pdfScale () {
      return this.viewportWidth >= this.maxWidth ? 1 : 'page-width'
    }
  },
  methods: {
    triggerResize () {
      this.viewportWidth = this.$refs['pdf-viewer-container'].offsetWidth
      this.PDFViewer.currentScaleValue = 1.0001
      this.PDFViewer.currentScaleValue = this.pdfScale
      this.renderedPages = []
    },
    initializeViewer () {
      this.PDFViewer = new PDFJS.PDFViewer({
        container: this.$refs['pdf-viewer-container'],
        linkService: this.PDFLinkService
      })
      document.addEventListener('pagesinit', () => {
        this.triggerResize()
      })
      window.addEventListener('resize', () => {
        this.triggerResize()
      })
      document.addEventListener('pagerendered', (e) => {
        this.renderHighlightsOnPage(e.detail.pageNumber)
      })

      let loadingTask = this.pdfjsLib.getDocument({
        url: `http://${window.location.hostname}:8443/lots-of-files/${this.id}`
      })
      loadingTask.promise.then((pdfDocument) => {
        this.PDFViewer.setDocument(pdfDocument)
      })
    },
    renderHighlightsOnPage (pageNumber) {
      // bail if we've already set up the highlights for this page
      if (this.renderedPages.includes(pageNumber)) {
        return
      }

      // register that we've rendered the highlights on this page
      this.renderedPages.push(pageNumber)

      if (this.highlights && this.highlights.payloads) {
        Object.keys(this.highlights.payloads).forEach(payloadDoc => {
          let highlihtTerms = this.highlights.payloads[payloadDoc].content_ocr
          Object.keys(highlihtTerms).forEach(term => {
            highlihtTerms[term].forEach(highlight => {
              let [targetPageNumber, ...coordinates] = atob(highlight).split(' ').filter(Number)
              if (pageNumber.toString() === targetPageNumber.toString()) {
                this.addHighlightToPDF(pageNumber, coordinates)
              }
            })
          })
        })
      } else {
        console.error('target PDF not found in result set')
      }
    },
    addHighlightToPDF (pageNumber, coordinates) {
      let doc = this.highlights.response.docs[pageNumber - 1]

      let [pageWidth, pageHeight] = doc.page_dimension[0].split(' ').slice(3)
      let [x1, y1, x2, y2] = coordinates
      let highlight = document.createElement('span')
      let targetPage = document.querySelector(`[data-page-number="${pageNumber}"]`)

      // set the relative position for the highlight
      highlight.setAttribute('class', 'box-highlight')
      highlight.setAttribute('style', `
        top:${(y1 / pageHeight) * 100}%;
        left:${(x1 / pageWidth) * 100}%;
        height:${((y2 / pageHeight) - (y1 / pageHeight)) * 100}%;
        width:${((x2 / pageWidth) - (x1 / pageWidth)) * 100}%;
      `)

      // add the highlight to the page
      targetPage.appendChild(highlight)
    }
  }
}
</script>

<style lang="scss" scoped>
.pdf-viewer-container {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  overflow-y: scroll;
}

.pdf-viewer {
  display: flex;
  flex-direction: column;
  align-items: center;

  & /deep/ .page {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 4em;
    position: relative;
    max-width: 100%;
    box-shadow: 2px 0 1.5em 0 rgba(#2f3235, 0.4);

    ::-moz-selection {
      background: blue;
      color: transparent;
    }
    ::selection {
      background: blue;
      color: transparent;
    }

    &:first-child {
      margin-top: 12em;
    }

    &:last-child {
      margin-bottom: 4em;
    }

    .box-highlight {
      position: absolute;
      display: block;
      background: blue;
      opacity: 0.2;
      transform-origin: center center;
      transform: scale(1.1, 1.15);
      border-radius: 2px;
      pointer-events: none;
    }
  }
}
</style>
