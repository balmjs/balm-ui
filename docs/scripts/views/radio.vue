<template>
  <div class="docs-radio">
    <div class="component-title">
      <h3>Radio button</h3>
    </div>

    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-radio name="sex" value="M" :model="gender" @change="chooseSex">Male</ui-radio>
      </div>
      <div class="snippet-demo">
        <ui-radio name="sex" value="F" :model="gender" @change="chooseSex">Female</ui-radio>
      </div>
    </div>
    <ui-button @click.native="onWatchSex('M')">choose Male</ui-button>
    <ui-button @click.native="onWatchSex('F')">choose Female</ui-button>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>Radio button API</h4>
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
import radioDocs from '../apidocs/radio';

export default {
  data() {
    return {
      gender: '',
      demoCount: 1,
      code: [],
      docs: {
        tab: 0,
        props: {
          data: radioDocs.props,
          thead: this.$docs.props.thead,
          tbody: this.$docs.props.tbody
        },
        slots: {
          data: radioDocs.slots,
          thead: this.$docs.slots.thead,
          tbody: this.$docs.slots.tbody
        },
        events: {
          data: radioDocs.events,
          thead: this.$docs.events.thead,
          tbody: this.$docs.events.tbody
        }
      }
    };
  },
  methods: {
    chooseSex(val) {
      this.gender = val;
    },
    onWatchSex(val) {
      this.gender = val;
    },
    onChange(tab) {
      this.docs.tab = tab;
    }
  },
  created() {
    for (let i = 1; i <= this.demoCount; i++) {
      let code = require(`../snippets/radio/demo${i}.md`);
      this.code.push(code);
    }
  }
};
</script>
