<template>
  <div :class="[$tt('body1'), 'demo--toast']">
    <header class="hero plugin">
      <h2 :class="$tt('headline4')">$toast</h2>
    </header>

    <ui-toc-affix withoutCss></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-demos'" :class="$tt('headline4')">1. Example</h4>
      <div class="example">
        <ui-button raised @click="$toast('gg')">Show Toast</ui-button>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="toast" type="plugin"></ui-apidocs>
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
    this.showCode('toast');
  }
};
</script>
