<template>
  <div class="apidoc">
    <h4>{{ $t(`components.${name}`) }} API</h4>
    <ui-tabs effect position="left" :active="tab" @switched="onChange">
      <ui-panel tab="props" v-if="docs.props">
        <ui-table
          class="docs-table"
          :data="docs.props.data"
          :thead="docs.props.thead"
          :tbody="docs.props.tbody">
        </ui-table>
      </ui-panel>
      <ui-panel tab="slots" v-if="docs.slots">
        <ui-table
          class="docs-table"
          :data="docs.slots.data"
          :thead="docs.slots.thead"
          :tbody="docs.slots.tbody">
        </ui-table>
      </ui-panel>
      <ui-panel tab="events" v-if="docs.events">
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
export default {
  name: 'ui-apidoc',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      api: {},
      tab: 0
    };
  },
  computed: {
    docs() {
      let result = {};
      let types = ['props', 'slots', 'events'];

      for (let value of types) {
        if (this.api[value].length) {
          result[value] = {
            data: this.api[value],
            thead: this.$docs[value].thead,
            tbody: this.$docs[value].tbody
          };
        }
      }

      return result;
    }
  },
  methods: {
    onChange(tab) {
      this.tab = tab;
    }
  },
  created() {
    this.api = require(`../apidocs/${this.name}.json`);
  }
};
</script>
