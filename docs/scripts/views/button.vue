<template>
  <div class="demo--button">
    <section class="hero">
      <ui-button>Flat</ui-button>
      <ui-button raised primary>Raised</ui-button>
    </section>

    <section :class="['demo-wrapper', {'mdc-theme--dark': useDarkTheme}]">
      <ui-checkbox id="toggle-dark"
        :model="useDarkTheme"
        @change="onChange('useDarkTheme', $event)">
        Dark Theme
      </ui-checkbox>

      <h1 :class="typography('display2')">Ripple Enabled</h1>
      <fieldset>
        <legend :class="typography('title')">Text Button</legend>
        <ui-button>Baseline</ui-button>
        <ui-button compact>Compact</ui-button>
        <ui-button dense>Dense</ui-button>
        <ui-button primary>Primary</ui-button>
        <ui-button accent>Accent</ui-button>
        <ui-button disabled>Disabled</ui-button>
      </fieldset>
      <fieldset>
        <legend :class="typography('title')">Raised Button</legend>
        <ui-button raised>Baseline</ui-button>
        <ui-button raised compact>Compact</ui-button>
        <ui-button raised dense>Dense</ui-button>
        <ui-button raised primary>Primary</ui-button>
        <ui-button raised accent>Accent</ui-button>
        <ui-button raised disabled>Disabled</ui-button>
      </fieldset>

      <h1 :class="typography('display2')">CSS Only</h1>
      <fieldset>
        <legend :class="typography('title')">Text Button</legend>
        <ui-button>Baseline</ui-button>
        <ui-button cssOnly compact>Compact</ui-button>
        <ui-button cssOnly dense>Dense</ui-button>
        <ui-button cssOnly primary>Primary</ui-button>
        <ui-button cssOnly accent>Accent</ui-button>
        <ui-button cssOnly disabled>Disabled</ui-button>
      </fieldset>
      <fieldset>
        <legend :class="typography('title')">Raised Button</legend>
        <ui-button cssOnly raised>Baseline</ui-button>
        <ui-button cssOnly raised compact>Compact</ui-button>
        <ui-button cssOnly raised dense>Dense</ui-button>
        <ui-button cssOnly raised primary>Primary</ui-button>
        <ui-button cssOnly raised accent>Accent</ui-button>
        <ui-button cssOnly raised disabled>Disabled</ui-button>
      </fieldset>
    </section>

    <!-- <ui-apidoc name="button"></ui-apidoc> -->
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      useDarkTheme: false
    };
  },
  created() {
    // this.showCode('button', 10);
  }
};
</script>
