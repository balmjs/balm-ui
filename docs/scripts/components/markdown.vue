<template>
  <div v-html="value"></div>
</template>

<script>
export default {
  name: 'ui-markdown',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.$prism.highlightAll();
  }
};
</script>
