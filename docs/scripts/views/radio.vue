<template>
  <div class="docs-radio">
    <h4>Radio Box</h4>
    <ui-code language="html" :code="code1.html"></ui-code>
    <ui-code language="js" :code="code1.js"></ui-code>
    <p>
      <ui-radio name="sex" value="M" :model="gender" @change="chooseSex">Male</ui-radio>
      <ui-radio name="sex" value="F" :model="gender" @change="chooseSex">Female</ui-radio>
    </p>
    <p>
      <ui-button raised colored @click.native="submit">Submit</ui-button>
    </p>
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
    },
    submit() {
      console.info('gender');
      console.log(this.gender);
    }
  }
};
</script>
