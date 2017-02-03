<template>
  <div class="docs-datepicker">
    <div class="component-title">
      <h3>DatePicker</h3>
    </div>

    <div class="snippet-demo">
      <ui-datepicker label="Select Date.." :model="date" @input="onInput" plus>
        <i slot="plus" class="fa fa-calendar"></i>
      </ui-datepicker>
    </div>
    <ui-markdown :text="code[0]"></ui-markdown>

    // TODO
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      demoCount: 1,
      code: []
    };
  },
  methods: {
    onInput(val) {
      this.date = val;
    }
  },
  created() {
    for (let i = 1; i <= this.demoCount; i++) {
      let code = require(`../snippets/datepicker/demo${i}.md`);
      this.code.push(code);
    }
  }
};
</script>
