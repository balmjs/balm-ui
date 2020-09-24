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
      type: [String, Boolean],
      default: ''
    }
  },
  computed: {
    hasValidMsg() {
      return !!this.validMsg;
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
    isValidMsg: {
      type: Boolean,
      default: false
    }
  }
};
