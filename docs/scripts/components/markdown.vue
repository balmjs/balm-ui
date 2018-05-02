<template>
  <div :class="className" v-html="html"></div>
</template>

<script>
export default {
  name: 'ui-markdown',
  props: {
    text: String, // 文档内容
    code: String // 代码片段
  },
  data() {
    return {
      html: this.text || this.code
    };
  },
  computed: {
    className() {
      return this.code ? 'snippet-code' : 'markdown-body';
    }
  },
  mounted() {
    // Supported languages:
    // http://prismjs.com/#languages-list
    this.$prism.highlightAll();
  }
};
</script>
