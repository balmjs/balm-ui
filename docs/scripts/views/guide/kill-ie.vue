<template>
  <div :class="[$tt('body1'), 'demo--kill-ie']">
    <div :class="[$tt('body2'), 'pure-docs']">
      <ui-markdown :text="docs"></ui-markdown>
      <ui-footer-nav
        :prev="{name: 'Advanced Usage', url: 'advanced'}"></ui-footer-nav>
    </div>
  </div>
</template>

<script>
import docs from '../../docs/kill-ie.md';

export default {
  data() {
    return {
      docs
    };
  }
};
</script>

