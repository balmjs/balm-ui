<template>
  <div class="docs--radio">
    <section class="hero">
      <ui-radio name="hero" value="0"></ui-radio>
      <ui-radio name="hero" value="1"></ui-radio>
    </section>

    <section class="example">
      <h2>With Javascript</h2>
      <ui-radio id="ex1-radio1" name="ex1"
        value="a" :model="value1"
        @change="onChange('value1', $event)">
        Radio 1
      </ui-radio>
      <ui-radio id="ex1-radio2" name="ex1"
        value="b" :model="value1"
        @change="onChange('value1', $event)">
        Radio 2
      </ui-radio>
    </section>

    <section class="example">
      <h2>CSS Only</h2>
      <ui-radio cssOnly id="ex2-radio1" name="ex2"
        :value="1" :model="value2"
        @change="onChange('value2', $event)">
        Radio 1
      </ui-radio>

      <ui-radio cssOnly id="ex2-radio2" name="ex2"
        :value="2" :model="value2"
        @change="onChange('value2', $event)">
        Radio 2
      </ui-radio>
    </section>

    <section class="example">
      <h2>CSS Only - Disabled</h2>
      <ui-radio cssOnly disabled name="ex2b" value="yes" :model="value">
        Radio 1
      </ui-radio>
      <ui-radio cssOnly disabled name="ex2b" value="no" :model="value">
        Radio 2
      </ui-radio>
    </section>

    <section class="example mdc-theme--dark">
      <h2 class="mdc-theme--text-primary-on-dark">Dark Theme</h2>
      <ui-radio id="ex3-radio1" name="ex3"
        :value="true" :model="value3"
        @change="onChange('value3', $event)">
        Radio 1
      </ui-radio>
      <ui-radio id="ex3-radio2" name="ex3"
        :value="false" :model="value3"
        @change="onChange('value3', $event)">
        Radio 2
      </ui-radio>
    </section>

    <section class="example">
      <h2>Disabled</h2>

      <div>
        <ui-radio disabled name="ex4a" value="yes" :model="value">Disabled Radio 1</ui-radio>
        <ui-radio disabled name="ex4a" value="no" :model="value">Disabled Radio 2</ui-radio>
      </div>

      <div class="mdc-theme--dark">
        <ui-radio disabled name="ex4b" value="yes" :model="value">Disabled Radio 1</ui-radio>
        <ui-radio disabled name="ex4b" value="no" :model="value">Disabled Radio 2</ui-radio>
      </div>
    </section>

    <!-- <ui-apidoc name="radio"></ui-apidoc> -->
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      value: 'yes',
      value1: '',
      value2: 1,
      value3: true
    };
  },
  created() {
    // this.showCode('radio');
  }
};
</script>
