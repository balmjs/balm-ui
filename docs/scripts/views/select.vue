<template>
  <div class="demo-select">
    <div class="component-title">
      <h3>Select</h3>
    </div>

    <div class="snippet-demo">
      <ui-select :value="options1" :model="selected1" defaultValue="All items" @change="onChange('selected1', $event, changeSelected2)"></ui-select>
      <ui-select :value="options2" :model="selected2" placeholder="Select..." @change="onChange('selected2', $event)"></ui-select>
    </div>
    <ui-markdown :text="code[0]"></ui-markdown>

    <ui-apidoc name="select"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
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
      options2: []
    };
  },
  methods: {
    onChange(field, option, fn) {
      this[field] = option.key;
      fn && fn(option.key);
    },
    changeSelected2(key) {
      if (key === 1) {
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
    }
  },
  created() {
    this.showCode('select');
  }
};
</script>
