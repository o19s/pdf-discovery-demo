<template>
  <div id="app">
    <div class="app-body">
      <h1 class="title">Highlighting with PDF.js</h1>
      <PDFViewer :url="url" />
    </div>
  </div>
</template>

<script>
import PDFViewer from '@/components/PDFVIewer'

export default {
  name: 'app',
  components: {
    PDFViewer
  },
  data () {
    return {
      doc: null,
      url: '/brainard20190711a.pdf'
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
