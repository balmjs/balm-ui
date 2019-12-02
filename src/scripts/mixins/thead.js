import UI_TABLE from '../components/data/constants';

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
          'mdc-data-table__header-cell--numeric': data[this.T_CELL.NUMBER]
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
    }
  }
};
