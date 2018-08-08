<template>
  <div :class="[$tt('body1'), 'demo--intro']">
    <div :class="[$tt('body2'), 'pure-docs']">
      <ui-markdown :text="docs"></ui-markdown>
      <ui-footer-nav
        :next="{name: 'Getting Started', url: 'quickstart'}"></ui-footer-nav>
    </div>
  </div>
</template>

<script>
import docs from '../../docs/intro.md';

export default {
  data() {
    return {
      docs
    };
  }
};
</script>

