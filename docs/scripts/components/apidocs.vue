<template>
  <div class="apidocs">
    <ui-markdown :text="docs"></ui-markdown>
  </div>
</template>

<script>
export default {
  name: 'ui-apidocs',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      docs: require(`../apidocs/${this.name}.md`)
    };
  }
};
</script>
