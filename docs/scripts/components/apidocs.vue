<template>
  <div class="apidocs">
    <h5 :class="$tt('headline5')">{{ title.toUpperCase() }} API</h5>
    <ui-markdown :text="docs"></ui-markdown>
  </div>
</template>

<script>
const TYPES = ['component', 'plugin', 'directive', 'util'];

export default {
  name: 'ui-apidocs',
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'component'
    }
  },
  data() {
    return {
      docs: require(`@/docs/apidocs/${this.name}.md`)
    };
  },
  computed: {
    title() {
      return TYPES.includes(this.type)
        ? `${this.name} ${this.type}`
        : this.name;
    }
  }
};
</script>
