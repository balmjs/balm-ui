const TYPE = {
  MENU: 'menu',
  ICON: 'icon'
};

export default {
  props: {
    // UI attributes
    type: {
      type: String,
      default: TYPE.ICON
    }
  },
  computed: {
    isMenu() {
      return this.type.toLowerCase() === TYPE.MENU;
    },
    className() {
      return [
        'material-icons',
        this.isMenu ? 'mdc-toolbar__menu-icon' : 'mdc-toolbar__icon'
      ];
    }
  }
};
