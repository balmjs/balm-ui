import getType from '../utils/typeof';

export const UI_TEXTFIELD_HELPER = {
  EVENT: {
    CHANGE: 'update:validMsg'
  }
};

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
      type: [String, Boolean],
      default: false
    }
  },
  emits: [UI_TEXTFIELD_HELPER.EVENT.CHANGE],
  data() {
    return {
      $previous: null
    };
  },
  computed: {
    hasValidMsg() {
      return !!this.validMsg;
    }
  },
  watch: {
    validMsg() {
      this.$previous.valid = !this.hasValidMsg;
    }
  },
  methods: {
    getPreviousInstance(name) {
      if (
        this.$el &&
        this.$el.previousElementSibling &&
        getType(this.$el.previousElementSibling.__vueParentComponent.type) ===
          'object' &&
        this.$el.previousElementSibling.__vueParentComponent.type.name ===
          `Ui${name}`
      ) {
        const instance = name === 'Select' ? '$select' : '$textField';
        this.$previous = this.$el.previousElementSibling.__vueParentComponent.data[
          instance
        ];
      }
    }
  }
};
