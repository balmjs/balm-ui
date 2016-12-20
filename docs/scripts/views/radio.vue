<template>
  <div class="docs-radio">
    <h4>Radio Box</h4>
    <pre><code class="language-js" v-html="code"></code></pre>
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
import code from '../usages/radio/1.html';

export default {
  data() {
    return {
      gender: '',
      code: ''
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
    this.code = this.$prism.highlight(code, Prism.languages.javascript);
  }
};
</script>
