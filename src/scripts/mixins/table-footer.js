import tableMixin from './table';
import UI_TABLE from '../components/data-tables/constants';

export default {
  mixins: [tableMixin],
  props: {
    data: {
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
    rowCheckbox: {
      type: Boolean,
      default: false
    },
    columns: {
      type: Number,
      default: 1
    }
  },
  computed: {
    tfootData() {
      let result = [];

      if (this.tfoot.length) {
        result = this.tfoot.map((tfootCellData, tfootCellIndex) =>
          this.getTfootCell(tfootCellData, tfootCellIndex)
        );

        if (this.rowCheckbox) {
          let cellData = {};

          // Set fixed
          if (this.cellStyle[0]) {
            cellData[this.T_CELL.STYLE] = this.cellStyle[0];
          }

          result.unshift(cellData);
        }

        let restColumns = this.columns - result.length;
        while (restColumns--) {
          result.push({});
        }
      }

      return result;
    }
  },
  methods: {
    tfootCellClassName(data) {
      let className = ['mdc-data-table__cell'];

      className = this.setTextAlignClassName(className, data);
      className = this.setCustomClassName(className, data);

      return className;
    },
    getTfootCell(data, index) {
      let cell = {};

      if (this.isObject(data)) {
        let field = data[this.T_CELL.FIELD] || false;

        if (field) {
          let columnData = this.data.map((tbodyData) => tbodyData[field]);

          let result = 0;
          switch (data[this.T_CELL.FUNCTION_NAME]) {
            case UI_TABLE.AGG.COUNT:
              result = columnData.length;
              break;
            case UI_TABLE.AGG.SUM:
              columnData.forEach((value) => {
                if (value) {
                  result += value;
                }
              });
              break;
            case UI_TABLE.AGG.AVG:
              columnData.forEach((value) => {
                if (value) {
                  result += value;
                }
              });
              if (columnData.length) {
                result /= columnData.length;
              }
              break;
            case UI_TABLE.AGG.MAX:
              columnData.forEach((value) => {
                if (value && value > result) {
                  result = value;
                }
              });
              break;
            case UI_TABLE.AGG.MIN:
              columnData.forEach((value) => {
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

        Object.keys(data).forEach((key) => {
          cell[key] = data[key];
        });

        // Set fixed
        const cellIndex = this.rowCheckbox ? index + 1 : index;
        if (this.cellStyle[cellIndex]) {
          cell[this.T_CELL.STYLE] = this.cellStyle[cellIndex];
        }
      }

      return cell;
    }
  }
};
