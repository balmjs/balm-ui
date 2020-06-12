export default {
  props: {
    // Element attributes
    placeholder: {
      type: [String, null],
      default: null
    },
    // UI attributes
    label: {
      type: String,
      default: ''
    },
    fullwidth: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    endAligned: {
      type: Boolean,
      default: false
    },
    withCounter: {
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
