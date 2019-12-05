export default {
  props: {
    // Element attributes
    id: {
      type: String,
      required: true
    },
    // UI attributes
    visible: {
      type: Boolean,
      default: false
    },
    validMsg: {
      type: String,
      default: ''
    }
  }
};
