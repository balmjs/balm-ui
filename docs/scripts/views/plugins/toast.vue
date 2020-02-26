<template>
  <div :class="[$tt('body1'), 'demo--toast']">
    <header class="hero plugin">
      <h3 :class="$tt('headline3')">$toast</h3>
    </header>

    <ui-toc-affix withoutCss></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown text="common"></ui-markdown>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-demo'" :class="$tt('headline4')">1. Demo</h4>
      <div class="example">
        <ui-button raised @click="$toast('gg')">Show Toast</ui-button>
      </div>
      <ui-snippet :code="code[1]"></ui-snippet>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-markdown :text="docs.toast"></ui-markdown>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Toast'
  },
  mixins: [snippets],
  created() {
    this.initDocs('toast', {
      code: 1,
      apis: ['toast']
    });
  }
};
</script>
