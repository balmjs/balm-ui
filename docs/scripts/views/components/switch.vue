<template>
  <div :class="[$tt('body1'), 'demo--switch']">
    <header class="hero component">
      <ui-form-field>
        <ui-switch id="hero-switch" v-model="toggle"></ui-switch>
        <label for="hero-switch">{{ toggle }}</label>
      </ui-form-field>
    </header>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-demo'" :class="$tt('headline4')">1. Demo</h4>
      <section class="example">
        <h2>1.1 Enabled</h2>
        <div class="demo-switch-wrapper">
          <ui-switch
            id="basic-switch"
            :trueValue="1"
            :falseValue="0"
            v-model="toggle1"
          ></ui-switch>
          <label for="basic-switch">{{ toggle1 }}</label>
        </div>
        <div class="demo-switch-wrapper">
          <ui-switch
            id="basic-switch-custom"
            class="demo-switch--custom"
            trueValue="on"
            falseValue="off"
            v-model="toggle2"
          ></ui-switch>
          <label for="basic-switch-custom">{{ toggle2 }} (custom color)</label>
        </div>
      </section>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>

      <section class="example">
        <h2>1.2 Disabled</h2>
        <div class="demo-switch-wrapper">
          <ui-switch id="basic-switch--disabled" disabled></ui-switch>
          <label for="basic-switch--disabled">off/on</label>
        </div>
      </section>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="switch"></ui-apidocs>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">
        3. Sass Variables
      </h4>
      <ui-cssdocs name="switch"></ui-cssdocs>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Switch'
  },
  mixins: [snippets],
  data() {
    return {
      toggle: false,
      toggle1: 0,
      toggle2: 'on'
    };
  },
  created() {
    this.showCode('switch');
  }
};
</script>
