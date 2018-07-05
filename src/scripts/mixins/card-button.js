export default {
  props: {
    // UI attributes
    actionButton: {
      type: Boolean,
      default: false
    },
    actionIcon: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    actionClassName() {
      return {
        'mdc-card__action': this.actionButton || this.actionIcon,
        'mdc-card__action--button': this.actionButton,
        'mdc-card__action--icon': this.actionIcon
      };
    }
  }
};
