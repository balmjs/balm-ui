<template>
  <!-- Container -->
  <div :class="className">
    <div class="mdc-data-table__table-container">
      <table class="mdc-data-table__table" :aria-label="caption">
        <caption v-if="caption">{{ caption }}</caption>
        <colgroup v-if="colgroup">
          <template v-for="(colValue, colKey) in dataColumns" :key="colKey">
            <col :class="`col-${colValue}`" />
          </template>
        </colgroup>
        <!-- Column header -->
        <thead v-if="theadData.length">
          <tr
            v-for="(theadRow, theadRowIndex) in theadData"
            :key="`thead-row-${theadRowIndex}`"
            class="mdc-data-table__header-row"
          >
            <template
              v-for="(theadCell, theadCellIndex) in theadRow"
              :key="`thead-cell-${theadCellIndex}`"
            >
              <th
                :class="theadCellClassName(theadCell)"
                :colspan="theadCell[T_CELL.COLSPAN] || null"
                :rowspan="theadCell[T_CELL.ROWSPAN] || null"
                role="columnheader"
                :data-column-id="theadCell.columnId"
                :aria-sort="getSort(theadCell)"
              >
                <!-- Column header row checkbox -->
                <mdc-checkbox
                  v-if="theadCell[T_CELL.CHECKBOX] && tbodyData.length"
                  :class="'mdc-data-table__header-row-checkbox'"
                ></mdc-checkbox>
                <template v-else>
                  <!-- With sort button -->
                  <div class="mdc-data-table__header-cell-wrapper">
                    <template v-if="theadCell.sort">
                      <template v-if="sortIconAlignEnd">
                        <div
                          class="mdc-data-table__header-cell-label"
                          v-text="theadCell[T_CELL.VALUE]"
                        ></div>
                        <mdc-icon-button
                          class="mdc-data-table__sort-icon-button"
                          :icon="UI_TABLE.SORTING.ICON"
                        ></mdc-icon-button>
                      </template>
                      <template v-else>
                        <mdc-icon-button
                          class="mdc-data-table__sort-icon-button"
                          :icon="UI_TABLE.SORTING.ICON"
                        ></mdc-icon-button>
                        <div class="mdc-data-table__header-cell-label">
                          <slot v-if="theadCell[T_CELL.SLOT]" :name="theadCell[T_CELL.SLOT]"></slot>
                          <template v-else>{{ theadCell[T_CELL.VALUE] }}</template>
                        </div>
                      </template>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </template>
                    <!-- Column header name -->
                    <template v-else>
                      <slot v-if="theadCell[T_CELL.SLOT]" :name="theadCell[T_CELL.SLOT]"></slot>
                      <template v-else>{{ theadCell[T_CELL.VALUE] }}</template>
                    </template>
                  </div>
                </template>
              </th>
            </template>
          </tr>
        </thead>
        <!-- Rows -->
        <tbody class="mdc-data-table__content">
          <template v-if="tbodyData.length">
            <tr
              v-for="(tbodyRow, tbodyRowIndex) in tbodyData"
              :key="`tbody-row-${tbodyRowIndex}`"
              :class="[
                'mdc-data-table__row',
                {
                  'mdc-data-table__row--selected': tbodyRow[0][T_CELL.SELECTED]
                }
              ]"
              :data-row-id="tbodyRow[0][T_CELL.ROW_ID] || null"
              :aria-selected="tbodyRow[0][T_CELL.SELECTED] || null"
            >
              <template
                v-for="(tbodyCell, tbodyCellIndex) in tbodyRow"
                :key="`tbody-cell-${tbodyCellIndex}`"
              >
                <td :class="cellClassName(tbodyCell)">
                  <!-- Row checkboxes -->
                  <mdc-checkbox
                    v-if="tbodyCell[T_CELL.CHECKBOX]"
                    :class="'mdc-data-table__row-checkbox'"
                  ></mdc-checkbox>
                  <!-- Data / Actions -->
                  <template v-else>
                    <slot
                      v-if="tbodyCell[T_CELL.SLOT]"
                      :name="tbodyCell[T_CELL.SLOT]"
                      :data="currentData[tbodyRowIndex]"
                    ></slot>
                    <template v-else>{{ tbodyCell[T_CELL.VALUE] }}</template>
                  </template>
                </td>
              </template>
            </tr>
          </template>
          <tr v-else class="mdc-data-table__row">
            <td class="mdc-data-table__cell mdc-data-table__cell--no-data" :colspan="dataColumns">
              <slot name="no-data">{{ noData }}</slot>
            </td>
          </tr>
        </tbody>
        <!-- Footers -->
        <tfoot v-if="tfootData.length">
          <tr class="mdc-data-table__footer-row">
            <td
              v-for="(tfootCell, tfootCellIndex) in tfootData"
              :key="tfootCellIndex"
              :class="tfootCellClassName(tfootCell)"
            >
              <slot
                v-if="tfootCell[T_CELL.SLOT]"
                :name="tfootCell[T_CELL.SLOT]"
                :data="tfootCell[T_CELL.VALUE]"
              ></slot>
              <template v-else>{{ tfootCell[T_CELL.VALUE] }}</template>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    <!-- <table-progress></table-progress> -->
    <slot></slot>
  </div>
</template>

<script>
import { MDCDataTable } from '../../../material-components-web/data-table';
import { events } from '../../../material-components-web/data-table/constants';
import MdcCheckbox from '../selection-controls/mdc-checkbox';
import MdcIconButton from '../buttons/mdc-icon-button';
// import MdcTableProgress from './mdc-table-progress';
import tableMixin from '../../mixins/table';
import theadMixin from '../../mixins/thead';
import tbodyMixin from '../../mixins/tbody';
import tfootMixin from '../../mixins/tfoot';
import UI_TABLE from './constants';

export default {
  name: 'UiTable',
  components: {
    MdcCheckbox,
    MdcIconButton
    // MdcTableProgress
  },
  mixins: [tableMixin, theadMixin, tbodyMixin, tfootMixin],
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
    caption: {
      type: [String, null],
      default: null
    },
    colgroup: {
      type: Boolean,
      default: false
    },
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
    columns: {
      type: Number,
      default: 0
    },
    noData: {
      type: String,
      default: 'No Data'
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
    stickyHeader: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      UI_TABLE,
      T_CELL: UI_TABLE.CELL,
      $table: null,
      dataColumns: 1,
      currentData: this.data
    };
  },
  computed: {
    className() {
      return {
        'mdc-data-table': true,
        'mdc-data-table--fullwidth': this.fullwidth,
        'mdc-data-table--sticky-header': this.stickyHeader
      };
    }
  },
  watch: {
    data(val) {
      this.currentData = val;

      this.$nextTick(() => {
        this.$table.layout();
        this.initSelectedRows();
      });
    }
  },
  created() {
    this.dataColumns = this.tbody.length;

    if (this.columns) {
      this.dataColumns = this.columns; // Manual set columns
    }

    if (this.rowCheckbox) {
      this.dataColumns += 1;
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
  },
  methods: {
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
