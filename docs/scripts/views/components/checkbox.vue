<template>
  <div class="demo--checkbox">
    <section class="hero">
      <ui-checkbox cssOnly id="hero-checkbox-label">
        Checkbox
      </ui-checkbox>
    </section>

    <h3 :class="$tt('headline3')">0. Usage</h3>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h3 :class="$tt('headline3')">1. Example</h3>
    <section class="example">
      <h2>CSS Only</h2>
      <ui-checkbox-demo cssOnly></ui-checkbox-demo>
    </section>

    <section class="example">
      <h2>With JavaScript</h2>
      <ui-checkbox-demo></ui-checkbox-demo>
    </section>

    <hr>

    <section class="example">
      <p>Single checkbox, boolean value: </p>
      <!-- v-model -->
      <ui-checkbox id="checkbox" v-model="checked">
        {{checked}}
      </ui-checkbox>
      <!-- model -->
      <!-- <ui-checkbox id="checkbox" :model="checked" @change="balmUI.onChange('checked', $event)">
        {{checked}}
      </ui-checkbox> -->
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>
    </section>

    <section class="example">
      <p>Multiple checkboxes, bound to the same Array: {{checkedNames}}</p>
      <!-- v-model -->
      <ui-checkbox id="jack" value="Jack" v-model="checkedNames">Jack</ui-checkbox>
      <ui-checkbox id="john" value="John" v-model="checkedNames">John</ui-checkbox>
      <ui-checkbox id="mike" value="Mike" v-model="checkedNames">Mike</ui-checkbox>
      <!-- model -->
      <!-- <ui-checkbox id="jack" value="Jack" :model="checkedNames" @change="balmUI.onChange('checkedNames', $event)">Jack</ui-checkbox>
      <ui-checkbox id="john" value="John" :model="checkedNames" @change="balmUI.onChange('checkedNames', $event)">John</ui-checkbox>
      <ui-checkbox id="mike" value="Mike" :model="checkedNames" @change="balmUI.onChange('checkedNames', $event)">Mike</ui-checkbox> -->
      <ui-accordion>
        <ui-markdown :code="code[2]"></ui-markdown>
      </ui-accordion>
    </section>

    <h3 :class="$tt('headline3')">2. APIs</h3>
    <ui-apidocs name="checkbox"></ui-apidocs>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';
import UiCheckboxDemo from '../../components/checkbox';

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
