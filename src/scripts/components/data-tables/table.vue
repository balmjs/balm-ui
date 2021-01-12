<template>
  <!-- Container -->
  <div :class="className">
    <template v-if="hasFixedCell">
      <mdc-table-frame
        class="mdc-data-table__fixed-header"
        :columns-data="columnsData"
      >
        <mdc-table-header
          :thead="thead"
          :tbody="tbody"
          :row-checkbox="rowCheckbox"
          :sort-icon-align-end="sortIconAlignEnd"
          :fixed="hasFixedCell"
        >
          <slot v-for="(_, name) in $slots" :slot="name" :name="name"></slot>
          <template
            v-for="(_, name) in $scopedSlots"
            :slot="name"
            slot-scope="slotData"
          >
            <slot :name="name" v-bind="slotData"></slot>
          </template>
        </mdc-table-header>
      </mdc-table-frame>
      <mdc-table-frame
        ref="content"
        class="mdc-data-table__fixed-body"
        :columns-data="columnsData"
      >
        <mdc-table-body
          :data="data"
          :current-data="currentData"
          :selected-rows="selectedRows"
          :tbody="tbody"
          :row-checkbox="rowCheckbox"
          :selected-key="selectedKey"
          :row-id-prefix="rowIdPrefix"
        >
          <slot v-for="(_, name) in $slots" :slot="name" :name="name"></slot>
          <template
            v-for="(_, name) in $scopedSlots"
            :slot="name"
            slot-scope="slotData"
          >
            <slot :name="name" v-bind="slotData"></slot>
          </template>
        </mdc-table-body>
      </mdc-table-frame>
      <mdc-table-frame
        class="mdc-data-table__footer"
        :columns-data="columnsData"
      >
        <mdc-table-footer :data="data" :tfoot="tfoot" :columns="columns">
          <slot v-for="(_, name) in $slots" :slot="name" :name="name"></slot>
          <template
            v-for="(_, name) in $scopedSlots"
            :slot="name"
            slot-scope="slotData"
          >
            <slot :name="name" v-bind="slotData"></slot>
          </template>
        </mdc-table-footer>
      </mdc-table-frame>
    </template>
    <mdc-table-frame v-else :columns-data="columnsData">
      <mdc-table-header
        :thead="thead"
        :row-checkbox="rowCheckbox"
        :sort-icon-align-end="sortIconAlignEnd"
      >
        <slot v-for="(_, name) in $slots" :slot="name" :name="name"></slot>
        <template
          v-for="(_, name) in $scopedSlots"
          :slot="name"
          slot-scope="slotData"
        >
          <slot :name="name" v-bind="slotData"></slot>
        </template>
      </mdc-table-header>
      <mdc-table-body
        :data="data"
        :current-data="currentData"
        :selected-rows="selectedRows"
        :tbody="tbody"
        :row-checkbox="rowCheckbox"
        :selected-key="selectedKey"
        :row-id-prefix="rowIdPrefix"
      >
        <slot v-for="(_, name) in $slots" :slot="name" :name="name"></slot>
        <template
          v-for="(_, name) in $scopedSlots"
          :slot="name"
          slot-scope="slotData"
        >
          <slot :name="name" v-bind="slotData"></slot>
        </template>
      </mdc-table-body>
      <mdc-table-footer :data="data" :tfoot="tfoot" :columns="columns">
        <slot v-for="(_, name) in $slots" :slot="name" :name="name"></slot>
        <template
          v-for="(_, name) in $scopedSlots"
          :slot="name"
          slot-scope="slotData"
        >
          <slot :name="name" v-bind="slotData"></slot>
        </template>
      </mdc-table-footer>
    </mdc-table-frame>

    <mdc-table-progress></mdc-table-progress>

    <slot></slot>
  </div>
</template>

<script>
import { MDCDataTable } from '../../../material-components-web/data-table';
import { events } from '../../../material-components-web/data-table/constants';
import MdcTableFrame from './mdc-table-frame';
import MdcTableHeader from './mdc-table-header';
import MdcTableBody from './mdc-table-body';
import MdcTableFooter from './mdc-table-footer';
import MdcTableProgress from './mdc-table-progress';
import UI_TABLE from './constants';
import getType from '../../utils/typeof';

