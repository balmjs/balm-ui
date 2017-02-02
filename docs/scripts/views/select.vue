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

    <h4>Select API</h4>
    <ui-tabs effect position="left" :active="docs.tab" @switched="onChange">
      <ui-panel tab="props">
        <ui-table
          class="docs-table"
          :data="docs.props.data"
          :thead="docs.props.thead"
          :tbody="docs.props.tbody">
        </ui-table>
      </ui-panel>
      <ui-panel tab="events">
        <ui-table
          class="docs-table"
          :data="docs.events.data"
          :thead="docs.events.thead"
          :tbody="docs.events.tbody">
        </ui-table>
      </ui-panel>
    </ui-tabs>
  </div>
</template>

<script>
import selectDocs from '../apidocs/select';

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
      code: [],
      docs: {
        tab: 0,
        props: {
          data: selectDocs.props,
          thead: this.$docs.props.thead,
          tbody: this.$docs.props.tbody
        },
        events: {
          data: selectDocs.events,
          thead: this.$docs.events.thead,
          tbody: this.$docs.events.tbody
        }
      }
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
    },
    onChange(tab) {
      this.docs.tab = tab;
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
