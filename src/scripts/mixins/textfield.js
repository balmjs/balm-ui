export default {
  props: {
    // Element attributes
    placeholder: String,
    // UI attributes
    outlined: {
      type: Boolean,
      default: false
    },
    label: String,
    noLabel: {
      type: Boolean,
      default: false
    },
    fullwidth: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    leadingIcon: {
      type: Boolean,
      default: false
    }
  }
};
