<template>
  <div v-anchor.html.offset="64" :class="[$tt('body1'), `page--${name}`]">
    <div :class="[$tt('body2'), 'pure-docs']">
      <ui-markdown :text="docs"></ui-markdown>
      <ui-footer-nav :prev="prev" :next="next"></ui-footer-nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PurePage',
  props: {
    name: {
      type: String,
      required: true
    },
    prev: {
      type: [Object, null],
      default: null
    },
    next: {
      type: [Object, null],
      default: null
    }
  },
  computed: {
    docs() {
      let filename = `${this.$store.lang}/guide/${this.name}`;
      return require(`@/docs/${filename}.md`);
    }
  }
};
</script>
