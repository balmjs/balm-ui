// Define data table constants
export default {
  CELL: {
    FIELD: 'field',
    VALUE: 'value',
    NUMBER: 'numeric',
    ROW_ID: 'rowId',
    CHECKBOX: 'checkbox',
    SORTING: 'sort',
    SELECTED: 'selected',
    COLSPAN: 'colspan',
    ROWSPAN: 'rowspan',
    CLASS: 'class',
    ALIGN: 'align',
    FUNCTION: 'fn',
    SLOT: 'slot',
    ACTIONS: 'actions',
    FUNCTION_NAME: 'fnName' // For AGG
  },
  EVENT: {
    SELECTED: 'selected'
  },
  cssClasses: {
    asc: 'mdc-data-table__header-cell--asc',
    desc: 'mdc-data-table__header-cell--desc',
    left: 'mdc-data-table__cell--left',
    center: 'mdc-data-table__cell--center',
    right: 'mdc-data-table__cell--right'
  },
  SORTING: {
    ASC: 'asc',
    DESC: 'desc'
  },
  AGG: {
    COUNT: 'count',
    SUM: 'sum',
    AVG: 'avg',
    MAX: 'max',
    MIN: 'min'
  }
};
