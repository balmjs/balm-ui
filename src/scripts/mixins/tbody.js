import UI_TABLE from '../components/data-table/constants';

export default {
  data() {
    return {
      T_CELL: UI_TABLE.CELL
    };
  },
  computed: {
    tbodyData() {
      let result = [];

      this.data.forEach((tbodyData, tbodyDataIndex) => {
        let tbodyRow = this.getData(
          Object.assign({}, tbodyData),
          tbodyDataIndex,
          this.tbody
        );

        result.push(tbodyRow);
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
        cell[this.T_CELL.ACTIONS] = this.withActions;
        data.push(cell);
      }

      return data;
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
