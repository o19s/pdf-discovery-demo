<template>
  <div class="pdf-viewer-container">
    <div class="pdf-viewer" />
  </div>
</template>

<script>
import * as PDFJS from 'pdfjs-dist/web/pdf_viewer'
import 'pdfjs-dist/web/pdf_viewer.css'

export default {
  props: {
    doc: null,
    query: {
      type: String,
      default: 'JavaScript'
    }
  },
  data () {
    return {
      scale: 1.33,
      PDFEventBus: null,
      PDFViewer: null,
      PDFFindController: null,
      PDFLinkService: null
    }
  },
  mounted () {
    this.initializeViewer()
  },
  methods: {
    executeQuery () {
      this.PDFFindController.executeCommand('find', {
        caseSensitive: false,
        highlightAll: true,
        phraseSearch: true,
        query: this.query
      })
    },
    initializeViewer () {
      this.PDFLinkService = new PDFJS.PDFLinkService()
      this.PDFEventBus = new PDFJS.EventBus()
      this.PDFFindController = new PDFJS.PDFFindController({
        linkService: this.PDFLinkService
      })
      this.PDFViewer = new PDFJS.PDFViewer({
        container: this.$el,
        linkService: this.PDFLinkService,
        findController: this.PDFFindController,
        eventBus: this.PDFEventBus
      })
      // run a search on mount
      this.executeQuery()

      // connect the link service to the viewer
      this.PDFLinkService.setViewer(this.PDFViewer)

      // set the document
      this.PDFViewer.setDocument(this.doc)
      this.PDFLinkService.setDocument(this.doc, null)

      // set the scale
      this.PDFViewer.currentScale = this.scale

      // trigger event on find
      this.PDFEventBus.on('find', this.executeQuery())
    }
  },
  watch: {
    query () {
      this.initializeViewer()
    },
    doc () {
      this.initializeViewer()
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

    .highlight {
      display: inline-block;
      background: linear-gradient(to right, rgba(255,0,0,0.66) 0%, #dd0000 100%);
      box-shadow: inset 0.5em 0 0.05em 0.1em #ff1122;
      transform: scaleX(1.05) scaleY(1.4) skew(-20deg);
      transform-origin: 100% 75%;
      border-radius: 0.25em .33em 0.4em 0.2em;
    }
  }
}
</style>
