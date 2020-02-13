import UI_CARD from '../components/cards/constants';

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
  created() {
    this.$parent.$nextTick(() => {
      const parentEl = this.$parent.$el;

      this.cardButton =
        parentEl.classList.contains(UI_CARD.cssClasses.button) ||
        parentEl.classList.contains(UI_CARD.cssClasses.action);
      this.cardIcon = parentEl.classList.contains(UI_CARD.cssClasses.icon);
    });
  }
};
