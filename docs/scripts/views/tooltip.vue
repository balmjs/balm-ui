<template>
  <div class="demo-tooltip">
    <div class="component-title">
      <h3>Tooltip</h3>
      <p>Useful information on hover.</p>
    </div>

    <h4>{{ $t('tooltip.basic') }}</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-tooltip target="text-1" tips="tips-1"></ui-tooltip>
      </div>
      <div class="snippet-demo">
        <ui-tooltip target="text-2" tips="tips-2"></ui-tooltip>
      </div>
    </div>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>{{ $t('tooltip.custom') }}</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-tooltip>
          <template slot="target">
            <ui-badge class="material-icons" overlap value="5">email</ui-badge>
          </template>
          <span>new message</span>
        </ui-tooltip>
      </div>
    </div>
    <ui-markdown :text="code[1]"></ui-markdown>

    <h4>Tooltip API</h4>
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
import tooltipDocs from '../apidocs/tooltip';

export default {
  data() {
    return {
      demoCount: 2,
      code: [],
      docs: {
        tab: 0,
        props: {
          data: tooltipDocs.props,
          thead: this.$docs.props.thead,
          tbody: this.$docs.props.tbody
        },
        slots: {
          data: tooltipDocs.slots,
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
      let code = require(`../snippets/tooltip/demo${i}.md`);
      this.code.push(code);
    }
  }
};
</script>
