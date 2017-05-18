<template>
  <div class="demo--checkbox">
    <section class="hero">
      <ui-checkbox id="hero-checkbox-label">
        Checkbox
      </ui-checkbox>
    </section>

    <section class="example">
      <h2>CSS Only</h2>
      <ui-checkbox id="basic-checkbox" cssOnly value="1" :model="value1" @change="onChange('value1', $event)">
        This is my checkbox
      </ui-checkbox>
    </section>

    <section class="example">
      <h2>CSS Only - Disabled</h2>
      <ui-checkbox id="basic-disabled-checkbox-label" cssOnly disabled :model="false">
        This is my disabled checkbox
      </ui-checkbox>
    </section>

    <section class="example">
      <h2>With Javascript</h2>
      <ui-checkbox id="native-js-checkbox" value="a" :model="value2" @change="onChange('value2', $event)">
        This is my checkbox
      </ui-checkbox>
    </section>

    <section class="example mdc-theme--dark">
      <h2>Dark Theme</h2>
      <ui-checkbox id="checkbox-dark" dark :model="false">
        This is my checkbox
      </ui-checkbox>
    </section>

    <section class="example">
      <ui-checkbox id="box1" value="a" :model="value3" @change="onChange('value3', $event)">Item 1</ui-checkbox>
      <ui-checkbox id="box2" value="b" :model="value3" @change="onChange('value3', $event)">Item 2</ui-checkbox>
      <ui-checkbox id="box3" value="c" :model="value3" @change="onChange('value3', $event)">Item 3</ui-checkbox>
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
      value1: '',
      value2: '',
      value3: ['a', 'c']
    };
  },
  created() {
    // this.showCode('checkbox');
  }
};
</script>
