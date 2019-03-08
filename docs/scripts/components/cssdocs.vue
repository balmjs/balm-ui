<template>
  <div class="cssdocs">
    <ui-markdown :text="docs"></ui-markdown>
  </div>
</template>

<script>
export default {
  name: 'ui-cssdocs',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      docs: require(`../cssdocs/${this.name}.md`)
    };
  }
};
</script>
