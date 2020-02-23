<template>
  <div :class="[$tt('body1'), 'demo--alert']">
    <header class="hero plugin">
      <h3 :class="$tt('headline3')">$alert</h3>
    </header>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-demo'" :class="$tt('headline4')">1. Demo</h4>
      <div class="example">
        <ui-button raised @click="$alert('Hello BalmJS')">Show Alert</ui-button>
      </div>
      <ui-snippet :code="code[1]"></ui-snippet>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-markdown :text="docs.alert"></ui-markdown>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">
        3. Sass Variables
      </h4>
      <ui-markdown :text="docs.css"></ui-markdown>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Alert'
  },
  mixins: [snippets],
  created() {
    this.initDocs('alert', {
      code: 1,
      apis: ['alert'],
      css: true
    });
  }
};
</script>
