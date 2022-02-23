// For the form element in component
const inputProps = {
  // Element attributes
  inputId: {
    type: [String, null],
    default: null
  },
  attrs: {
    type: Object,
    default: () => ({})
  }
};

export { inputProps };
