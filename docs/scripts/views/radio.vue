<template>
  <div class="docs-radio">
    <div class="component-title">
      <h3>Radio button</h3>
    </div>

    // TODO
    <div class="snippet-demo">
      <ui-radio name="sex" value="M" :model="gender" @change="chooseSex">Male</ui-radio>
      <ui-radio name="sex" value="F" :model="gender" @change="chooseSex">Female</ui-radio>
    </div>
    <ui-code language="html" :code="code1.html"></ui-code>
    <ui-code language="js" :code="code1.js"></ui-code>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gender: '',
      code1: {
        html: require('../snippets/radio/demo1-template.html'),
        js: require('../snippets/radio/demo1-script.html')
      }
    };
  },
  methods: {
    chooseSex(val) {
      this.gender = val;
    }
  }
};
</script>
