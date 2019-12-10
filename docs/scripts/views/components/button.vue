<template>
  <div :class="[$tt('body1'), 'demo--button']">
    <header class="hero component">
      <div class="hero-demo">
        <ui-button :type="typeOption" v-touch>{{ text }}</ui-button>
      </div>
      <div class="hero-options">
        <ui-select
          class="hero-option"
          :options="TypeOptions"
          v-model="typeOption"
          >Type</ui-select
        >
        <ui-textfield class="hero-option" v-model="text"
          >Button Text</ui-textfield
        >
      </div>
    </header>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h3 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h3>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h3 v-anchor:id="'ui-demo'" :class="$tt('headline4')">1. Demo</h3>
      <section class="demo-wrapper">
        <div class="demo-controls">
          <ui-form-field>
            <ui-checkbox
              id="toggle-disabled"
              v-model="controls.disabled"
            ></ui-checkbox>
            <label for="toggle-disabled"
              >Disabled buttons (excluding links)</label
            >
          </ui-form-field>
        </div>

        <fieldset>
          <div>
            <ui-button :disabled="controls.disabled">Text</ui-button>
            <ui-button outlined :disabled="controls.disabled"
              >Outlined</ui-button
            >
            <ui-button raised :disabled="controls.disabled">Raised</ui-button>

            <ui-button icon="favorite" :disabled="controls.disabled"
              >Icon</ui-button
            >
            <ui-button :disabled="controls.disabled">
              Trailing Icon
              <template #after="{ iconClass }">
                <svg-logo :class="iconClass"></svg-logo>
              </template>
            </ui-button>

            <ui-a>Link</ui-a>
          </div>
          <ui-accordion>
            <ui-markdown :code="code[1]"></ui-markdown>
          </ui-accordion>
        </fieldset>
      </section>

      <h3 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h3>
      <ui-apidocs name="button"></ui-apidocs>

      <h3 v-anchor:id="'ui-sass'" :class="$tt('headline4')">
        3. Sass Variables
      </h3>
      <ui-cssdocs name="button"></ui-cssdocs>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

const TypeOptions = [
  {
    label: 'Text',
    value: 0
  },
  {
    label: 'Outlined',
    value: 1
  },
  {
    label: 'Raised',
    value: 2
  },
  {
    label: 'Unelevated',
    value: 3
  }
];

export default {
  metaInfo: {
    titleTemplate: '%s - Button'
  },
  mixins: [snippets],
  data() {
    return {
      TypeOptions,
      typeOption: 0,
      text: 'Button',
      controls: {
        disabled: false
      }
    };
  },
  created() {
    this.showCode('button');
  }
};
</script>
