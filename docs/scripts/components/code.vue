<template>
  <pre :class="className"><code :class="className" v-html="output"></code></pre>
</template>

<script>
const LANGUAGES = {
  html: 'html',
  css: 'css',
  js: 'javascript'
};

// Supported languages:
// http://prismjs.com/#languages-list
export default {
  name: 'ui-code',
  props: {
    language: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    }
  },
  computed: {
    className() {
      return `language-${this.language}`;
    },
    output() {
      let currentLanguage = LANGUAGES[this.language];
      return this.code ? this.$prism.highlight(this.code, this.$prism.languages[currentLanguage]) : '';
    }
  }
};
</script>
