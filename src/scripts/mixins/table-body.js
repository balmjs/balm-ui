import tableMixin from './table';

export default {
  mixins: [tableMixin],
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    currentData: {
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
    tbody: {
      type: Array,
      default() {
        return [];
      }
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
  computed: {
    tbodyData() {
      let result = [];

      this.currentData.forEach((tbodyRowData, tbodyRowIndex) => {
        let data = this.getTbodyCell(tbodyRowData, tbodyRowIndex);

        result.push(data);
      });

      return result;
    }
  },
  methods: {
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
    getTbodyCell(tbodyRowData, tbodyRowIndex) {
      let data = [];

      if (this.isObject(tbodyRowData)) {
        // Set checkbox
        if (this.rowCheckbox) {
          let cell = {};
          let selectedRowId = this.selectedKey
            ? tbodyRowData[this.selectedKey]
            : tbodyRowIndex;
          let selected = this.selectedRows.includes(selectedRowId);

          cell[this.T_CELL.ROW_ID] = `${this.rowIdPrefix}${tbodyRowIndex}`;
          cell[this.T_CELL.CHECKBOX] = true;
          cell[this.T_CELL.SELECTED] = selected;

          // Set fixed
          if (this.cellStyle[0]) {
            cell[this.T_CELL.STYLE] = this.cellStyle[0];
          }

          data.push(cell);
        }

        this.tbody.forEach((tbodyCellData, tbodyCellIndex) => {
          let cell = {};

          let field = this.isObject(tbodyCellData)
            ? tbodyCellData[this.T_CELL.FIELD]
            : tbodyCellData;
          if (field) {
            cell[this.T_CELL.FIELD] = field;
          }

          // Set slot or value
          if (tbodyCellData[this.T_CELL.SLOT]) {
            cell[this.T_CELL.SLOT] = tbodyCellData[this.T_CELL.SLOT];
          } else {
            let customFn = tbodyCellData[this.T_CELL.FUNCTION];
            cell[this.T_CELL.VALUE] = this.isFunction(customFn)
              ? customFn(tbodyRowData)
              : tbodyRowData[field];
          }

          // Set others
          for (const [key, value] of Object.entries(tbodyCellData)) {
            if (key !== field) {
              switch (key) {
                case this.T_CELL.CLASS:
                  if (this.isString(value)) {
                    cell[key] = value;
                  } else if (this.isFunction(value)) {
                    cell[key] = value(tbodyRowData);
                  }
                  break;
                case this.T_CELL.FUNCTION:
                  break;
                default:
                  cell[key] = value;
              }
            }
          }

          // Set fixed
          const cellIndex = this.rowCheckbox
            ? tbodyCellIndex + 1
            : tbodyCellIndex;
          if (this.cellStyle[cellIndex]) {
            cell[this.T_CELL.STYLE] = this.cellStyle[cellIndex];
          }

          data.push(cell);
        });
      } else {
        console.warn(`Invalid tbody cell data: ${tbodyRowData}`);
      }

      return data;
    }
  }
};
