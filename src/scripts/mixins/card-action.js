import getType from '../utils/typeof';

// Define card constants
const UI_CARD = {
  cssClasses: {
    action: 'mdc-card__actions',
    button: 'mdc-card__action-buttons',
    icon: 'mdc-card__action-icons'
  }
};

export default {
  data() {
    return {
      cardButton: false,
      cardIcon: false
    };
  },
  computed: {
    cardActionClassName() {
      return {
        'mdc-card__action': this.cardButton || this.cardIcon,
        'mdc-card__action--button': this.cardButton,
        'mdc-card__action--icon': this.cardIcon
      };
    }
  },
  mounted() {
    const parentEl = this.$parent.$el;
    if (parentEl && getType(parentEl) === 'htmldivelement') {
      this.cardButton =
        parentEl.classList.contains(UI_CARD.cssClasses.button) ||
        parentEl.classList.contains(UI_CARD.cssClasses.action);
      this.cardIcon = parentEl.classList.contains(UI_CARD.cssClasses.icon);
    }
  }
};
