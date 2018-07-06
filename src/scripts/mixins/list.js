export default {
  props: {
    // UI attributes
    nonInteractive: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    avatar: {
      type: Boolean,
      default: false
    },
    twoLine: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-list': true,
        'mdc-list--non-interactive': this.nonInteractive,
        'mdc-list--dense': this.dense,
        'mdc-list--avatar-list': this.avatar,
        'mdc-list--two-line': this.twoLine
      };
    }
  }
};
