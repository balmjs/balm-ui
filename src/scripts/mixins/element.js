// For the form element in component
export default {
  props: {
    // Element attributes
    id: {
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
