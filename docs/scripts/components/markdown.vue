<template>
  <div v-html="text"></div>
</template>

<script>
export default {
  name: 'ui-markdown',
  props: {
    text: {
      type: String,
      required: true
    }
  },
  mounted() {
    // Supported languages:
    // http://prismjs.com/#languages-list
    this.$prism.highlightAll();
  }
};
</script>
