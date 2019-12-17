<template>
  <div :class="[$tt('body1'), 'demo--checkbox']">
    <header class="hero component">
      <ui-form-field>
        <ui-checkbox v-touch id="hero-checkbox"></ui-checkbox>
        <label for="hero-checkbox">Checkbox</label>
      </ui-form-field>
    </header>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
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
        <ui-accordion>
          <ui-markdown :code="code[1]"></ui-markdown>
        </ui-accordion>
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
        <ui-accordion>
          <ui-markdown :code="code[2]"></ui-markdown>
        </ui-accordion>
      </section>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="checkbox"></ui-apidocs>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">
        3. Sass Variables
      </h4>
      <ui-cssdocs name="checkbox"></ui-cssdocs>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';
import UiCheckboxDemo from '@/demos/checkbox';

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
      checked: false,
      checkedNames: []
    };
  },
  created() {
    this.showCode('checkbox', 2);
  }
};
</script>
