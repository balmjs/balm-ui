<template>
  <div class="docs-radio">
    <h4>Radio Box</h4>
    <ui-code language="html" :code="code.html"></ui-code>
    <ui-code language="js" :code="code.js"></ui-code>
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
import UiCode from '../components/code';
import codeTemplate from '../usages/radio/template.html';
import codeScript from '../usages/radio/script.html';

export default {
  components: {
    UiCode
  },
  data() {
    return {
      gender: '',
      code: {}
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
  },
  created() {
    this.code.html = this.renderHTML(codeTemplate);
    this.code.js = this.renderJS(codeScript);
  }
};
</script>
