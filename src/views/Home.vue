<template>
  <div id="app">
    <div class="app-header">
      <form @submit.prevent="handleSearch()">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search term..."
        />
        <input
          type="submit"
          value="Find"
        />
      </form>
    </div>
    <div class="app-body">
      <h1 class="title">Highlighting with PDF.js</h1>
      <PDFViewer
        v-if="doc && !loading"
        :doc="doc"
        :query="paramQuery"
      />
    </div>
  </div>
</template>

<script>
import pdfjsLib from 'pdfjs-dist/webpack'
import PDFViewer from '@/components/PDFVIewer'

export default {
  name: 'app',
  components: {
    PDFViewer
  },
  data () {
    return {
      doc: null,
      url: '/example.pdf',
      searchQuery: '',
      paramQuery: '',
      loading: false
    }
  },
  created () {
    if (this.$route.query && this.$route.query.query) {
      this.paramQuery = this.$route.query.query
      this.searchQuery = this.$route.query.query
    }
  },
  mounted () {
    this.loadPDF()
  },
  methods: {
    handleSearch () {
      this.$router.push({
        path: '/',
        query: {
          query: this.searchQuery
        }
      })
      window.location.reload()
    },
    loadPDF () {
      let loadingTask = pdfjsLib.getDocument(this.url)
      this.loading = true
      this.doc = null

      this.$nextTick(() => {
        loadingTask.promise.then((doc) => {
          console.log(`Document ${this.url} loaded ${doc.numPages} page(s)`)
          this.loading = false
          this.doc = doc
        }, (reason) => {
          console.error(`Error during ${this.url} loading: ${reason}`)
        })
      })
    }
  }
}
</script>

<style lang="scss">
body, html {
  margin: 0;
  padding: 0;
  background-color: #62676f;
}
</style>

<style lang="scss" scoped>
.app-header {
  background-color: #3c424a;
  border-bottom: 1px solid #2f3235;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: relative;
  box-shadow: 2px 0 2em 0 rgba(#2f3235, 0.33);

  form {
    display: flex;
    justify-content: center;

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
        opacity: 0.95;
      }
    }
  }
}
.app-body {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.title {
  padding: 70px 0 0 0;
  text-align: center;
  font-family: sans-serif;
  color: #6d727a;
  text-shadow: 0px -1px 1px #53585e;
  margin-bottom: 0;
  opacity: 0.75;
}
</style>
