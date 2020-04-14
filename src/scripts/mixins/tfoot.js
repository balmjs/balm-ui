import UI_TABLE from '../components/data-tables/constants';

export default {
  data() {
    return {
      T_CELL: UI_TABLE.CELL
    };
  },
  computed: {
    tfootData() {
      let result = [];

      if (this.tfoot.length) {
        result = this.tfoot.map((tfootCell) => this.getTfootCell(tfootCell));

        if (this.rowCheckbox) {
          result.unshift({});
        }

        if (this.withActions) {
          result.push({});
        }
      }

      return result;
    }
  },
  methods: {
    tfootCellClassName(data) {
      let className = ['mdc-data-table__footer-cell'];

      className = this.setTextAlignClassName(className, data);
      className = this.setCustomClassName(className, data);

      return className;
    },
    getTfootCell(data) {
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
              result /= columnData.length;
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
      }

      return cell;
    }
  }
};
