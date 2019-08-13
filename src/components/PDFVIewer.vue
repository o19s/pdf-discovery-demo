<template>
  <div class="the-pdf-viewer">
    <div class="app-header">
      <div
        class="find-bar"
        id="findbar"
        ref="findbar"
      >
        <div id="viewFind">toggle</div>

        <form @submit.prevent="executeQuery">
          <input
            type="text"
            id="findInput"
            ref="findInput"
            v-model="query"
          />
          <input
            type="submit"
            value="Find"
          />
        </form>
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
        <span
          ref="findResultsCount"
          id="findResultsCount"
        />
        <button
          id="findPrevious"
          :disabled="query.length < 1"
        >
          &laquo;
        </button>
        <button
          id="findNext"
          :disabled="query.length < 1"
        >
          &raquo;
        </button>
      </div>
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
      PDFFindBar: null,
      viewportWidth: 0,
      scaleMultiple: 1
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
  computed: {
    pdfScale () {
      return this.viewportWidth >= 900 ? 1 * this.scaleMultiple : 'page-width'
    }
  },
  methods: {
    triggerResize () {
      this.viewportWidth = window.innerWidth
      this.PDFViewer.currentScaleValue = 1.0001
      this.PDFViewer.currentScaleValue = this.pdfScale
    },
    executeQuery (e) {
      let event = (e && e.detail) ? e.detail : {
        type: '',
        caseSensitive: false,
        highlightAll: true,
        phraseSearch: true,
        findPrevious: false
      }
      this.executedQuery = this.query

      this.PDFFindController.executeCommand('find' + event.type, {
        caseSensitive: event.caseSensitive,
        highlightAll: event.highlightAll,
        phraseSearch: event.phraseSearch,
        findPrevious: event.findPrevious,
        query: this.query
      })

      if (event.type === 'again') {
        this.triggerResize()
      } else {
        setTimeout(() => {
          this.triggerResize()
          this.updateURL()
        }, 500)
      }
    },
    updateURL () {
      if (!this.$route.query || this.$route.query.query !== this.query) {
        this.$router.replace({
          path: '/',
          query: {
            ...this.$route.query,
            query: this.query
          }
        })
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
        findResultsCount: this.$refs['findResultsCount'],
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
        this.executeQuery()
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
  height: calc(100% - 60px);
  top: 60px;
  left: 0;
  position: absolute;
  overflow-y: scroll;
}

.app-header {
  position: fixed;
  width: 100%;
  top: 0;
  height: 60px;
  background-color: #3c424a;
  border-bottom: 1px solid #2f3235;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  box-shadow: 2px 0 2em 0 rgba(#2f3235, 0.33);

  form {
    display: flex;
    justify-content: center;
    margin-right: 1em;

    input {
      appearance: none;
      border: none;
      background-color: #fff;
      outline: none;
      font-size: 0.8em;
    }

    input[type="text"] {
      padding: 0.75em 1em;
      color: #444;
      border-radius: 3px 0 0 3px;
    }

    input[type="submit"] {
      background-color: #e6e9ef;
      color: #3c4046;
      border-left: 1px solid #b1b8c3;
      font-weight: bold;
      cursor: pointer;
      padding: 0 1em;
      border-radius: 0px 3px 3px 0px;

      &:hover {
        background-color: #838c99;
        color: #fff;
        cursor: pointer;
      }
    }
  }

  button {
    appearance: none;
    padding: 0.33em 1em;
    background-color: #e6e9ef;
    color: #3c4046;
    left: 1;
    font-weight: bold;
    font-size: 1em;
    margin-right: 0.25em;
    outline: none;
    border-radius: 3px;
    border: none;

    &:hover {
      background-color: #838c99;
      color: #fff;
      cursor: pointer;
    }

    &[disabled] {
      color: #3c4046;
      background-color: #fff;
      opacity: 0.5;
      cursor: default;
    }
  }
}

.find-bar {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  color: #fff;
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
      box-shadow: inset 0.5em 0 0.05em 0.1em rgba(#ff1122, 0.75);
      transform: scaleX(1.1) scaleY(1.4) skew(-20deg);
      transform-origin: 0% 25%;
      border-radius: 0.25em .33em 0.4em 0.2em;

      &.selected {
        background: linear-gradient(to right, rgba(0,255,0,0.66) 0%, green 100%);
        box-shadow: inset 0.5em 0 0.05em 0.1em rgba(green, 0.5);
      }
    }
  }
}
</style>
