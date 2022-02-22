// Define data table constants
export default {
  cssClasses: {
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
    STYLE: 'style',
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
    ICON: 'arrow_upward',
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
  EVENTS: {
    CHANGE: 'update:modelValue'
  },
  CHECKBOX_COL_WIDTH: 50 // px
};
