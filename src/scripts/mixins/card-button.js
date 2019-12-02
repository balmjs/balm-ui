// Define card constants
const UI_CARD = {
  cssClasses: {
    ACTION: 'mdc-card__actions',
    BUTTON: 'mdc-card__action-buttons',
    ICON: 'mdc-card__action-icons'
  }
};

export default {
  data() {
    return {
      actionButton: false,
      actionIcon: false
    };
  },
  computed: {
    actionClassName() {
      return {
        'mdc-card__action': this.actionButton || this.actionIcon,
        'mdc-card__action--button': this.actionButton,
        'mdc-card__action--icon': this.actionIcon
      };
    }
  },
  created() {
    this.$parent.$nextTick(() => {
      const parentEl = this.$parent.$el;

      this.actionButton =
        parentEl.classList.contains(UI_CARD.cssClasses.BUTTON) ||
        parentEl.classList.contains(UI_CARD.cssClasses.ACTION);
      this.actionIcon = parentEl.classList.contains(UI_CARD.cssClasses.ICON);
    });
  }
};
