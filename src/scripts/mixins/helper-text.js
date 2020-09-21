export const componentHelperTextMixin = {
  props: {
    helperTextId: {
      type: [String, null],
      default: null
    },
    helperTextVisible: {
      type: Boolean,
      default: false
    },
    validMsg: {
      type: Boolean,
      default: false
    }
  }
};

export const helperTextMixin = {
  props: {
    // Element attributes
    id: {
      type: [String, null],
      default: null
    },
    // UI attributes
    visible: {
      type: Boolean,
      default: false
    },
    validMsg: {
      type: Boolean,
      default: false
    }
  }
};
