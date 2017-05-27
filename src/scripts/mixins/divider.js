export default {
  props: {
    // ui attributes
    inset: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-list-divider': true,
        'mdc-list-divider--inset': this.inset
      };
    }
  }
};
