<template>
  <div class="demo--checkbox">
    <section class="hero">
      <ui-checkbox cssOnly id="hero-checkbox-label">
        Checkbox
      </ui-checkbox>
    </section>

    <section class="example">
      <h2>CSS Only</h2>
      <ui-checkbox id="basic-checkbox" cssOnly>
        This is my checkbox
      </ui-checkbox>
    </section>

    <section class="example">
      <h2>CSS Only - Disabled</h2>
      <ui-checkbox id="basic-disabled-checkbox-label" cssOnly disabled>
        This is my disabled checkbox
      </ui-checkbox>
    </section>

    <section class="example">
      <h2>With Javascript</h2>
      <ui-checkbox id="native-js-checkbox">
        This is my checkbox
      </ui-checkbox>
    </section>

    <section class="example mdc-theme--dark">
      <h2>Dark Theme</h2>
      <ui-checkbox id="checkbox-dark" dark>
        This is my checkbox
      </ui-checkbox>
    </section>

    <section class="example">
      <p>Single checkbox, boolean value: </p>
      <ui-checkbox id="checkbox" :model="checked" @change="onChange('checked', $event)">
        {{checked}}
      </ui-checkbox>
    </section>

    <section class="example">
      <p>Multiple checkboxes, bound to the same Array: {{checkedNames}}</p>
      <ui-checkbox id="jack" value="Jack" :model="checkedNames" @change="onChange('checkedNames', $event)">Jack</ui-checkbox>
      <ui-checkbox id="john" value="John" :model="checkedNames" @change="onChange('checkedNames', $event)">John</ui-checkbox>
      <ui-checkbox id="mike" value="Mike" :model="checkedNames" @change="onChange('checkedNames', $event)">Mike</ui-checkbox>
    </section>

    <!-- <ui-apidoc name="checkbox"></ui-apidoc> -->
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      checked: false,
      checkedNames: []
    };
  },
  created() {
    // this.showCode('checkbox');
  }
};
</script>
