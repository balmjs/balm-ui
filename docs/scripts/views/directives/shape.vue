<template>
  <div class="demo--shape">
    <section class="hero">
      <div class="four-corner-container"
        v-shape>
        <ui-button unelevated>Filled Button</ui-button>
      </div>
      <div class="four-corner-container four-corner-container--outlined"
         v-shape>
        <ui-button outlined>Outlined Button</ui-button>
      </div>
    </section>

    <h3 :class="$tt('headline3')">0. Usage</h3>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h3 :class="$tt('headline3')">2. Shape Directive API</h3>
    <ui-apidocs name="shape"></ui-apidocs>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Shape'
  },
  mixins: [snippets],
  created() {
    this.showCode('shape');
  }
};
</script>
