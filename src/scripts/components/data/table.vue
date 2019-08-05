<template>
  <!-- Container -->
  <div :class="className">
    <!-- TODO: header - conditions -->
    <table class="mdc-data-table__table">
      <caption v-if="caption">{{ caption }}</caption>
      <colgroup v-if="colgroup">
        <col v-for="(colValue, colKey) in dataColumns" :key="colKey" :class="`col-${colValue}`" />
      </colgroup>
      <!-- Column header / TODO: Sorting tool -->
      <thead v-if="theadData.length">
        <tr
          v-for="(theadRow, theadRowIndex) in theadData"
          :key="`thead-row-${theadRowIndex}`"
          class="mdc-data-table__header-row"
        >
          <template v-for="(theadCell, theadCellIndex) in theadRow">
            <th
              :key="`thead-cell-${theadCellIndex}`"
              :class="headerCellClassName(theadCell)"
              :colspan="theadCell[T_CELL.COLSPAN] || null"
              :rowspan="theadCell[T_CELL.ROWSPAN] || null"
            >
              <ui-checkbox
                v-if="theadCell[T_CELL.CHECKBOX]"
                class="mdc-data-table__header-row-checkbox"
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
            :class="['mdc-data-table__row', {'mdc-data-table__row--selected': tbodyRow[0][T_CELL.SELECTED]}]"
            :data-row-id="tbodyRow[0][T_CELL.ROW_ID] || null"
            :aria-selected="tbodyRow[0][T_CELL.SELECTED] || null"
          >
            <template v-for="(tbodyCell, tbodyCellIndex) in tbodyRow">
              <td :key="`tbody-cell-${tbodyCellIndex}`" :class="cellClassName(tbodyCell)">
                <ui-checkbox
                  v-if="tbodyCell[T_CELL.CHECKBOX]"
                  class="mdc-data-table__row-checkbox"
                  cssOnly
                ></ui-checkbox>
                <slot
                  v-else-if="tbodyCell[T_CELL.ACTIONS]"
                  :name="T_CELL.ACTIONS"
                  :data="getRowData(tbodyRow)"
                ></slot>
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
        <tr class="mdc-data-table__footer-row">
          <td
            v-for="(tfootCell, tfootCellIndex) in tfootData"
            :key="tfootCellIndex"
            :class="headerCellClassName(tfootCell)"
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
    <!-- TODO: footer - Pagination -->
  </div>
</template>

<script>
import { MDCDataTable } from '../../../material-components-web/data-table';
import UiCheckbox from '../input-controls/checkbox';
import getType from '../../utils/typeof';

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
    ROW_ID: 'rowId',
    CHECKBOX: 'checkbox',
    SELECTED: 'selected',
    COLSPAN: 'colspan',
    ROWSPAN: 'rowspan',
    CLASS: 'class',
    ALIGN: 'align',
    FUNCTION: 'fn',
    SLOT: 'slot',
    ACTIONS: 'actions',
    FUNCTION_NAME: 'fnName' // For AGG
  },
  EVENT: {
    SELECTED: 'selected'
  },
  CLASSNAME: {
    LEFT: 'mdc-data-table__cell--left',
    CENTER: 'mdc-data-table__cell--center',
    RIGHT: 'mdc-data-table__cell--right'
  },
  AGG: {
    COUNT: 'count',
    SUM: 'sum',
    AVG: 'avg',
    MAX: 'max',
    MIN: 'min'
  }
};

