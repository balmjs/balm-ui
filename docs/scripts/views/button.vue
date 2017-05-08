<template>
  <div class="demo-button">
    <h3>MDC WEB BUTTON</h3>
    <section>
      <fieldset>
        <legend>Buttons</legend>
        <ui-button>Default</ui-button>
        <ui-button raised>Raised</ui-button>
        <ui-button dense>Dense Default</ui-button>
        <ui-button raised dense>Dense Raised</ui-button>
        <ui-button compact>Compact</ui-button>
        <ui-button raised compact>Compact Raised</ui-button>
        <ui-button primary>Default with Primary</ui-button>
        <ui-button raised primary>Raised with Primary</ui-button>
        <ui-button accent>Default with Accent</ui-button>
        <ui-button raised accent>Raised with Accent</ui-button>
      </fieldset>

      <fieldset>
        <legend>Buttons - CSS Only</legend>
        <ui-button cssOnly>Default</ui-button>
        <ui-button cssOnly raised>Raised</ui-button>
        <ui-button cssOnly dense>Dense Default</ui-button>
        <ui-button cssOnly raised dense>Dense Raised</ui-button>
        <ui-button cssOnly compact>Compact</ui-button>
        <ui-button cssOnly raised compact>Compact Raised</ui-button>
        <ui-button cssOnly primary>Default with Primary</ui-button>
        <ui-button cssOnly raised primary>Raised with Primary</ui-button>
        <ui-button cssOnly accent>Default with Accent</ui-button>
        <ui-button cssOnly raised accent>Raised with Accent</ui-button>
      </fieldset>

      <fieldset>
        <legend>Buttons - Disabled</legend>
        <ui-button disabled>Default</ui-button>
        <ui-button disabled raised>Raised</ui-button>
        <ui-button disabled dense>Dense Default</ui-button>
        <ui-button disabled raised dense>Dense Raised</ui-button>
        <ui-button disabled compact>Compact</ui-button>
        <ui-button disabled raised compact>Compact Raised</ui-button>
        <ui-button disabled primary>Default with Primary</ui-button>
        <ui-button disabled raised primary>Raised with Primary</ui-button>
        <ui-button disabled accent>Default with Accent</ui-button>
        <ui-button disabled raised accent>Raised with Accent</ui-button>
      </fieldset>
    </section>

    <h3>Dark theme</h3>
    <section class="mdc-theme--dark">
      <fieldset>
        <legend>Buttons</legend>
        <ui-button>Default</ui-button>
        <ui-button raised>Raised</ui-button>
        <ui-button dense>Dense Default</ui-button>
        <ui-button raised dense>Dense Raised</ui-button>
        <ui-button compact>Compact</ui-button>
        <ui-button raised compact>Compact Raised</ui-button>
        <ui-button primary>Default with Primary</ui-button>
        <ui-button raised primary>Raised with Primary</ui-button>
        <ui-button accent>Default with Accent</ui-button>
        <ui-button raised accent>Raised with Accent</ui-button>
      </fieldset>

      <fieldset>
        <legend>Buttons - CSS Only</legend>
        <ui-button cssOnly>Default</ui-button>
        <ui-button cssOnly raised>Raised</ui-button>
        <ui-button cssOnly dense>Dense Default</ui-button>
        <ui-button cssOnly raised dense>Dense Raised</ui-button>
        <ui-button cssOnly compact>Compact</ui-button>
        <ui-button cssOnly raised compact>Compact Raised</ui-button>
        <ui-button cssOnly primary>Default with Primary</ui-button>
        <ui-button cssOnly raised primary>Raised with Primary</ui-button>
        <ui-button cssOnly accent>Default with Accent</ui-button>
        <ui-button cssOnly raised accent>Raised with Accent</ui-button>
      </fieldset>

      <fieldset>
        <legend>Buttons - Disabled</legend>
        <ui-button disabled>Default</ui-button>
        <ui-button disabled raised>Raised</ui-button>
        <ui-button disabled dense>Dense Default</ui-button>
        <ui-button disabled raised dense>Dense Raised</ui-button>
        <ui-button disabled compact>Compact</ui-button>
        <ui-button disabled raised compact>Compact Raised</ui-button>
        <ui-button disabled primary>Default with Primary</ui-button>
        <ui-button disabled raised primary>Raised with Primary</ui-button>
        <ui-button disabled accent>Default with Accent</ui-button>
        <ui-button disabled raised accent>Raised with Accent</ui-button>
      </fieldset>
    </section>

    <!-- <ui-apidoc name="button"></ui-apidoc> -->
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  created() {
    // this.showCode('button', 10);
  }
};
</script>
