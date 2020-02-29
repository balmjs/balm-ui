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
    withLeadingIcon: {
      type: Boolean,
      default: false
    },
    withTrailingIcon: {
      type: Boolean,
      default: false
    }
  }
};
