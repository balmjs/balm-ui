<template>
  <div class="demo-select">
    <div class="component-title">
      <h3>Select</h3>
    </div>

    <div class="snippet-demo">
      <ui-select :value="options1" :model="selected1" defaultValue="全部" @change="onChange1"></ui-select>
      <ui-select :value="options2" :model="selected2" @change="onChange2"></ui-select>
    </div>
    <ui-markdown :text="code[0]"></ui-markdown>

    // TODO
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected1: 2,
      options1: [{
        key: 1,
        value: 'item 1'
      }, {
        key: 2,
        value: 'item 2'
      }, {
        key: 3,
        value: 'item 3'
      }],
      selected2: '',
      options2: [],
      demoCount: 1,
      code: []
    };
  },
  methods: {
    onChange1(option) {
      this.selected1 = option.key;
      if (option.key === 1) {
        this.selected2 = 'A';
        this.options2 = [{
          key: 'A',
          value: 'A'
        }, {
          key: 'B',
          value: 'B'
        }];
      } else {
        this.selected2 = 'C';
        this.options2 = [{
          key: 'C',
          value: 'C'
        }, {
          key: 'D',
          value: 'D'
        }];
      }
    },
    onChange2(option) {
      this.selected2 = option.key;
    }
  },
  created() {
    for (let i = 1; i <= this.demoCount; i++) {
      let code = require(`../snippets/select/demo${i}.md`);
      this.code.push(code);
    }
  }
};
</script>
