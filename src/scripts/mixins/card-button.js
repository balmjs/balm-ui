// Define constants
const UI_CARD = {
  CLASSNAME: {
    BUTTON: 'mdc-card__action-buttons',
    ICON: 'mdc-card__action-icons'
  }
};

export default {
  data() {
    return {
      actionButton: false,
      actionIcon: false
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
  },
  created() {
    this.$parent.$nextTick(() => {
      this.actionButton = this.$parent.$el.classList.contains(UI_CARD.CLASSNAME.BUTTON);
      this.actionIcon = this.$parent.$el.classList.contains(UI_CARD.CLASSNAME.ICON);
    });
  }
};
