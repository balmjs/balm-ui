import tableMixin from './table';
import UI_TABLE from '../components/data-tables/constants';
import getType from '../utils/typeof';

export default {
  mixins: [tableMixin],
  props: {
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
    hasMultipleRows(data) {
      return data && getType(data[0]) === 'array';
    },
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
            data.sort === UI_TABLE.SORTING.DESC,
          'mdc-data-table__header-cell--scrollbar': data.scrollbar
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
    }
  }
};