export default {
  name: 'UiTable',
  components: {
    MdcTableFrame,
    MdcTableHeader,
    MdcTableBody,
    MdcTableFooter,
    MdcTableProgress
  },
  model: {
    prop: 'selectedRows',
    event: UI_TABLE.EVENT.SELECTED
  },
  props: {
    // States
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    selectedRows: {
      type: Array,
      default() {
        return [];
      }
    },
    // UI attributes
    thead: {
      type: Array,
      default() {
        return [];
      }
    },
    tbody: {
      type: Array,
      default() {
        return [];
      }
    },
    tfoot: {
      type: Array,
      default() {
        return [];
      }
    },
    fullwidth: {
      type: Boolean,
      default: false
    },
    rowCheckbox: {
      type: Boolean,
      default: false
    },
    selectedKey: {
      type: [Boolean, String],
      default: false
    },
    rowIdPrefix: {
      type: String,
      default: ''
    },
    sortIconAlignEnd: {
      type: Boolean,
      default: false
    },
    // stickyHeader: {
    //   type: Boolean,
    //   default: false
    // },
    showProgress: {
      type: Boolean,
      default: false
    },
    fixedHeader: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      UI_TABLE,
      $table: null,
      columnsData: this.tbody,
      currentData: this.data
    };
  },
  computed: {
    className() {
      return {
        'mdc-data-table': true,
        'mdc-data-table--fullwidth': this.fullwidth
        // 'mdc-data-table--sticky-header': this.stickyHeader
      };
    },
    hasFixedCell() {
      return this.fixedHeader || this.tbody.some((cell) => cell.fixed);
    },
    columns() {
      return this.rowCheckbox
        ? this.columnsData.length + this.columnsData.length
        : this.columnsData.length;
    }
  },
  watch: {
    data(val) {
      this.currentData = val;

      this.$nextTick(() => {
        this.$table.hideProgress();
        this.$table.layout();
        this.initSelectedRows();
      });
    }
  },
  mounted() {
    this.$table = new MDCDataTable(this.$el);

    this.$table.listen(events.ROW_SELECTION_CHANGED, ({ detail }) => {
      let selectedRows = this.selectedRows; // NOTE: cache selected rows for pagination

      this.currentData.forEach((tbodyData, tbodyDataIndex) => {
        let selectedRowId = this.selectedKey
          ? tbodyData[this.selectedKey]
          : tbodyDataIndex;

        if (tbodyDataIndex === detail.rowIndex) {
          // checked
          if (detail.selected) {
            selectedRows.push(selectedRowId);
          } else {
            // unchecked
            selectedRows.splice(
              selectedRows.findIndex(
                (selectedKey) => selectedKey === selectedRowId
              ),
              1
            );
          }
        }
      });

      this.$emit(UI_TABLE.EVENT.SELECTED, selectedRows);
    });

    this.$table.listen(events.SELECTED_ALL, () => {
      let oldSelectedRows = this.selectedRows; // NOTE: cache selected rows for pagination

      let newSelectedRows = this.currentData.map(
        (tbodyData, tbodyDataIndex) => {
          return this.selectedKey
            ? tbodyData[this.selectedKey]
            : tbodyDataIndex;
        }
      );

      let selectedRows = [...new Set(oldSelectedRows.concat(newSelectedRows))]; // merge + unique

      this.$emit(UI_TABLE.EVENT.SELECTED, selectedRows);
    });

    this.$table.listen(events.UNSELECTED_ALL, () => {
      let oldSelectedRows = this.selectedRows; // NOTE: cache selected rows for pagination

      let newSelectedRows = this.currentData.map(
        (tbodyData, tbodyDataIndex) => {
          return this.selectedKey
            ? tbodyData[this.selectedKey]
            : tbodyDataIndex;
        }
      );

      // Difference set
      let a = new Set(oldSelectedRows);
      let b = new Set(newSelectedRows);
      let selectedRows = Array.from(new Set([...a].filter((x) => !b.has(x))));

      this.$emit(UI_TABLE.EVENT.SELECTED, selectedRows);
    });

    this.$table.listen(events.SORTED, ({ detail }) => {
      // TODO: multi-row header is unsupported
      this.handleSort(detail);
    });

    if (this.selectedRows.length) {
      this.initSelectedRows();
    }

    if (this.showProgress) {
      this.$table.showProgress();
    }

    this.$refs.content.$el.style.maxHeight = '300px';
    this.$refs.content.$el.querySelector('table').style.width = '1650px';
  },
  methods: {
    handleSort({ columnId, sortValue }) {
      let newSelectedRows = [];

      if (sortValue) {
        const isNumber = this.currentData.every(
          (data) => getType(data[columnId]) === 'number'
        );

        if (sortValue === 'descending') {
          if (isNumber) {
            this.currentData.sort((a, b) => {
              return b[columnId] - a[columnId];
            });
          } else {
            this.currentData.sort((a, b) => {
              return b[columnId].localeCompare(a[columnId]);
            });
          }
        } else if (sortValue === 'ascending') {
          if (isNumber) {
            this.currentData.sort((a, b) => {
              return a[columnId] - b[columnId];
            });
          } else {
            this.currentData.sort((a, b) => {
              return a[columnId].localeCompare(b[columnId]);
            });
          }
        }

        let oldSelectedIndex = 0;
        let tableRowCount = this.currentData.length;
        if (this.selectedKey) {
          newSelectedRows = [...this.selectedRows];
        } else {
          for (let index = tableRowCount - 1; index >= 0; index--) {
            if (this.selectedRows.includes(oldSelectedIndex)) {
              newSelectedRows.push(index);
            }
            oldSelectedIndex++;
          }
          newSelectedRows.sort();
        }
      }

      this.$emit(UI_TABLE.EVENT.SELECTED, newSelectedRows);
    },
    initSelectedRows() {
      if (this.rowCheckbox && this.currentData.length) {
        let rowIds = this.selectedRows
          .map((selectedRow) => {
            let rowIndex = this.selectedKey
              ? this.currentData.findIndex(
                  (tbodyData) => tbodyData[this.selectedKey] === selectedRow
                )
              : selectedRow;
            return `${this.rowIdPrefix}${rowIndex}`;
          })
          .filter((row) => row > -1);

        this.$table.setSelectedRowIds(rowIds);
      }
    }
  }
};
</script>
