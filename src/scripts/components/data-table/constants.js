// Define data table constants
export default {
  cssClasses: {
    asc: 'mdc-data-table__header-cell--asc',
    desc: 'mdc-data-table__header-cell--desc',
    left: 'mdc-data-table__cell--left',
    center: 'mdc-data-table__cell--center',
    right: 'mdc-data-table__cell--right'
  },
  CELL: {
    ROW_ID: 'rowId',
    CHECKBOX: 'checkbox',
    SELECTED: 'selected',
    ACTIONS: 'actions',
    // common config
    VALUE: 'value',
    NUMBER: 'numeric',
    ALIGN: 'align',
    CLASS: 'class',
    // thead config
    SORTING: 'sort',
    ROWSPAN: 'rowspan',
    COLSPAN: 'colspan',
    // tbody & tfoot config
    FIELD: 'field',
    FUNCTION: 'fn',
    SLOT: 'slot',
    // tfoot config
    FUNCTION_NAME: 'fnName' // For AGG
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
  },
  EVENT: {
    SELECTED: 'selected'
  }
};
