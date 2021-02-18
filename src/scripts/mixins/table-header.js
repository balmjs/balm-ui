import tableMixin from './table';
import UI_TABLE from '../components/data-tables/constants';
import getType from '../utils/typeof';

export default {
  mixins: [tableMixin],
  props: {
    selectedRows: {
      type: Array,
      default() {
        return [];
      }
    },
    thead: {
      type: Array,
      default() {
        return [];
      }
    },
    rowCheckbox: {
      type: Boolean,
      default: false
    },
    sortIconAlignEnd: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    theadData() {
      let result = [];

      if (this.hasMultipleRows(this.thead)) {
        this.thead.forEach((theadRowData) => {
          let data = theadRowData.map((theadCellData, theadCellIndex) =>
            this.getTheadCell(theadCellData, theadCellIndex)
          );
          result.push(data);
        });
      } else {
        let data = this.thead.map((theadCellData, theadCellIndex) =>
          this.getTheadCell(theadCellData, theadCellIndex)
        );
        result.push(data);
      }

      if (this.rowCheckbox) {
        let cellData = {
          checkbox: true,
          rowspan: result.length
        };

        // Set fixed
        if (this.cellStyle[0]) {
          cellData[this.T_CELL.STYLE] = this.cellStyle[0];
        }

        result[0].unshift(cellData);
      }

      return result;
    }
  },
  watch: {
    selectedRows(val) {
      if (!val.length) {
        this.$refs.checkbox[0].reset();
      }
    }
  },
  methods: {
    hasMultipleRows(data) {
      return data && getType(data[0]) === 'array';
    },
    theadCellClassName(data) {
      let className = [
        {
          'mdc-data-table__header-cell': true,
          'mdc-data-table__header-cell--checkbox': data[this.T_CELL.CHECKBOX],
          'mdc-data-table__header-cell--numeric': data[this.T_CELL.NUMBER],
          'mdc-data-table__header-cell--with-sort': data.sort,
          'mdc-data-table__header-cell--sorted':
            data.sort === UI_TABLE.SORTING.ASC,
          'mdc-data-table__header-cell--sorted-descending':
            data.sort === UI_TABLE.SORTING.DESC,
          'mdc-data-table__header-cell--scrollbar': data.scrollbar
        }
      ];

      className = this.setTextAlignClassName(className, data);
      className = this.setCustomClassName(className, data);

      return className;
    },
    getTheadCell(data, index) {
      let cell = {};

      if (this.isString(data) || this.isObject(data)) {
        if (this.isString(data)) {
          cell[this.T_CELL.VALUE] = data;
        } else {
          Object.keys(data).forEach((key) => {
            cell[key] = data[key];
          });
        }

        // Set fixed
        const cellIndex = this.rowCheckbox ? index + 1 : index;
        if (this.cellStyle[cellIndex]) {
          cell[this.T_CELL.STYLE] = this.cellStyle[cellIndex];
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
    }
  }
};
