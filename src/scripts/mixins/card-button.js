import UI_CARD from '../components/card/constants';

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
        parentEl.classList.contains(UI_CARD.cssClasses.button) ||
        parentEl.classList.contains(UI_CARD.cssClasses.action);
      this.actionIcon = parentEl.classList.contains(UI_CARD.cssClasses.icon);
    });
  }
};
