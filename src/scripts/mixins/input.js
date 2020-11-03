// For the form element in component
export default {
  props: {
    // Element attributes
    inputId: {
      type: [String, null],
      default: null
    },
    attrs: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
