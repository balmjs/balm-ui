export default {
  props: {
    // UI attributes
    padded: {
      type: Boolean,
      default: false
    },
    inset: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-deprecated-list-divider': true,
        'mdc-deprecated-list-divider--padded': this.padded,
        'mdc-deprecated-list-divider--inset': this.inset
      };
    }
  }
};
