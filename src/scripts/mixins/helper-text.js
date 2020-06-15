export default {
  props: {
    // Element attributes
    id: {
      type: [String, null],
      default: null
    },
    // UI attributes
    visible: {
      type: Boolean,
      default: false
    },
    validMsg: {
      type: [Boolean, String],
      default: false
    }
  }
};
