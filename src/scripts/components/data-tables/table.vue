<template>
  <!-- Container -->
  <div :class="className">
    <template v-if="hasFixedCell">
      <mdc-table-frame
        class="mdc-data-table__fixed-header"
        :columns-data="columns.data"
        :offset-left="offsetLeft"
      >
        <mdc-table-header
          :selected-rows="selectedRows"
          :thead="thead"
          :row-checkbox="rowCheckbox"
          :sort-icon-align-end="sortIconAlignEnd"
          :fixed="hasFixedCell"
          :cell-style="cellStyle"
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
        :columns-data="columns.data"
        :scroll="scroll"
      >
        <mdc-table-body
          :data="data"
          :current-data="currentData"
          :selected-rows="selectedRows"
          :tbody="tbody"
          :row-checkbox="rowCheckbox"
          :selected-key="selectedKey"
          :row-id-prefix="rowIdPrefix"
          :cell-style="cellStyle"
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
        class="mdc-data-table__fixed-footer"
        :columns-data="columns.data"
        :offset-left="offsetLeft"
      >
        <mdc-table-footer
          :data="data"
          :tfoot="tfoot"
          :row-checkbox="rowCheckbox"
          :columns="columns.count"
          :cell-style="cellStyle"
        >
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
    <mdc-table-frame v-else :columns-data="columns.data">
      <mdc-table-header
        :selected-rows="selectedRows"
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
      <mdc-table-footer
        :data="data"
        :tfoot="tfoot"
        :row-checkbox="rowCheckbox"
        :columns="columns.count"
      >
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
    showProgress: {
      type: Boolean,
      default: false
    },
    fixedHeader: {
      type: Boolean,
      default: false
    },
    defaultColWidth: {
      type: Number,
      default: 0
    },
    scroll: {
      type: Object,
      default() {
        return {
          x: false,
          y: false
        };
      }
    }
  },
  data() {
    return {
      UI_TABLE,
      $table: null,
      columnsData: this.tbody,
      currentData: this.data,
      ticking: false,
      offsetLeft: 0
    };
  },
  computed: {
    className() {
      return {
        'mdc-data-table': true,
        'mdc-data-table--fixed': this.hasFixedCell,
        'mdc-data-table--fullwidth': this.fullwidth
      };
    },
    hasFixedCell() {
      return (
        this.fixedHeader ||
        this.tbody.some((cell) =>
          getType(cell) === 'object' ? cell.fixed : false
        )
      );
    },
    columns() {
      let count = this.columnsData.length;
      let data = this.tbody.map(({ colClass, width }) => {
        const colWidth = width
          ? `${width}px`
          : this.defaultColWidth
          ? `${this.defaultColWidth}px`
          : null;

        return {
          class: colClass,
          style: colWidth ? { width: colWidth } : null
        };
      });

      if (this.rowCheckbox) {
        count += 1;
        data.unshift({
          class: 'checkbox',
          style: { width: `${UI_TABLE.CHECKBOX_COL_WIDTH}px` }
        });
      }

      return {
        count,
        data
      };
    },
    cellStyle() {
      let result = [];

      let originTbody = Object.assign([], this.tbody);
      let leftFixedCell = originTbody.map(({ fixed }) => fixed === 'left');
      if (this.rowCheckbox) {
        originTbody.unshift(
          leftFixedCell.length
            ? {
                fixed: 'left',
                width: UI_TABLE.CHECKBOX_COL_WIDTH
              }
            : {}
        );
      }

      let sumWidth = 0;
      for (let index = 0, len = originTbody.length; index < len; index++) {
        let style;

        let { fixed } = originTbody[index];
        let fixedWidth = 0;
        switch (fixed) {
          case 'left':
            if (index > 0) {
              let { width } = originTbody[index - 1];
              sumWidth += width;
              fixedWidth = `${sumWidth}px`;
            }
            style = { position: 'sticky', left: fixedWidth };
            break;
          case 'right':
            if (index < len - 1) {
              sumWidth = 0;
              for (let j = index + 1; j < len; j++) {
                let { width } = originTbody[j];
                sumWidth += width;
              }
              fixedWidth = `${sumWidth}px`;
            }
            style = { position: 'sticky', right: fixedWidth };
            break;
          default:
        }

        result.push(style);
      }

      return result;
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
    },
    showProgress(val) {
      if (val) {
        this.$table.showProgress();
      } else {
        this.$table.hideProgress();
      }
    }
  },
  mounted() {
    this.$table = new MDCDataTable(this.$el);

    this.$table.listen(events.ROW_SELECTION_CHANGED, ({ detail }) => {
      let selectedRows = this.selectedRows; // NOTE: cache selected rows for pagination

      this.currentData.forEach((tbodyRowData, tbodyRowIndex) => {
        let selectedRowId = this.selectedKey
          ? tbodyRowData[this.selectedKey]
          : tbodyRowIndex;

        if (tbodyRowIndex === detail.rowIndex) {
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
        (tbodyRowData, tbodyRowIndex) => {
          return this.selectedKey
            ? tbodyRowData[this.selectedKey]
            : tbodyRowIndex;
        }
      );

      let selectedRows = [...new Set(oldSelectedRows.concat(newSelectedRows))]; // merge + unique

      this.$emit(UI_TABLE.EVENT.SELECTED, selectedRows);
    });

    this.$table.listen(events.UNSELECTED_ALL, () => {
      let oldSelectedRows = this.selectedRows; // NOTE: cache selected rows for pagination

      let newSelectedRows = this.currentData.map(
        (tbodyRowData, tbodyRowIndex) => {
          return this.selectedKey
            ? tbodyRowData[this.selectedKey]
            : tbodyRowIndex;
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

    if (this.hasFixedCell) {
      this.$refs.content.$el.addEventListener('scroll', this.handleScroll);
    }
  },
  beforeDestroy() {
    if (this.hasFixedCell) {
      this.$refs.content.$el.removeEventListener('scroll', this.handleScroll);
    }
  },
  methods: {
    handleSort({ columnId, sortValue }) {
      let newSelectedRows = [];

      if (sortValue) {
        const isNumber = this.currentData.every(
          (tbodyRowData) => getType(tbodyRowData[columnId]) === 'number'
        );

        if (sortValue === 'descending') {
          this.currentData.sort(
            isNumber
              ? (a, b) => {
                  return b[columnId] - a[columnId];
                }
              : (a, b) => {
                  return b[columnId].localeCompare(a[columnId]);
                }
          );
        } else if (sortValue === 'ascending') {
          this.currentData.sort(
            isNumber
              ? (a, b) => {
                  return a[columnId] - b[columnId];
                }
              : (a, b) => {
                  return a[columnId].localeCompare(b[columnId]);
                }
          );
        }

        let oldSelectedRows = this.selectedRows;
        if (this.selectedKey) {
          newSelectedRows = [...oldSelectedRows];
        } else {
          const tableRowCount = this.currentData.length;

          let oldSelectedIndex = 0;
          for (let index = tableRowCount - 1; index >= 0; index--) {
            if (oldSelectedRows.includes(oldSelectedIndex)) {
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
                  (tbodyRowData) =>
                    tbodyRowData[this.selectedKey] === selectedRow
                )
              : selectedRow;
            return `${this.rowIdPrefix}${rowIndex}`;
          })
          .filter((row) => row > -1);

        this.$table.setSelectedRowIds(rowIds);
      }
    },
    handleScroll(e) {
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          const offsetLeft = e.target.scrollLeft;

          if (this.offsetLeft != offsetLeft) {
            this.offsetLeft = offsetLeft;
          }

          this.ticking = false;
        });
        this.ticking = true;
      }
    }
  }
};
</script>
