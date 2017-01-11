<template>
  <div class="docs-checkbox">
    <div class="component-title">
      <h3>Checkbox button</h3>
    </div>

    // TODO
    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-checkbox v-for="num in [1, 2, 3]" :value="num" :model="numberOptions" @change="onChangeNumber">Option {{ num }}</ui-checkbox>
      </div>
    </div>
    <ui-code language="html" :code="code1.html"></ui-code>
    <ui-code language="js" :code="code1.js"></ui-code>

    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-checkbox v-for="str in ['A', 'B', 'C']" :value="str" :model="stringOptions" @change="onChangeString">Option {{ str }}</ui-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code1: {
        html: '',
        js: ''
      },
      numberOptions: [],
      stringOptions: []
    };
  },
  methods: {
    onChangeNumber(val) {
      this.numberOptions = val;
    },
    onChangeString(val) {
      this.stringOptions = val;
    }
  },
  async created() {
    for (let i = 1; i <= 1; i++) {
      let template = await this.$http.get(`${this.$domain}/snippets/checkbox/demo${i}-template.html`);
      let script = await this.$http.get(`${this.$domain}/snippets/checkbox/demo${i}-script.html`);
      this[`code${i}`] = {
        html: template.data,
        js: script.data
      };
    }
  }
};
</script>
