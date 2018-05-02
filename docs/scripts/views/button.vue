<template>
  <div class="demo--button">
    <section class="hero">
      <ui-button :disabled="disabled">Flat</ui-button>
      <ui-button raised :disabled="disabled">Raised</ui-button>
    </section>

    <section class="demo-wrapper">
      <ui-checkbox id="toggle-disabled"
        :model="disabled"
        @change="balmUI.onChange('disabled', $event)">
        Disabled buttons (excluding links)
      </ui-checkbox>

      <h1 :class="$tt('headline3')">Ripple Enabled</h1>
      <ui-button-demo :disabled="disabled"></ui-button-demo>

      <h1 :class="$tt('headline3')">CSS Only</h1>
      <ui-button-demo cssOnly :disabled="disabled"></ui-button-demo>
    </section>

    <!-- <ui-apidoc name="button"></ui-apidoc> -->
  </div>
</template>

<script>
import snippets from '../mixins/snippets';
import UiButtonDemo from './components/button';

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
  created() {
    // this.showCode('button', 10);
  }
};
</script>
