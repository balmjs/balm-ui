<template>
  <div class="docs-radio">
    <h4>Radio Box</h4>
    <pre><code class="language-html" v-html="code.html"></code></pre>
    <pre><code class="language-js" v-html="code.js"></code></pre>
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
import codeTemplate from '../usages/radio/template.html';
import codeScript from '../usages/radio/script.html';

export default {
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
    this.code.html = this.$prism.highlight(codeTemplate, this.$prism.languages.html);
    this.code.js = this.$prism.highlight(codeScript, this.$prism.languages.javascript);
  }
};
</script>
