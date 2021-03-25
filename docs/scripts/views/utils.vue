<template>
  <div :class="[$tt('body1'), 'page--utils']">
    <div :class="[$tt('body2'), 'pure-docs']">
      <ui-markdown :text="docs"></ui-markdown>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Utilities'
  },
  computed: {
    docs() {
      let filename = `${this.$store.lang}/utils/intro`;
      return require(`@/docs/${filename}.md`); // NOTE: just one variable in `require`
    }
  }
};
</script>
