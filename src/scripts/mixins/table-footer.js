import { computed } from 'vue';
import { isObject, setTextAlignClassName, setCustomClassName } from './table';
import UI_TABLE from '../components/table/constants';

const tableFooterProps = {
  data: {
    type: Array,
    default: () => []
  },
  tfoot: {
    type: Array,
    default: () => []
  },
  rowCheckbox: {
    type: Boolean,
    default: false
  },
  columns: {
    type: Number,
    default: 1
  }
};

function tfootCellClassName(data) {
  let className = ['mdc-data-table__cell'];

  className = setTextAlignClassName(className, data);
  className = setCustomClassName(className, data);

  return className;
}

function useTableFooter(props) {
  function getTfootCell(data, index) {
    let cell = {};

    if (isObject(data)) {
      let field = data[UI_TABLE.CELL.FIELD] || false;

      if (field) {
        let columnData = props.data.map((tbodyData) => tbodyData[field]);

        let result = 0;
        switch (data[UI_TABLE.CELL.FUNCTION_NAME]) {
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

        let fn = data[UI_TABLE.CELL.FUNCTION];
        cell[UI_TABLE.CELL.VALUE] = fn
          ? fn(result)
          : Math.round(result * 100) / 100;
      }

      Object.keys(data).forEach((key) => {
        cell[key] = data[key];
      });

      // Set fixed
      const cellIndex = props.rowCheckbox ? index + 1 : index;
      if (props.cellStyle[cellIndex]) {
        cell[UI_TABLE.CELL.STYLE] = props.cellStyle[cellIndex];
      }
    }

    return cell;
  }

  const tfootData = computed(() => {
    let result = [];

    if (props.tfoot.length) {
      result = props.tfoot.map((tfootCellData, tfootCellIndex) =>
        getTfootCell(tfootCellData, tfootCellIndex)
      );

      if (props.rowCheckbox) {
        let cellData = {};

        // Set fixed
        if (props.cellStyle[0]) {
          cellData[UI_TABLE.CELL.STYLE] = props.cellStyle[0];
        }

        result.unshift(cellData);
      }

      let restColumns = props.columns - result.length;
      while (restColumns--) {
        result.push({});
      }
    }

    return result;
  });

  return {
    tfootData,
    tfootCellClassName
  };
}

export { tableFooterProps, useTableFooter };
