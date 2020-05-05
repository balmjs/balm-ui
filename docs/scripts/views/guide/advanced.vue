<template>
  <div :class="[$tt('body1'), 'demo--advanced']">
    <div :class="[$tt('body2'), 'pure-docs']">
      <ui-markdown :text="docs" v-anchor.html.offset="64"></ui-markdown>
      <ui-footer-nav
        :prev="{ name: 'Get Started', url: 'guide.quickstart' }"
        :next="{ name: 'Kill IE', url: 'guide.kill-ie' }"
      ></ui-footer-nav>
    </div>
  </div>
</template>

<script>
import docs from '@/docs/guide/advanced.md';

export default {
  metaInfo: {
    titleTemplate: '%s - Advanced Usage'
  },
  data() {
    return {
      docs
    };
  }
};
</script>
