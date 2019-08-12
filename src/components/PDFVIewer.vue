<template>
  <div class="the-pdf-viewer">
    <div
      class="find-bar"
      id="findbar"
      ref="findbar"
    >
      <div id="viewFind">toggle</div>
      <input
        id="findInput"
        ref="findInput"
        @keyup.enter="updateExecutedQuery()"
        v-model="query"
      />
      <label class="highlightAllToggle">
        <input
          type="checkbox"
          id="findHighlightAll"
          checked
        />
        Highlight All
      </label>
      <div id="findMatchCase"></div>
      <div id="findEntireWord"></div>
      <div id="findMsg"></div>
      <div id="findResultsCount"></div>
      <button id="findPrevious">Prev</button>
      <button id="findNext">Next</button>
    </div>
    <div
      class="pdf-viewer-container"
      ref="pdf-viewer-container"
    >
      <div
        id="pdf-viewer"
        class="pdf-viewer"
        ref="pdf-viewer"
      />
    </div>
  </div>
</template>

<script>
import * as PDFJS from 'pdfjs-dist/web/pdf_viewer'
import { PDFFindBar } from 'pdfjs-dist/lib/web/pdf_find_bar'
import 'pdfjs-dist/web/pdf_viewer.css'

export default {
  props: {
    url: null
  },
  data () {
    return {
      doc: null,
      query: '',
      executedQuery: '',
      pdfjsLib: null,
      scale: 1.33,
      PDFEventBus: null,
      PDFViewer: null,
      PDFFindController: null,
      PDFLinkService: null,
      PDFFindBar: null
    }
  },
  created () {
    if (this.$route.query && this.$route.query.query) {
      this.query = this.$route.query.query
      this.executedQuery = this.query
    }
  },
  mounted () {
    this.pdfjsLib = require('pdfjs-dist/webpack')
    this.initializeViewer()
  },
  methods: {
    triggerResize () {
      this.$nextTick(() => {
        this.PDFViewer.currentScaleValue = 1.0001
        this.PDFViewer.currentScaleValue = 1
      })
    },
    updateExecutedQuery () {
      this.executedQuery = this.query
      this.executeQuery()
    },
    executeQuery (event) {
      if (this.executedQuery && this.executedQuery.length > 3) {
        this.PDFFindController.executeCommand('find' + event.detail.type, {
          caseSensitive: event.detail.caseSensitive,
          highlightAll: event.detail.highlightAll,
          phraseSearch: event.detail.phraseSearch,
          findPrevious: event.detail.findPrevious,
          query: event.detail.query
        })
        this.triggerResize()
      }
    },
    initializeViewer () {
      this.PDFLinkService = new PDFJS.PDFLinkService()
      this.PDFEventBus = new PDFJS.EventBus({
        dispatchToDOM: true
      })
      this.PDFFindBar = new PDFFindBar({
        bar: this.$refs['findbar'],
        toggleButton: document.getElementById('viewFind'),
        findField: this.$refs['findInput'],
        highlightAllCheckbox: document.getElementById('findHighlightAll'),
        caseSensitiveCheckbox: document.getElementById('findMatchCase'),
        entireWordCheckbox: document.getElementById('findEntireWord'),
        findMsg: document.getElementById('findMsg'),
        findResultsCount: document.getElementById('findResultsCount'),
        findPreviousButton: document.getElementById('findPrevious'),
        findNextButton: document.getElementById('findNext')
      }, this.PDFEventBus)
      this.PDFFindController = new PDFJS.PDFFindController({
        linkService: this.PDFLinkService
      })
      this.PDFViewer = new PDFJS.PDFViewer({
        container: this.$refs['pdf-viewer-container'],
        linkService: this.PDFLinkService,
        findController: this.PDFFindController,
        eventBus: this.PDFEventBus
      })

      // connect the link service to the viewer
      this.PDFLinkService.setViewer(this.PDFViewer)

      document.addEventListener('pagesinit', () => {
        this.PDFViewer.currentScaleValue = 1
        this.updateExecutedQuery()
      })
      window.addEventListener('resize', () => {
        this.triggerResize()
      })
      document.addEventListener('find', this.executeQuery)
      document.addEventListener('findagain', this.executeQuery)

      let loadingTask = this.pdfjsLib.getDocument({
        url: this.url
      })

      loadingTask.promise.then((pdfDocument) => {
        this.PDFViewer.setDocument(pdfDocument)
        this.PDFLinkService.setDocument(pdfDocument, null)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#viewFind,
.highlightAllToggle {
  display: none;
}

.pdf-viewer-container {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  overflow-y: scroll;
}

.find-bar {
  height: 60px;
  background-color: #000;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  color: #fff;

  & > * {
    margin-right: 1em;
  }
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

      &.selected {
        background: linear-gradient(to right, rgba(0,255,0,0.66) 0%, green 100%);
        box-shadow: inset 0.5em 0 0.05em 0.1em green;
      }
    }
  }
}
</style>
