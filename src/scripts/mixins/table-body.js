import { computed } from 'vue';
import {
  isString,
  isObject,
  isFunction,
  setTextAlignClassName,
  setCustomClassName
} from './table';
import UI_TABLE from '../components/table/constants';

const tableBodyProps = {
  data: {
    type: Array,
    default: () => []
  },
  currentData: {
    type: Array,
    default: () => []
  },
  selectedRows: {
    type: Array,
    default: () => []
  },
  tbody: {
    type: Array,
    default: () => []
  },
  rowCheckbox: {
    type: Boolean,
    default: false
  },
  selectedKey: {
    type: [Boolean, String],
    default: false
  },
  rowIdPrefix: {
    type: String,
    default: ''
  }
};

function cellClassName(data) {
  let className = [
    {
      'mdc-data-table__cell': true,
      'mdc-data-table__cell--numeric': data[UI_TABLE.CELL.NUMBER],
      'mdc-data-table__cell--checkbox': data[UI_TABLE.CELL.CHECKBOX]
    }
  ];

  className = setTextAlignClassName(className, data);
  className = setCustomClassName(className, data);

  return className;
}

function useTableBody(props) {
  function getTbodyCell(tbodyRowData, tbodyRowIndex) {
    let data = [];

    if (isObject(tbodyRowData)) {
      // Set checkbox
      if (props.rowCheckbox) {
        let cell = {};
        let selectedRowId = props.selectedKey
          ? tbodyRowData[props.selectedKey]
          : tbodyRowIndex;
        let selected = props.selectedRows.includes(selectedRowId);

        cell[UI_TABLE.CELL.ROW_ID] = `${props.rowIdPrefix}${tbodyRowIndex}`;
        cell[UI_TABLE.CELL.CHECKBOX] = true;
        cell[UI_TABLE.CELL.SELECTED] = selected;

        // Set fixed
        if (props.cellStyle[0]) {
          cell[UI_TABLE.CELL.STYLE] = props.cellStyle[0];
        }

        data.push(cell);
      }

      props.tbody.forEach((tbodyCellData, tbodyCellIndex) => {
        let cell = {};

        let field = isObject(tbodyCellData)
          ? tbodyCellData[UI_TABLE.CELL.FIELD]
          : tbodyCellData;
        if (field) {
          cell[UI_TABLE.CELL.FIELD] = field;
        }

        // Set slot or value
        if (tbodyCellData[UI_TABLE.CELL.SLOT]) {
          cell[UI_TABLE.CELL.SLOT] = tbodyCellData[UI_TABLE.CELL.SLOT];
        } else {
          let customFn = tbodyCellData[UI_TABLE.CELL.FUNCTION];
          cell[UI_TABLE.CELL.VALUE] = isFunction(customFn)
            ? customFn(tbodyRowData)
            : tbodyRowData[field];
        }

        // Set others
        if (isObject(tbodyCellData)) {
          for (const [key, value] of Object.entries(tbodyCellData)) {
            if (key !== field) {
              switch (key) {
                case UI_TABLE.CELL.CLASS:
                  if (isString(value)) {
                    cell[key] = value;
                  } else if (isFunction(value)) {
                    cell[key] = value(tbodyRowData);
                  }
                  break;
                case UI_TABLE.CELL.FUNCTION:
                  break;
                default:
                  cell[key] = value;
              }
            }
          }
        }

        // Set fixed
        const cellIndex = props.rowCheckbox
          ? tbodyCellIndex + 1
          : tbodyCellIndex;
        if (props.cellStyle[cellIndex]) {
          cell[UI_TABLE.CELL.STYLE] = props.cellStyle[cellIndex];
        }

        data.push(cell);
      });
    } else {
      console.warn('[UiTable]', `Invalid tbody cell data: ${tbodyRowData}`);
    }

    return data;
  }

  const tbodyData = computed(() => {
    let result = [];

    props.currentData.forEach((tbodyRowData, tbodyRowIndex) => {
      let data = getTbodyCell(tbodyRowData, tbodyRowIndex);

      result.push(data);
    });

    return result;
  });

  return {
    tbodyData,
    cellClassName
  };
}

export { tableBodyProps, useTableBody };
