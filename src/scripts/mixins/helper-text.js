import getType from '../utils/typeof';

export const UI_HELPER_TEXT = {
  EVENT: {
    CHANGE: 'update:validMsg'
  }
};

/**
 * fix(@mdc): valid bug for `<ui-textfield>` on blur
 *
 * textfield-previous: $textField or $select
 * textfield-next: helper text
 */
export const instanceMap = new Map();

export const componentHelperTextMixin = {
  props: {
    helperTextId: {
      type: [String, null],
      default: null
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
      type: [Boolean, String],
      default: false
    }
  },
  emits: [UI_HELPER_TEXT.EVENT.CHANGE],
  computed: {
    hasValidMsg() {
      return getType(this.validMsg) === 'string'
        ? !!this.validMsg.length
        : this.validMsg;
    },
    validMessage() {
      return getType(this.validMsg) === 'string' ? this.validMsg : '';
    }
  },
  watch: {
    validMsg() {
      if (instanceMap.get(`${this.id}-previous`)) {
        instanceMap.get(`${this.id}-previous`).valid = !this.hasValidMsg;
      }
    }
  },
  mounted() {
    if (this.id) {
      instanceMap.set(`${this.id}-next`, this);
    }
  }
};
