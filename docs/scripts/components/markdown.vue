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
    this.$prism.highlightAll();
  }
};
</script>
