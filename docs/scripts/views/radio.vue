<template>
  <div class="docs-radio">
    <h1>MDC Radio</h1>
    <section>
      <h2>CSS Only</h2>
      <ui-radio cssOnly id="ex1-radio1" name="ex1" value="1" :model="value1" @change="onChange('value1', $event)">
        Radio 1
      </ui-radio>

      <ui-radio cssOnly id="ex1-radio2" name="ex1" value="2" :model="value1" @change="onChange('value1', $event)">
        Radio 2
      </ui-radio>
    </section>

    <section>
      <h2>CSS Only - Disabled</h2>
      <ui-radio cssOnly disabled id="ex2-radio1" name="ex2" value="a" :model="value2" @change="onChange('value2', $event)">
        Radio 1
      </ui-radio>
      <ui-radio cssOnly disabled id="ex2-radio2" name="ex2" value="b" :model="value2" @change="onChange('value2', $event)">
        Radio 2
      </ui-radio>
    </section>

    <section>
      <h2>With Javascript</h2>
      <ui-radio id="e3-radio1" name="ex3" value="1" :model="value3" @change="onChange('value3', $event)">
        Radio 1
      </ui-radio>
      <ui-radio id="e3-radio2" name="ex3" value="2" :model="value3" @change="onChange('value3', $event)">
        Radio 2
      </ui-radio>
    </section>

    <section class="mdc-theme--dark">
      <h2 class="mdc-theme--text-primary-on-dark">Dark Theme</h2>
      <ui-radio id="ex4-radio1" name="ex4" value="a" :model="value4" @change="onChange('value4', $event)">
        Radio 1
      </ui-radio>
      <ui-radio id="ex4-radio2" name="ex4" value="b" :model="value4" @change="onChange('value4', $event)">
        Radio 2
      </ui-radio>
    </section>

    <section>
      <h2>Disabled</h2>

      <div>
        <ui-radio disabled id="ex4a-radio1" name="ex4a" value="1" :model="1">Disabled Radio 1</ui-radio>
        <ui-radio disabled id="ex4a-radio2" name="ex4a" value="2" :model="1">Disabled Radio 2</ui-radio>
      </div>

      <div class="mdc-theme--dark">
        <ui-radio disabled id="ex4b-radio1" name="ex4b" value="a" :model="'a'">Disabled Radio 1</ui-radio>
        <ui-radio disabled id="ex4b-radio2" name="ex4b" value="b" :model="'a'">Disabled Radio 2</ui-radio>
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
      value1: 2,
      value2: '',
      value3: 1,
      value4: 'a'
    };
  },
  methods: {
    onChange(field, value) {
      this[field] = value;
    }
  },
  created() {
    // this.showCode('radio');
  }
};
</script>
