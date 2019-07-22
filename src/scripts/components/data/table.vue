<template>
  <!-- Container -->
  <div :class="className">
    <!-- TODO: header - conditions -->
    <table class="mdc-data-table__table">
      <!-- TODO: <caption></caption>
      <colgroup>
        <col />
      </colgroup>-->
      <!-- Column header / Sorting tool -->
      <thead v-if="theadData.length">
        <tr
          v-for="(theadRow, theadRowIndex) in theadData"
          :key="`thead-row-${theadRowIndex}`"
          class="mdc-data-table__header-row"
        >
          <template v-for="(theadCell, theadCellIndex) in theadRow">
            <!-- Raw HTML -->
            <th
              v-if="theadCell[T_CELL.RAW]"
              :key="`thead-cell-${theadCellIndex}`"
              :class="headerCellClassName(theadCell)"
              v-html="theadCell[T_CELL.VALUE]"
            ></th>
            <!-- Text -->
            <th
              v-else
              :key="`thead-cell-${theadCellIndex}`"
              :class="headerCellClassName(theadCell)"
            >
              <ui-checkbox
                v-if="theadCell[T_CELL.CHECKBOX]"
                :class="'mdc-checkbox--selected mdc-data-table__header-row-checkbox'"
                cssOnly
              ></ui-checkbox>
              <template v-else>{{ theadCell[T_CELL.VALUE] }}</template>
            </th>
          </template>
        </tr>
      </thead>
      <!-- Table content -->
      <tbody class="mdc-data-table__content">
        <template v-if="tbodyData.length">
          <tr
            v-for="(tbodyRow, tbodyRowIndex) in tbodyData"
            :key="`tbody-row-${tbodyRowIndex}`"
            class="mdc-data-table__row"
          >
            <template v-for="(tbodyCell, tbodyCellIndex) in tbodyRow">
              <!-- Raw HTML -->
              <td
                v-if="tbodyCell[T_CELL.RAW]"
                :key="`tbody-cell-${tbodyCellIndex}`"
                :class="cellClassName(tbodyCell)"
                v-html="tbodyCell[T_CELL.VALUE]"
              ></td>
              <!-- Text -->
              <td v-else :key="`tbody-cell-${tbodyCellIndex}`" :class="cellClassName(tbodyCell)">
                <ui-checkbox
                  v-if="tbodyCell[T_CELL.CHECKBOX]"
                  :class="'mdc-data-table__row-checkbox'"
                  cssOnly
                ></ui-checkbox>
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
          >{{ noData }}</td>
        </tr>
      </tbody>
      <tfoot v-if="tfootData.length">
        <!-- TODO: tfoot data -->
      </tfoot>
    </table>
    <!-- TODO: footer - Pagination -->
  </div>
</template>

<script>
import { MDCDataTable } from '../../../material-components-web/data-table';
import UiCheckbox from '../input-controls/checkbox';
import { isString, isObject, isArray } from '../../utils/types';

// Define constants
const UI_TABLE = {
  ELEMENT: {
    THEAD: 'thead',
    TBODY: 'tbody',
    TFOOT: 'tfoot'
  },
  CELL: {
    FIELD: 'field',
    VALUE: 'value',
    NUMBER: 'numeric',
    CHECKBOX: 'checkbox',
    RAW: 'raw',
    SLOT: 'slot'
  },
  EVENT: {
    CHANGED: 'changed',
    SELECTED_All: 'selectedAll',
    UNSELECTED_All: 'unselectedAll'
  }
};

