<template>
  <div :class="[$tt('body1'), 'demo--checkbox']">
    <header class="hero component">
      <ui-form-field>
        <ui-checkbox v-a11y id="hero-checkbox"></ui-checkbox>
        <label for="hero-checkbox">Checkbox</label>
      </ui-form-field>
    </header>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown text="common"></ui-markdown>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-demo'" :class="$tt('headline4')">1. Demo</h4>
      <section class="example">
        <ui-checkbox-demo></ui-checkbox-demo>
      </section>

      <hr />

      <section class="example">
        <p>Single checkbox, boolean value:</p>
        <!-- v-model -->
        <ui-form-field>
          <ui-checkbox id="checkbox" v-model="checked"></ui-checkbox>
          <label for="checkbox">{{ checked }}</label>
        </ui-form-field>
        <!-- model -->
        <!-- <ui-form-field>
          <ui-checkbox id="checkbox" :model="checked" @change="$balmUI.onChange('checked', $event)"></ui-checkbox>
          <label for="checkbox">{{checked}}</label>
        </ui-form-field>-->
        <ui-snippet :code="code[1]"></ui-snippet>
      </section>

      <section class="example">
        <p>Multiple checkboxes, bound to the same Array: {{ checkedNames }}</p>
        <!-- v-model -->
        <ui-form-field>
          <ui-checkbox
            id="jack"
            value="Jack"
            v-model="checkedNames"
          ></ui-checkbox>
          <label for="jack">Jack</label>
        </ui-form-field>
        <ui-form-field>
          <ui-checkbox
            id="john"
            value="John"
            v-model="checkedNames"
          ></ui-checkbox>
          <label for="john">John</label>
        </ui-form-field>
        <ui-form-field>
          <ui-checkbox
            id="mike"
            value="Mike"
            v-model="checkedNames"
          ></ui-checkbox>
          <label for="mike">Mike</label>
        </ui-form-field>
        <!-- model -->
        <!-- <ui-form-field>
          <ui-checkbox
            id="jack"
            value="Jack"
            :model="checkedNames"
            @change="$balmUI.onChange('checkedNames', $event)"
          ></ui-checkbox>
          <label for="jack">Jack</label>
        </ui-form-field>
        <ui-form-field>
          <ui-checkbox
            id="john"
            value="John"
            :model="checkedNames"
            @change="$balmUI.onChange('checkedNames', $event)"
          ></ui-checkbox>
          <label for="john">John</label>
        </ui-form-field>
        <ui-form-field>
          <ui-checkbox
            id="mike"
            value="Mike"
            :model="checkedNames"
            @change="$balmUI.onChange('checkedNames', $event)"
          ></ui-checkbox>
          <label for="mike">Mike</label>
        </ui-form-field>-->
        <ui-snippet :code="code[2]"></ui-snippet>
      </section>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-markdown :text="docs.checkbox"></ui-markdown>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">
        3. Sass Variables
      </h4>
      <ui-markdown :text="docs.css"></ui-markdown>
    </div>
  </div>
</template>

<script>
import UiCheckboxDemo from '@/demos/checkbox';
import snippets from '@/mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Checkbox'
  },
  components: {
    UiCheckboxDemo
  },
  mixins: [snippets],
  data() {
    return {
      // demo
      checked: false,
      checkedNames: []
    };
  },
  created() {
    this.initDocs('checkbox', {
      code: 2,
      apis: ['checkbox'],
      css: true
    });
  }
};
</script>
