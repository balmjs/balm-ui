// Define tab bar constants
export const UI_TAB_BAR = {
  EVENTS: {
    CHANGE: 'update:modelValue'
  }
};

// Define tab scroller constants
export const UI_TAB_SCROLLER = {
  ALIGN: ['start', 'center', 'end'],
  EVENTS: {
    CHANGE: 'update:scrollX'
  }
};

// Define tab indicator constants
export const UI_TAB_INDICATOR = {
  UNDERLINE: 'underline',
  ICON: 'icon'
};

// Define tab constants
export const UI_TAB = {
  TYPES: {
    text: 0,
    iconOnly: 1,
    textWithIcon: 2
  },
  cssClasses: {
    active: 'mdc-tab--active',
    icon: 'mdc-tab__icon'
  },
  idPrefix: 'mdc-tab-'
};
