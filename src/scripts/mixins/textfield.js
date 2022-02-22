const textfieldProps = {
  label: {
    type: String,
    default: ''
  },
  // common attributes
  placeholder: {
    type: [String, null],
    default: null
  },
  disabled: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  // UI attributes
  fullwidth: {
    type: Boolean,
    default: false
  },
  endAligned: {
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
};

export { textfieldProps };
