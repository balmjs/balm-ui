<template>
  <div class="demo--checkbox">
    <section class="hero">
      <ui-checkbox cssOnly id="hero-checkbox-label">
        Checkbox
      </ui-checkbox>
    </section>

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
      <ui-checkbox id="checkbox" :model="checked" @change="balmUI.onChange('checked', $event)">
        {{checked}}
      </ui-checkbox>
    </section>

    <section class="example">
      <p>Multiple checkboxes, bound to the same Array: {{checkedNames}}</p>
      <ui-checkbox id="jack" value="Jack" :model="checkedNames" @change="balmUI.onChange('checkedNames', $event)">Jack</ui-checkbox>
      <ui-checkbox id="john" value="John" :model="checkedNames" @change="balmUI.onChange('checkedNames', $event)">John</ui-checkbox>
      <ui-checkbox id="mike" value="Mike" :model="checkedNames" @change="balmUI.onChange('checkedNames', $event)">Mike</ui-checkbox>
    </section>

    <!-- <ui-apidoc name="checkbox"></ui-apidoc> -->
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';
import UiCheckboxDemo from '../../components/checkbox';

export default {
  mixins: [snippets],
  components: {
    UiCheckboxDemo
  },
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
