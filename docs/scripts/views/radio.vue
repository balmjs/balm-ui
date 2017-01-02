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
        html: '',
        js: ''
      }
    };
  },
  methods: {
    chooseSex(val) {
      this.gender = val;
    }
  },
  async created() {
    for (let i = 1; i <= 1; i++) {
      let template = await this.$http.get(`/snippets/radio/demo${i}-template.html`);
      let script = await this.$http.get(`/snippets/radio/demo${i}-script.html`);
      this[`code${i}`] = {
        html: template.data,
        js: script.data
      };
    }
  }
};
</script>
