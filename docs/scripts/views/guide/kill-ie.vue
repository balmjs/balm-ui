<template>
  <div :class="[$tt('body1'), 'page--kill-ie']">
    <div :class="[$tt('body2'), 'pure-docs']">
      <ui-markdown :text="docs"></ui-markdown>
      <ui-footer-nav :prev="{ name: 'Advanced Usage', url: 'guide.advanced' }"></ui-footer-nav>
    </div>
  </div>
</template>

<script>
import docs from '@/docs/guide/kill-ie.md';

export default {
  metaInfo: {
    titleTemplate: '%s - Kill IE'
  },
  data() {
    return {
      docs
    };
  }
};
</script>
