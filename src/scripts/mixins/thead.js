import UI_TABLE from '../components/data-table/constants';

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
          'mdc-data-table__header-cell--asc':
            data.sort === UI_TABLE.SORTING.ASC,
          'mdc-data-table__header-cell--desc':
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
          Object.keys(data).forEach(key => {
            cell[key] = data[key];
          });
        }
      } else {
        console.warn(`Invalid thead cell data: ${data}`);
      }

      return cell;
    },
    handleSort(data) {
      let newSelectedRows = [];

      if (data[this.T_CELL.SORTING]) {
        let sortBy = data.by;
        let currentSort;
        // TODO: 多个表格共用数据bug
        if (data[this.T_CELL.SORTING] === UI_TABLE.SORTING.ASC) {
          currentSort = UI_TABLE.SORTING.DESC;
          this.currentData.sort((a, b) => {
            return b[sortBy] - a[sortBy];
          });
        } else if (data[this.T_CELL.SORTING] === UI_TABLE.SORTING.DESC) {
          currentSort = UI_TABLE.SORTING.ASC;
          this.currentData.sort((a, b) => {
            return a[sortBy] - b[sortBy];
          });
        }
        data[this.T_CELL.SORTING] = currentSort;

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