export default {
  name: 'ui-table',
  components: {
    UiCheckbox
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
    },
    withActions() {
      let lastCell = this.tbody.length ? this.tbody[this.tbody.length - 1] : {};
      return lastCell[this.T_CELL.SLOT] === this.T_CELL.ACTIONS;
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

      this.currentData.forEach((tbodyData, index) => {
        let selectedRowId = this.selectedKey
          ? tbodyData[this.selectedKey]
          : index;

        // For old selectedRows
        if (this.selectedRows.includes(selectedRowId)) {
          let selected = !(index === detail.rowIndex && !detail.selected);
          selected && selectedRows.push(selectedRowId);
        }

        // For new selectedRow
        if (index === detail.rowIndex && detail.selected) {
          selectedRows.push(selectedRowId);
        }
      });

      this.$emit(UI_TABLE.EVENT.SELECTED, selectedRows);
    });

    this.$table.listen('MDCDataTable:selectedAll', () => {
      let selectedRows = this.currentData.map((tbodyData, index) => {
        return this.selectedKey ? tbodyData[this.selectedKey] : index;
      });

      this.$emit(UI_TABLE.EVENT.SELECTED, selectedRows);
    });

    this.$table.listen('MDCDataTable:unselectedAll', () => {
      this.$emit(UI_TABLE.EVENT.SELECTED, []);
    });
  },
  methods: {
    isString(any) {
      return getType(any) === 'string';
    },
    isObject(any) {
      return getType(any) === 'object';
    },
    isFunction(any) {
      return getType(any) === 'function';
    },
    hasMultipleRows(data) {
      return data && getType(data[0]) === 'array';
    },
    setTextAlignClassName(className, data) {
      if (data[this.T_CELL.ALIGN]) {
        switch (data[this.T_CELL.ALIGN].toLowerCase()) {
          case 'left':
            className.push(UI_TABLE.CLASSNAME.LEFT);
            break;
          case 'center':
            className.push(UI_TABLE.CLASSNAME.CENTER);
            break;
          case 'right':
            className.push(UI_TABLE.CLASSNAME.RIGHT);
            break;
          default:
        }
      }

      return className;
    },
    setCustomClassName(className, data) {
      if (data[this.T_CELL.CLASS]) {
        className.push(data[this.T_CELL.CLASS]);
      }

      return className;
    },
    headerCellClassName(data) {
      let className = [
        {
          'mdc-data-table__header-cell': true,
          'mdc-data-table__header-cell--checkbox': data[this.T_CELL.CHECKBOX]
        }
      ];

      className = this.setTextAlignClassName(className, data);
      className = this.setCustomClassName(className, data);

      return className;
    },
    cellClassName(data) {
      let className = [
        {
          'mdc-data-table__cell': true,
          'mdc-data-table__cell--numeric': data[this.T_CELL.NUMBER],
          'mdc-data-table__cell--checkbox': data[this.T_CELL.CHECKBOX]
        }
      ];

      className = this.setTextAlignClassName(className, data);
      className = this.setCustomClassName(className, data);

      return className;
    },
    footerCellClassName(data) {
      let className = ['mdc-data-table__footer-cell'];

      className = this.setTextAlignClassName(className, data);
      className = this.setCustomClassName(className, data);

      return className;
    },
    getTheadCell(data) {
      let cell = {};

      if (this.isString(data) || this.isObject(data)) {
        if (this.isString(data)) {
          cell[this.T_CELL.VALUE] = data;
        } else {
          Object.keys(data).forEach(key => {
            cell[key] = data[key];
          });
        }
      } else {
        console.warn(`Invalid thead cell data: ${data}`);
      }

      return cell;
    },
    getTfootCell(data) {
      let cell = {};

      if (this.isObject(data)) {
        let field = data[this.T_CELL.FIELD] || false;

        if (field) {
          let columnData = this.currentData.map(tbodyData => tbodyData[field]);

          let result = 0;
          switch (data[this.T_CELL.FUNCTION_NAME]) {
            case UI_TABLE.AGG.COUNT:
              result = columnData.length;
              break;
            case UI_TABLE.AGG.SUM:
              columnData.forEach(value => {
                if (value) {
                  result += value;
                }
              });
              break;
            case UI_TABLE.AGG.AVG:
              columnData.forEach(value => {
                if (value) {
                  result += value;
                }
              });
              result /= columnData.length;
              break;
            case UI_TABLE.AGG.MAX:
              columnData.forEach(value => {
                if (value && value > result) {
                  result = value;
                }
              });
              break;
            case UI_TABLE.AGG.MIN:
              columnData.forEach(value => {
                if (value && value < result) {
                  result = value;
                }
              });
              break;
            default:
              result = '';
          }

          let fn = data[this.T_CELL.FUNCTION];
          cell[this.T_CELL.VALUE] = fn
            ? fn(result)
            : Math.round(result * 100) / 100;
        }

        Object.keys(data).forEach(key => {
          cell[key] = data[key];
        });
      }

      return cell;
    },
    getData(currentData, rowIndex, dataFields) {
      let data = [];

      // Set checkbox
      if (this.rowCheckbox) {
        let cell = {};
        let selectedRowId = this.selectedKey
          ? currentData[this.selectedKey]
          : rowIndex;
        let selected = this.selectedRows.includes(selectedRowId);

        cell[this.T_CELL.ROW_ID] = `${this.rowIdPrefix}${rowIndex}`;
        cell[this.T_CELL.CHECKBOX] = true;
        cell[this.T_CELL.SELECTED] = selected;

        data.push(cell);
      }

      if (this.isObject(currentData)) {
        let rowData = Object.assign({}, currentData);

        Object.keys(rowData).forEach((key, index) => {
          let cell = {};
          let field = this.isObject(dataFields[index])
            ? dataFields[index][this.T_CELL.FIELD]
            : dataFields[index];

          // Set value
          if (key === field) {
            let customFn = dataFields[index][this.T_CELL.FUNCTION];

            cell[this.T_CELL.FIELD] = key;
            cell[this.T_CELL.VALUE] = this.isFunction(customFn)
              ? customFn(rowData)
              : rowData[field];
          }

          // Set others
          if (this.isObject(dataFields[index])) {
            Object.keys(dataFields[index]).forEach(key => {
              if (key !== this.T_CELL.FIELD) {
                let value = dataFields[index][key];
                switch (key) {
                  case this.T_CELL.CLASS:
                    if (this.isString(value)) {
                      cell[key] = value;
                    } else if (this.isFunction(value)) {
                      cell[key] = value(rowData);
                    }
                    break;
                  case this.T_CELL.FUNCTION:
                    break;
                  default:
                    cell[key] = value;
                }
              }
            });
          }

          data.push(cell);
        });
      } else {
        console.warn(`Invalid tbody cell data: ${currentData}`);
      }

      // Set actions
      if (this.withActions) {
        let cell = {};
        cell[this.T_CELL.ACTIONS] = true;
        data.push(cell);
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
                this.getTheadCell(theadCell)
              );
              result.push(theadRow);
            });
          } else {
            let theadRow = this.thead.map(theadCell =>
              this.getTheadCell(theadCell)
            );
            result.push(theadRow);
          }

          if (this.rowCheckbox) {
            let cell = {
              checkbox: true,
              rowspan: result.length
            };
            result[0].unshift(cell);
          }
          break;
        case UI_TABLE.ELEMENT.TFOOT:
          if (this.tfoot.length) {
            result = this.tfoot.map(tfootCell => this.getTfootCell(tfootCell));

            if (this.rowCheckbox) {
              result.unshift({});
            }

            if (this.withActions) {
              result.push({});
            }
          }
          break;
        default:
          this.currentData.forEach((tbodyData, tbodyDataIndex) => {
            let tbodyRow = this.getData(
              Object.assign({}, tbodyData),
              tbodyDataIndex,
              this.tbody
            );

            result.push(tbodyRow);
          });
      }

      return result;
    },
    getRowData(tbodyRow) {
      let data = {};

      tbodyRow.forEach(cell => {
        if (!(cell[this.T_CELL.CHECKBOX] || cell[this.T_CELL.ACTIONS])) {
          data[cell[this.T_CELL.FIELD]] = cell[this.T_CELL.VALUE];
        }
      });

      return data;
    }
  }
};
</script>
