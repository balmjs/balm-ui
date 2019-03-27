<template>
  <div :class="[$tt('body1'), 'demo--divider']">
    <section class="hero component">
      <ui-text-divider>With Text</ui-text-divider>
    </section>

    <ui-toc-affix withoutCss></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-example'" :class="$tt('headline4')">1. Example</h4>
      <section class="example">
        <h6 :class="$tt('headline6')">1.1 Default Usage</h6>
        <ui-text-divider>Text</ui-text-divider>
      </section>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>

      <section class="example">
        <h6 :class="$tt('headline6')">1.2 Vertical Divider</h6>
        <div class="vertical-divider-demo">
          <div class="block red"></div>
          <ui-text-divider type="vertical">or</ui-text-divider>
          <div class="block blue"></div>
        </div>
      </section>
      <ui-accordion>
        <ui-markdown :code="code[2]"></ui-markdown>
      </ui-accordion>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="divider"></ui-apidocs>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Text Divider'
  },
  mixins: [snippets],
  created() {
    this.showCode('divider', 2);
  }
};
</script>
