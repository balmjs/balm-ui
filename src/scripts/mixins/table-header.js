import { computed, watch } from 'vue';
import {
  isString,
  isObject,
  isFunction,
  setTextAlignClassName,
  setCustomClassName
} from './table';
import UI_TABLE from '../components/table/constants';

const tableHeaderProps = {
  selectedRows: {
    type: Array,
    default: () => []
  },
  thead: {
    type: Array,
    default: () => []
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
};

const hasMultipleRows = (data) => data && Array.isArray(data[0]);

function theadCellClassName(data) {
  let className = [
    {
      'mdc-data-table__header-cell': true,
      'mdc-data-table__header-cell--checkbox': data[UI_TABLE.CELL.CHECKBOX],
      'mdc-data-table__header-cell--numeric': data[UI_TABLE.CELL.NUMBER],
      'mdc-data-table__header-cell--with-sort': data.sort,
      'mdc-data-table__header-cell--sorted':
        data.sort === UI_TABLE.SORTING.ASC ||
        data.sort === UI_TABLE.SORTING.DESC,
      'mdc-data-table__header-cell--sorted-descending':
        data.sort === UI_TABLE.SORTING.DESC,
      'mdc-data-table__header-cell--scrollbar': data.scrollbar
    }
  ];

  className = setTextAlignClassName(className, data);
  className = setCustomClassName(className, data);

  return className;
}

function getSort({ sort }) {
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

function useTableHeader(elementRef, props) {
  function getTheadCell(data, index) {
    let cell = {};

    if (isString(data) || isObject(data)) {
      if (isString(data)) {
        cell[UI_TABLE.CELL.VALUE] = data;
      } else {
        Object.keys(data).forEach((key) => {
          cell[key] = data[key];
        });
      }

      // Set fixed
      const cellIndex = props.rowCheckbox ? index + 1 : index;
      if (props.cellStyle[cellIndex]) {
        cell[UI_TABLE.CELL.STYLE] = props.cellStyle[cellIndex];
      }
    } else {
      console.warn('[UiTable]', `Invalid thead cell data: ${data}`);
    }

    return cell;
  }

  const theadData = computed(() => {
    let result = [];

    if (hasMultipleRows(props.thead)) {
      props.thead.forEach((theadRowData) => {
        let data = theadRowData.map((theadCellData, theadCellIndex) =>
          getTheadCell(theadCellData, theadCellIndex)
        );
        result.push(data);
      });
    } else {
      let data = props.thead.map((theadCellData, theadCellIndex) =>
        getTheadCell(theadCellData, theadCellIndex)
      );
      result.push(data);
    }

    if (props.rowCheckbox) {
      let cellData = {
        checkbox: true,
        rowspan: result.length
      };

      // Set fixed
      if (props.cellStyle[0]) {
        cellData[UI_TABLE.CELL.STYLE] = props.cellStyle[0];
      }

      result[0].unshift(cellData);
    }

    return result;
  });

  watch(
    () => props.selectedRows,
    (val) => {
      const checkbox = elementRef.value;
      if (!val.length && checkbox && isFunction(checkbox.reset)) {
        checkbox.reset();
      }
    }
  );

  return {
    theadData,
    theadCellClassName,
    getSort
  };
}

export { tableHeaderProps, useTableHeader };
