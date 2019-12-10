<template>
  <div :class="[$tt('body1'), 'demo--radio']">
    <header class="hero component">
      <ui-form-field>
        <ui-radio v-touch name="hero" value="0" v-model="hero"></ui-radio>
        <ui-radio v-touch name="hero" value="1" v-model="hero"></ui-radio>
        {{ hero }}
      </ui-form-field>
    </header>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-demo'" :class="$tt('headline4')">1. Demo</h4>
      <section class="example">
        <ui-radio-demo></ui-radio-demo>
      </section>

      <section class="example">
        <h2>Disabled</h2>
        <div>
          <ui-form-field>
            <ui-radio
              id="ex4a-radio1"
              name="ex4a"
              value="0"
              v-model="hero"
              disabled
            ></ui-radio>
            <label for="ex4a-radio1">Disabled Radio 1</label>
          </ui-form-field>
          <ui-form-field>
            <ui-radio
              id="ex4a-radio2"
              name="ex4a"
              value="1"
              v-model="hero"
              disabled
            ></ui-radio>
            <label for="ex4a-radio2">Disabled Radio 2</label>
          </ui-form-field>
        </div>
      </section>

      <section class="example">
        <ui-form-field>
          <ui-radio id="male" name="sex" value="M" v-model="gender"></ui-radio>
          <label for="male">Male</label>
        </ui-form-field>
        <ui-form-field>
          <ui-radio
            id="female"
            name="sex"
            value="F"
            v-model="gender"
          ></ui-radio>
          <label for="female">Female</label>
        </ui-form-field>
        <p>Gender: {{ gender }}</p>
        <ui-accordion>
          <ui-markdown :code="code[1]"></ui-markdown>
        </ui-accordion>
      </section>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="radio"></ui-apidocs>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">
        3. Sass Variables
      </h4>
      <ui-cssdocs name="radio"></ui-cssdocs>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';
import UiRadioDemo from '@/components/radio';

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
      hero: 1,
      gender: ''
    };
  },
  created() {
    this.showCode('radio');
  }
};
</script>
