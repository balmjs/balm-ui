<template>
  <div class="demo-grid">
    <div class="component-title">
      <h3>Grid</h3>
    </div>

    <div class="snippet-grid">
      <ui-grid>
        <ui-cell v-for="i in [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]" :col="i">{{ i }}</ui-cell>
      </ui-grid>
      <ui-grid>
        <ui-cell v-for="i in [4, 4, 4]" :col="i">{{ i }}</ui-cell>
      </ui-grid>
      <ui-grid>
        <ui-cell col="6">6</ui-cell>
        <ui-cell col="4">4</ui-cell>
        <ui-cell col="2">2</ui-cell>
      </ui-grid>
      <ui-grid>
        <ui-cell :col="{col:6, tablet:8}">6 (8 tablet)</ui-cell>
        <ui-cell :col="{col:4, tablet:6}">4 (6 tablet)</ui-cell>
        <ui-cell :col="{col:2, phone:4}">2 (4 phone)</ui-cell>
      </ui-grid>
    </div>
    <ui-code language="html" :code="code1.html"></ui-code>

    <h4>Grid API</h4>
    <ui-tabs effect position="left" :active="grid.tab" @switched="onChangeGrid">
      <ui-panel tab="props">
        <ui-table
          class="docs-table"
          :data="grid.docs.props.data"
          :thead="grid.docs.props.thead"
          :tbody="grid.docs.props.tbody">
        </ui-table>
      </ui-panel>
      <ui-panel tab="slots">
        <ui-table
          class="docs-table"
          :data="grid.docs.slots.data"
          :thead="grid.docs.slots.thead"
          :tbody="grid.docs.slots.tbody">
        </ui-table>
      </ui-panel>
    </ui-tabs>

    <h4>Cell API</h4>
    <ui-tabs effect position="left" :active="cell.tab" @switched="onChangeCell">
      <ui-panel tab="props">
        <ui-table
          class="docs-table"
          :data="cell.docs.props.data"
          :thead="cell.docs.props.thead"
          :tbody="cell.docs.props.tbody">
        </ui-table>
      </ui-panel>
      <ui-panel tab="slots">
        <ui-table
          class="docs-table"
          :data="cell.docs.slots.data"
          :thead="cell.docs.slots.thead"
          :tbody="cell.docs.slots.tbody">
        </ui-table>
      </ui-panel>
    </ui-tabs>
  </div>
</template>

<script>
import gridDocs from '../apidocs/grid';
import cellDocs from '../apidocs/cell';

export default {
  data() {
    return {
      code1: {
        html: require('../snippets/grid/demo1-template.html')
      },
      grid: {
        tab: 0,
        docs: {
          props: {
            data: gridDocs.props,
            thead: this.$docs.props.thead,
            tbody: this.$docs.props.tbody
          },
          slots: {
            data: gridDocs.slots,
            thead: this.$docs.slots.thead,
            tbody: this.$docs.slots.tbody
          }
        }
      },
      cell: {
        tab: 0,
        docs: {
          props: {
            data: cellDocs.props,
            thead: this.$docs.props.thead,
            tbody: this.$docs.props.tbody
          },
          slots: {
            data: cellDocs.slots,
            thead: this.$docs.slots.thead,
            tbody: this.$docs.slots.tbody
          }
        }
      }
    };
  },
  methods: {
    onChangeGrid(tab) {
      this.grid.tab = tab;
    },
    onChangeCell(tab) {
      this.cell.tab = tab;
    }
  }
};
</script>

<style scoped>
.demo-grid .mdl-cell {
  box-sizing: border-box;
  background-color: #BDBDBD;
  height: 200px;
  padding-left: 8px;
  padding-top: 4px;
  color: white;
}

.snippet-grid .mdl-grid:first-of-type .mdl-cell {
  height: 50px;
}
</style>
