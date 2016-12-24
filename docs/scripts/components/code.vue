<template>
  <pre :class="className"><code :class="className" v-html="code"></code></pre>
</template>

<script>
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
    }
  }
};
</script>