export default {
  name: 'ui-table',
  components: {
    UiCheckbox
  },
  props: {
    // States
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    checkedList: {
      type: Array,
      default() {
        return [];
      }
    },
    // UI attributes
    columns: Number,
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
    noData: {
      type: String,
      default: 'No Data'
    },
    sortingTool: {
      type: Boolean,
      default: false
    },
    rowCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
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
    theadData() {
      return this.getCellData(UI_TABLE.ELEMENT.THEAD);
    },
    tbodyData() {
      return this.getCellData(UI_TABLE.ELEMENT.TBODY);
    },
    tfootData() {
      return this.getCellData(UI_TABLE.ELEMENT.TFOOT);
    }
  },
  watch: {
    data(val) {
      console.log('watch');
      this.currentData = val;
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

    console.log('created - dataColumns: ', this.dataColumns);
  },
  mounted() {
    this.$table = new MDCDataTable(this.$el);

    this.$table.listen(`MDCDataTable:${UI_TABLE.EVENT.CHANGED}`, () => {
      // this.$emit(UI_TABLE.EVENT.CHANGED, this.$table.checkedList);
    });

    this.$table.listen(`MDCDataTable:${UI_TABLE.EVENT.SELECTED_All}`, () => {
      // this.$emit(UI_TABLE.EVENT.SELECTED_All, this.$table.checkedList);
    });

    this.$table.listen(`MDCDataTable:${UI_TABLE.EVENT.UNSELECTED_All}`, () => {
      // this.$emit(UI_TABLE.EVENT.UNSELECTED_All, this.$table.checkedList);
    });
  },
  methods: {
    hasMultipleRows(data) {
      return this.data && isArray(this.data[0]);
    },
    headerCellClassName(data) {
      return {
        'mdc-data-table__header-cell': true,
        'mdc-data-table__header-cell--checkbox': data[this.T_CELL.CHECKBOX]
      };
    },
    cellClassName(data) {
      return {
        'mdc-data-table__cell': true,
        'mdc-data-table__cell--numeric': data[this.T_CELL.NUMBER],
        'mdc-data-table__cell--checkbox': data[this.T_CELL.CHECKBOX]
      };
    },
    getCell(data) {
      let cell = {};

      if (isString(data) || isObject(data)) {
        if (isString(data)) {
          cell[this.T_CELL.VALUE] = data;
        } else {
          Object.keys(data).forEach(key => {
            cell[key] = data[key];
          });
        }
      } else {
        console.warn(`Invalid thead/tfoot cell data: ${data}`);
      }

      return cell;
    },
    getData(currentData, dataFields) {
      let data = [];

      // Set checkbox
      if (this.rowCheckbox) {
        let cell = {
          checkbox: true
        };
        data.push(cell);
      }

      if (isObject(currentData)) {
        Object.keys(currentData).forEach((key, index) => {
          let cell = {};
          let field = isObject(dataFields[index])
            ? dataFields[index][this.T_CELL.FIELD]
            : dataFields[index];

          // Set value
          if (key === field) {
            cell[this.T_CELL.FIELD] = key;
            cell[this.T_CELL.VALUE] = currentData[field];
          }

          // Set others
          if (isObject(dataFields[index])) {
            Object.keys(dataFields[index]).forEach(key => {
              if (key !== this.T_CELL.FIELD) {
                cell[key] = dataFields[index][key];
              }
            });
          }

          data.push(cell);
        });
      } else {
        console.warn(`Invalid tbody cell data: ${currentData}`);
      }

      return data;
    },
    getCellData(type) {
      let result = [];

      switch (type) {
        case UI_TABLE.ELEMENT.THEAD:
          if (this.hasMultipleRows(this.thead)) {
            this.thead.forEach(currentTheadRow => {
              let theadRow = currentTheadRow.map(theadCell =>
                this.getCell(theadCell)
              );
              result.push(theadRow);
            });
          } else {
            let theadRow = this.thead.map(theadCell => this.getCell(theadCell));
            result.push(theadRow);
          }

          if (this.rowCheckbox) {
            let cell = {
              checkbox: true,
              rowspan: result.length
            };
            result[0].unshift(cell);
          }

          // console.log('thead', result);
          break;
        case UI_TABLE.ELEMENT.TFOOT:
          let tfootRow = this.tfoot.map(tfootCell => this.getCell(tfootCell));
          result.push(tfootRow);

          if (this.rowCheckbox) {
            result[0].unshift({});
          }
          break;
        default:
          this.currentData.forEach(tbodyData => {
            // console.log(Object.assign({}, tbodyData));
            let tbodyRow = this.getData(
              Object.assign({}, tbodyData),
              this.tbody
            );

            // console.log(tbodyRow);
            result.push(tbodyRow);

            // console.log('tbody', result);
          });
          break;
      }

      return result;
    },
    getRowData(tbodyRow) {
      let data = {};

      tbodyRow.forEach(cell => {
        if (!cell.checkbox) {
          data[cell[this.T_CELL.FIELD]] = cell[this.T_CELL.VALUE];
        }
      });

      return data;
    }
  }
};
</script>
