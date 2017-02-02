<template>
  <div class="demo-loading">
    <div class="component-title">
      <h3>Loading</h3>
      <p>Indicate loading and progress states.</p>
    </div>

    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-loading active></ui-loading>
      </div>
    </div>
    <ui-markdown :text="code[0]"></ui-markdown>

    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-loading :type="1" active></ui-loading>
      </div>
    </div>
    <ui-markdown :text="code[1]"></ui-markdown>

    <h4>Loading API</h4>
    <ui-tabs effect position="left" :active="docs.tab" @switched="onChange">
      <ui-panel tab="props">
        <ui-table
          class="docs-table"
          :data="docs.props.data"
          :thead="docs.props.thead"
          :tbody="docs.props.tbody">
        </ui-table>
      </ui-panel>
      <ui-panel tab="slots">
        <ui-table
          class="docs-table"
          :data="docs.slots.data"
          :thead="docs.slots.thead"
          :tbody="docs.slots.tbody">
        </ui-table>
      </ui-panel>
    </ui-tabs>
  </div>
</template>

<script>
import loadingDocs from '../apidocs/loading';

export default {
  data() {
    return {
      demoCount: 2,
      code: [],
      docs: {
        tab: 0,
        props: {
          data: loadingDocs.props,
          thead: this.$docs.props.thead,
          tbody: this.$docs.props.tbody
        },
        slots: {
          data: loadingDocs.slots,
          thead: this.$docs.slots.thead,
          tbody: this.$docs.slots.tbody
        }
      }
    };
  },
  methods: {
    onChange(tab) {
      this.docs.tab = tab;
    }
  },
  created() {
    for (let i = 1; i <= this.demoCount; i++) {
      let code = require(`../snippets/loading/demo${i}.md`);
      this.code.push(code);
    }
  }
};
</script>

