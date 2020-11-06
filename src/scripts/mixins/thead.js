import UI_TABLE from '../components/data-tables/constants';
import getType from '../utils/typeof';

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
          'mdc-theme--on-surface': true, // fix(@material-components): dark theme
          'mdc-data-table__header-cell--checkbox': data[this.T_CELL.CHECKBOX],
          'mdc-data-table__header-cell--numeric': data[this.T_CELL.NUMBER],
          'mdc-data-table__header-cell--with-sort': data.sort,
          'mdc-data-table__header-cell--sorted':
            data.sort === UI_TABLE.SORTING.ASC,
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
      let result;

      if (sort === UI_TABLE.SORTING.ASC) {
        result = 'ascending';
      } else if (sort === UI_TABLE.SORTING.DESC) {
        result = 'descending';
      } else {
        result = 'none';
      }

      return result;
    },
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
    }
  }
};
