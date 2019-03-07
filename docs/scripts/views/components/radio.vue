<template>
  <div :class="[$tt('body1'), 'demo--radio']">
    <section class="hero component">
      <ui-radio cssOnly name="hero" value="0" v-model="hero"></ui-radio>
      <ui-radio cssOnly name="hero" value="1" v-model="hero"></ui-radio>
      {{ hero }}
    </section>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-example'" :class="$tt('headline4')">1. Example</h4>
      <section class="example">
        <h2>With JavaScript</h2>
        <ui-radio-demo></ui-radio-demo>
      </section>

      <section class="example">
        <h2>CSS Only</h2>
        <ui-radio-demo cssOnly></ui-radio-demo>
      </section>

      <section class="example">
        <h2>Disabled</h2>
        <div>
          <ui-radio id="ex4a-radio1" name="ex4a" value="0" v-model="hero" disabled>Disabled Radio 1</ui-radio>
          <ui-radio id="ex4a-radio2" name="ex4a" value="1" v-model="hero" disabled>Disabled Radio 2</ui-radio>
        </div>
      </section>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="radio"></ui-apidocs>
    </div>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';
import UiRadioDemo from '../../components/radio';

export default {
  metaInfo: {
    titleTemplate: '%s - Radio'
  },
  components: {
    UiRadioDemo
  },
  mixins: [snippets],
  data() {
    return {
      hero: 1
    };
  },
  created() {
    this.showCode('radio');
  }
};
</script>
