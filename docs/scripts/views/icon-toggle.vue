<template>
  <div class="demo-icon-toggle">
    <div class="component-title">
      <h3>Icon Toggle</h3>
    </div>

    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-icon-toggle value="X" :model="icons" @change="onIconsChange">X</ui-icon-toggle>
        <ui-icon-toggle value="Y" :model="icons" @change="onIconsChange">Y</ui-icon-toggle>
        <ui-icon-toggle value="Z" :model="icons" @change="onIconsChange">Z</ui-icon-toggle>
      </div>
    </div>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>Icon Toggle API</h4>
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
import iconToggleDocs from '../apidocs/icon-toggle';

export default {
  data() {
    return {
      icons: [],
      demoCount: 1,
      code: [],
      docs: {
        tab: 0,
        props: {
          data: iconToggleDocs.props,
          thead: this.$docs.props.thead,
          tbody: this.$docs.props.tbody
        },
        slots: {
          data: iconToggleDocs.slots,
          thead: this.$docs.slots.thead,
          tbody: this.$docs.slots.tbody
        },
        events: {
          data: iconToggleDocs.events,
          thead: this.$docs.events.thead,
          tbody: this.$docs.events.tbody
        }
      }
    };
  },
  methods: {
    onIconsChange(val) {
      this.icons = val;
    },
    onChange(tab) {
      this.docs.tab = tab;
    }
  },
  created() {
    for (let i = 1; i <= this.demoCount; i++) {
      let code = require(`../snippets/icon-toggle/demo${i}.md`);
      this.code.push(code);
    }
  }
};
</script>

<style>
.mdl-icon-toggle.is-checked .mdl-icon-toggle__label {
  color: red;
}
</style>
