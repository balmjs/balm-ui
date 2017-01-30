<template>
  <div class="docs-checkbox">
    <div class="component-title">
      <h3>Checkbox button</h3>
    </div>

    <div class="snippet-group">
      <div class="snippet-demo" v-for="num in [1, 2, 3]">
        <ui-checkbox :value="num" :model="numberOptions" @change="onChangeNumber">Option {{ num }}</ui-checkbox>
      </div>
    </div>
    <ui-button @click.native="onWatchNumber([1, 2])">choose 1,2</ui-button>
    <ui-button @click.native="onWatchNumber([1, 3])">choose 1,3</ui-button>
    <ui-button @click.native="onWatchNumber([2, 3])">choose 2,3</ui-button>

    <ui-markdown :text="code[0]"></ui-markdown>

    <div class="snippet-group">
      <div class="snippet-demo" v-for="str in ['A', 'B', 'C']">
        <ui-checkbox :value="str" :model="stringOptions" @change="onChangeString">Option {{ str }}</ui-checkbox>
      </div>
    </div>
    <ui-button @click.native="onWatchString(['A', 'B'])">choose A,B</ui-button>
    <ui-button @click.native="onWatchString(['A', 'C'])">choose A,C</ui-button>
    <ui-button @click.native="onWatchString(['B', 'C'])">choose B,C</ui-button>

    <h4>Checkbox API</h4>
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
import checkboxDocs from '../apidocs/checkbox';

export default {
  data() {
    return {
      numberOptions: [],
      stringOptions: [],
      demoCount: 1,
      code: [],
      docs: {
        tab: 0,
        props: {
          data: checkboxDocs.props,
          thead: this.$docs.props.thead,
          tbody: this.$docs.props.tbody
        },
        slots: {
          data: checkboxDocs.slots,
          thead: this.$docs.slots.thead,
          tbody: this.$docs.slots.tbody
        },
        events: {
          data: checkboxDocs.events,
          thead: this.$docs.events.thead,
          tbody: this.$docs.events.tbody
        }
      }
    };
  },
  methods: {
    onChange(tab) {
      this.docs.tab = tab;
    },
    onChangeNumber(val) {
      this.numberOptions = val;
    },
    onChangeString(val) {
      this.stringOptions = val;
    },
    onWatchNumber(val) {
      this.numberOptions = val;
    },
    onWatchString(val) {
      this.stringOptions = val;
    }
  },
  created() {
    for (let i = 1; i <= this.demoCount; i++) {
      let code = require(`../snippets/checkbox/demo${i}.md`);
      this.code.push(code);
    }
  }
};
</script>
