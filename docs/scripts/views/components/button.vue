<template>
  <div class="demo--button">
    <section class="hero">
      <ui-button :disabled="disabled">Flat</ui-button>
      <ui-button raised :disabled="disabled">Raised</ui-button>
    </section>

    <h3 :class="$tt('headline3')">0. Usage</h3>
    <ui-markdown :text="code[0]"></ui-markdown>

    <section class="demo-wrapper">
      <ui-checkbox id="toggle-disabled"
        v-model="disabled">
        Disabled buttons (excluding links)
      </ui-checkbox>

      <h3 :class="$tt('headline3')">1. Ripple Enabled</h3>
      <ui-button-demo :disabled="disabled" :code="demoCode"></ui-button-demo>

      <h3 :class="$tt('headline3')">2. CSS Only</h3>
      <ui-button-demo cssOnly :disabled="disabled"></ui-button-demo>
    </section>

    <h3 :class="$tt('headline3')">3. API</h3>
    <ui-apidocs name="button"></ui-apidocs>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';
import UiButtonDemo from '../../components/button';

export default {
  metaInfo: {
    titleTemplate: '%s - Button'
  },
  components: {
    UiButtonDemo
  },
  mixins: [snippets],
  data() {
    return {
      disabled: false
    };
  },
  computed: {
    demoCode() {
      return this.code;
    }
  },
  created() {
    this.showCode('button', 6);
  }
};
</script>
