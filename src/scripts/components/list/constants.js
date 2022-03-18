import { deprecatedClassNameMap } from '../../../material-components-web/list/constants';

export const deprecatedListClassNameMap = Object.assign(
  {},
  deprecatedClassNameMap,
  {
    'mdc-list-item__graphic': 'mdc-deprecated-list-item__graphic',
    'mdc-list-item__meta': 'mdc-deprecated-list-item__meta',
    'mdc-list-item__secondary-text': 'mdc-deprecated-list-item__secondary-text',
    'mdc-list-item__ripple': 'mdc-deprecated-list-item__ripple',
    'mdc-list-group__subheader': 'mdc-deprecated-list-group__subheader',
    'mdc-list-group': 'mdc-deprecated-list-group',
    'mdc-list-divider': 'mdc-deprecated-list-divider'
  }
);

// Define list constants
export const UI_LIST = {
  TYPES: {
    singleLine: 1,
    twoLine: 2
  },
  EVENTS: {
    ACTION: 'update:modelValue'
  }
};

// Define item constants
export const UI_ITEM = {
  cssClasses: {
    active: deprecatedListClassNameMap['mdc-list-item--activated'],
    firstTile: deprecatedListClassNameMap['mdc-list-item__graphic'],
    lastTile: deprecatedListClassNameMap['mdc-list-item__meta']
  }
};
