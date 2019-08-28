<template>
  <div id="app">
    <div class="app-body">
      <PDFViewer
        v-if="dataLoaded"
        v-bind:id="id"
        v-bind:highlights="highlightData"
      />
    </div>
  </div>
</template>

<script>
import PDFViewer from '@/components/PDFVIewer'
import 'url-polyfill'

export default {
  name: 'app',
  components: {
    PDFViewer
  },
  data () {
    return {
      highlightData: {},
      id: 'brainard20190711a.pdf',
      query: 'scranton',
      dataLoaded: false
    }
  },
  mounted () {
    let url = new URL('http://localhost:8983/solr/documents/select')
    let params = {
      fl: 'id,content,path,page_dimensions',
      fq: `id:${this.id}`,
      hl: 'on',
      'hl.snippets': 10,
      'hl.fl': 'content',
      indent: 'on',
      q: `(${this.query})`,
      wt: 'json',
      pl: 'on',
      echoParams: 'all'
    }

    // add params to url
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    fetch(url).then((response) => {
      return response.json()
    }).then((json) => {
      this.dataLoaded = true
      this.highlightData = json
    })
  }
}
</script>

<style lang="scss">
body, html {
  margin: 0;
  padding: 0;
}
</style>

<style lang="scss" scoped>
.app-body {
  position: relative;
  width: 100%;
  max-width: 800px;
  background-color: #7e858f;

  .the-pdf-viewer {
    padding-top: 125%;
  }
}
</style>
