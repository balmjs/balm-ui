export default {
  props: {
    // Element attributes
    placeholder: String,
    // UI attributes
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
    // For custom icon
    leadingIcon: {
      type: Boolean,
      default: false
    },
    trailingIcon: {
      type: Boolean,
      default: false
    }
  }
};
