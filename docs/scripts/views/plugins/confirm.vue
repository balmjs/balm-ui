<template>
  <div :class="[$tt('body1'), 'demo--confirm']">
    <header class="hero plugin">
      <h3 :class="$tt('headline3')">$confirm</h3>
    </header>

    <ui-toc-affix withoutCss></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-demo'" :class="$tt('headline4')">1. Demo</h4>
      <div class="example">
        <ui-button raised @click="show">Show Confrim</ui-button>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="confirm" type="plugin"></ui-apidocs>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Confirm'
  },
  mixins: [snippets],
  created() {
    this.showCode('confirm');
  },
  methods: {
    show() {
      this.$confirm({
        message: 'Do you like BalmJS?',
        acceptText: 'Cool',
        cancelText: 'Good'
      }).then(result => {
        if (result) {
          this.$alert('Thanks :)');
        }
      });
    }
  }
};
</script>
