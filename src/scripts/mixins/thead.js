import UI_TABLE from '../components/data-tables/constants';

export default {
  data() {
    return {
      T_CELL: UI_TABLE.CELL
    };
  },
  computed: {
    theadData() {
      let result = [];

      if (this.hasMultipleRows(this.thead)) {
        this.thead.forEach((currentTheadRow) => {
          let theadRow = currentTheadRow.map((theadCell) =>
            this.getTheadCell(theadCell)
          );
          result.push(theadRow);
        });
      } else {
        let theadRow = this.thead.map((theadCell) =>
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

      return result;
    }
  },
  methods: {
    theadCellClassName(data) {
      let className = [
        {
          'mdc-data-table__header-cell': true,
          'mdc-data-table__header-cell--checkbox': data[this.T_CELL.CHECKBOX],
          'mdc-data-table__header-cell--numeric': data[this.T_CELL.NUMBER],
          'mdc-data-table__header-cell--with-sort': data.sort,
          'mdc-data-table__header-cell--sorted': data.sort,
          'mdc-data-table__header-cell--sorted-descending':
            data.sort === UI_TABLE.SORTING.DESC
        }
      ];

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
          Object.keys(data).forEach((key) => {
            cell[key] = data[key];
          });
        }
      } else {
        console.warn(`Invalid thead cell data: ${data}`);
      }

      return cell;
    },
    getSort({ sort }) {
      return sort === UI_TABLE.SORTING.ASC ? 'ascending' : 'descending';
    },
    getSortIcon({ sort }) {
      return sort === UI_TABLE.SORTING.ASC ? 'arrow_upward' : 'arrow_downward';
    },
    handleSort({ columnId, sortValue }) {
      let newSelectedRows = [];

      if (sortValue) {
        if (sortValue === 'descending') {
          this.currentData.sort((a, b) => {
            return b[columnId] - a[columnId];
          });
        } else if (sortValue === 'ascending') {
          this.currentData.sort((a, b) => {
            return a[columnId] - b[columnId];
          });
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
    }
  }
};
