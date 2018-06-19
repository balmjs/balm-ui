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
        'mdc-list-divider': true,
        'mdc-list-divider--padded': this.padded,
        'mdc-list-divider--inset': this.inset
      };
    }
  }
};
