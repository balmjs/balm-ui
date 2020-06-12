// For the form element in component
export default {
  props: {
    // Element attributes
    id: {
      type: String,
      default: ''
    },
    attrs: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
