export default {
  props: {
    // An action button with text
    actionButton: {
      type: Boolean,
      default: false
    },
    // An action icon with no text
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
