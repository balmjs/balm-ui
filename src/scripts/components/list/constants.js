// Define list constants
const UI_LIST = {
  TYPES: {
    singleLine: 1,
    twoLine: 2
  },
  EVENT: {
    ACTION: 'update:modelValue'
  }
};

const UI_ITEM = {
  cssClasses: {
    active: 'mdc-list-item--activated',
    firstTile: 'mdc-list-item__graphic',
    lastTile: 'mdc-list-item__meta'
  },
  EVENT: {
    CLICK: 'click'
  }
};

export { UI_LIST, UI_ITEM };
