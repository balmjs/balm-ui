<template>
  <!-- Container -->
  <div :class="className">
    <table class="mdc-data-table__table" :aria-label="caption">
      <caption v-if="caption">
        {{
          caption
        }}
      </caption>
      <colgroup v-if="colgroup">
        <col
          v-for="(colValue, colKey) in dataColumns"
          :key="colKey"
          :class="`col-${colValue}`"
        />
      </colgroup>
      <!-- Column header -->
      <thead v-if="theadData.length">
        <tr
          v-for="(theadRow, theadRowIndex) in theadData"
          :key="`thead-row-${theadRowIndex}`"
          class="mdc-data-table__header-row"
        >
          <template v-for="(theadCell, theadCellIndex) in theadRow">
            <th
              :key="`thead-cell-${theadCellIndex}`"
              :class="theadCellClassName(theadCell)"
              :colspan="theadCell[T_CELL.COLSPAN] || null"
              :rowspan="theadCell[T_CELL.ROWSPAN] || null"
            >
              <!-- Column header row checkbox -->
              <ui-checkbox
                v-if="theadCell[T_CELL.CHECKBOX]"
                :class="'mdc-data-table__header-row-checkbox'"
              ></ui-checkbox>
              <template v-else>
                <div>
                  <!-- Sort button -->
                  <template v-if="!sortIconAlignEnd">
                    <span
                      v-if="theadCell.sort === UI_TABLE.SORTING.ASC"
                      @click="handleSort(theadCell)"
                    >
                      <slot name="before-asc">
                        <i :class="UI_GLOBAL.cssClasses.icon">arrow_upward</i>
                      </slot>
                    </span>
                    <span
                      v-if="theadCell.sort === UI_TABLE.SORTING.DESC"
                      @click="handleSort(theadCell)"
                    >
                      <slot name="before-desc">
                        <i :class="UI_GLOBAL.cssClasses.icon">arrow_downward</i>
                      </slot>
                    </span>
                  </template>
                  <!-- Column header names -->
                  <span>{{ theadCell[T_CELL.VALUE] }}</span>
                  <!-- Sort button -->
                  <template v-if="sortIconAlignEnd">
                    <span
                      v-if="theadCell.sort === UI_TABLE.SORTING.ASC"
                      @click="handleSort(theadCell)"
                    >
                      <slot name="after-asc">
                        <i :class="UI_GLOBAL.cssClasses.icon">arrow_upward</i>
                      </slot>
                    </span>
                    <span
                      v-if="theadCell.sort === UI_TABLE.SORTING.DESC"
                      @click="handleSort(theadCell)"
                    >
                      <slot name="after-desc">
                        <i :class="UI_GLOBAL.cssClasses.icon">arrow_downward</i>
                      </slot>
                    </span>
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
              { 'mdc-data-table__row--selected': tbodyRow[0][T_CELL.SELECTED] }
            ]"
            :data-row-id="tbodyRow[0][T_CELL.ROW_ID] || null"
            :aria-selected="tbodyRow[0][T_CELL.SELECTED] || null"
          >
            <template v-for="(tbodyCell, tbodyCellIndex) in tbodyRow">
              <td
                :key="`tbody-cell-${tbodyCellIndex}`"
                :class="cellClassName(tbodyCell)"
              >
                <!-- Row checkboxes -->
                <ui-checkbox
                  v-if="tbodyCell[T_CELL.CHECKBOX]"
                  :class="'mdc-data-table__row-checkbox'"
                ></ui-checkbox>
                <!-- Actions -->
                <slot
                  v-else-if="tbodyCell[T_CELL.ACTIONS]"
                  :name="tbodyCell[T_CELL.ACTIONS]"
                  :data="getRowData(tbodyRow)"
                ></slot>
                <!-- Data -->
                <template v-else>
                  <slot
                    v-if="tbodyCell[T_CELL.SLOT]"
                    :name="tbodyCell[T_CELL.SLOT]"
                    :data="getRowData(tbodyRow)"
                  ></slot>
                  <template v-else>{{ tbodyCell[T_CELL.VALUE] }}</template>
                </template>
              </td>
            </template>
          </tr>
        </template>
        <tr v-else class="mdc-data-table__row">
          <td
            class="mdc-data-table__cell mdc-data-table__cell--no-data"
            :colspan="dataColumns"
          >
            {{ noData }}
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
</template>

<script>
import { MDCDataTable } from '@material/data-table';
import UiCheckbox from '../selection-controls/checkbox';
import tableMixin from '../../mixins/table';
import theadMixin from '../../mixins/thead';
import tbodyMixin from '../../mixins/tbody';
import tfootMixin from '../../mixins/tfoot';
import UI_GLOBAL from '../../config/constants';
import UI_TABLE from './constants';

export default {
  name: 'ui-table',
  components: {
    UiCheckbox
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
    caption: String,
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
    columns: Number,
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
    }
  },
  data() {
    return {
      UI_GLOBAL,
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
        'mdc-data-table--fullwidth': this.fullwidth
      };
    },
    withActions() {
      let lastCell = this.tbody.length ? this.tbody[this.tbody.length - 1] : {};
      return lastCell[this.T_CELL.SLOT];
    }
  },
  watch: {
    data(val) {
      this.currentData = val;

      this.$nextTick(() => {
        this.$table.layout();

        if (this.selectedRows.length) {
          let rowIds = this.selectedRows.map(selectedRow => {
            let rowIndex = this.selectedKey
              ? this.currentData.findIndex(
                  tbodyData => tbodyData[this.selectedKey] === selectedRow
                )
              : selectedRow;
            return `${this.rowIdPrefix}${rowIndex}`;
          });
          this.$table.setSelectedRowIds(rowIds);
        }
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

    if (this.withActions) {
      this.dataColumns += 1;
    }
  },
  mounted() {
    this.$table = new MDCDataTable(this.$el);

    this.$table.listen('MDCDataTable:rowSelectionChanged', ({ detail }) => {
      let selectedRows = [];

      this.currentData.forEach((tbodyData, tbodyDataIndex) => {
        let selectedRowId = this.selectedKey
          ? tbodyData[this.selectedKey]
          : tbodyDataIndex;

        // For old selectedRows
        if (this.selectedRows.includes(selectedRowId)) {
          let selected = !(
            tbodyDataIndex === detail.rowIndex && !detail.selected
          );
          selected && selectedRows.push(selectedRowId);
        }

        // For new selectedRow
        if (tbodyDataIndex === detail.rowIndex && detail.selected) {
          selectedRows.push(selectedRowId);
        }
      });

      this.$emit(UI_TABLE.EVENT.SELECTED, selectedRows);
    });

    this.$table.listen('MDCDataTable:selectedAll', () => {
      let selectedRows = this.currentData.map((tbodyData, tbodyDataIndex) => {
        return this.selectedKey ? tbodyData[this.selectedKey] : tbodyDataIndex;
      });

      this.$emit(UI_TABLE.EVENT.SELECTED, selectedRows);
    });

    this.$table.listen('MDCDataTable:unselectedAll', () => {
      this.$emit(UI_TABLE.EVENT.SELECTED, []);
    });
  }
};
</script>
