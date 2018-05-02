<template>
  <div class="demo--button">
    <section class="hero">
      <ui-button :disabled="disabled">Flat</ui-button>
      <ui-button raised :disabled="disabled">Raised</ui-button>
    </section>

    <h1 :class="$tt('headline3')">0. Usage</h1>
    <ui-markdown :text="code[0]"></ui-markdown>

    <section class="demo-wrapper">
      <ui-checkbox id="toggle-disabled"
        :model="disabled"
        @change="balmUI.onChange('disabled', $event)">
        Disabled buttons (excluding links)
      </ui-checkbox>

      <h1 :class="$tt('headline3')">1. Ripple Enabled</h1>
      <ui-button-demo :disabled="disabled" :code="demoCode"></ui-button-demo>

      <h1 :class="$tt('headline3')">2. CSS Only</h1>
      <ui-button-demo cssOnly :disabled="disabled"></ui-button-demo>
    </section>

    <h1 :class="$tt('headline3')">3. API</h1>
    <ui-apidocs name="button"></ui-apidocs>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';
import UiButtonDemo from '../../components/button';

export default {
  mixins: [snippets],
  components: {
    UiButtonDemo
  },
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
