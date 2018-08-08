<template>
  <div :class="[$tt('body1'), 'demo--advanced']">
    <div :class="[$tt('body2'), 'pure-docs']">
      <ui-markdown :text="docs"></ui-markdown>
      <ui-footer-nav
        :prev="{name: 'Getting Started', url: 'quickstart'}"
        :next="{name: 'Kill IE', url: 'kill-ie'}"></ui-footer-nav>
    </div>
  </div>
</template>

<script>
import docs from '../../docs/advanced.md';

export default {
  data() {
    return {
      docs
    };
  }
};
</script>

