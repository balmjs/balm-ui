<template>
  <div :class="[$tt('body1'), 'demo--anchor']">
    <section class="hero directive">
      <h2 :class="$tt('headline4')">Anchor</h2>
    </section>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-example'" :class="$tt('headline4')">1. Example</h4>
      <section class="anchor-example">
        <h6 :class="$tt('headline6')">1.1 Default Usage</h6>
        <ui-button raised v-anchor:href="'#target1'">Anchor 1</ui-button>
        <ui-button outlined v-anchor:href="'#target2'">Anchor 2</ui-button>
        <ui-accordion>
          <ui-markdown :code="code[1]"></ui-markdown>
        </ui-accordion>
        <div class="anchor-example-inner">
          <div v-anchor:id="'target1'">Target 1</div>
          <div v-anchor:id="'target2'">Target 2</div>
        </div>
      </section>

      <section class="anchor-example" v-anchor.html>
        <h6 :class="$tt('headline6')">1.2 HTML Usage (e.g. markdown)</h6>
        <a href="javascript:void(0)" class="v-anchor" data-href="#target3">Anchor 3</a>
        <a href="javascript:void(0)" class="v-anchor" data-href="#target4">Anchor 4</a>
        <ui-accordion>
          <ui-markdown :code="code[2]"></ui-markdown>
        </ui-accordion>
        <div class="anchor-example-inner">
          <div id="target3">Target 3</div>
          <div id="target4">Target 4</div>
        </div>
      </section>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="anchor" type="directive"></ui-apidocs>
    </div>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Anchor'
  },
  mixins: [snippets],
  created() {
    this.showCode('anchor', 2);
  }
};
</script>
