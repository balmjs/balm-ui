<template>
  <div :class="[$tt('body1'), 'demo--quickstart']">
    <div :class="[$tt('body2'), 'pure-docs']">
      <ui-markdown :text="docs"></ui-markdown>
      <ui-footer-nav
        :prev="{name: 'Introduction', url: 'intro'}"
        :next="{name: 'Advanced Usage', url: 'advanced'}"></ui-footer-nav>
    </div>
  </div>
</template>

<script>
import docs from '../../docs/quickstart.md';

export default {
  data() {
    return {
      docs
    };
  }
};
</script>

