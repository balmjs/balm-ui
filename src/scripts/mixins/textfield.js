export default {
  props: {
    // common attributes
    placeholder: {
      type: [String, null],
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // UI attributes
    fullwidth: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
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
