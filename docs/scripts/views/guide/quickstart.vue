<template>
  <div :class="[$tt('body1'), 'page--quickstart']">
    <div :class="[$tt('body2'), 'pure-docs']">
      <ui-markdown :text="docs"></ui-markdown>
      <ui-footer-nav
        :prev="{ name: 'Introduction', url: 'guide.intro' }"
        :next="{ name: 'Advanced Usage', url: 'guide.advanced' }"
      ></ui-footer-nav>
    </div>
  </div>
</template>

<script>
import docs from '@/docs/en/guide/quickstart.md';

export default {
  metaInfo: {
    titleTemplate: '%s - Quick Start'
  },
  data() {
    return {
      docs
    };
  }
};
</script>
