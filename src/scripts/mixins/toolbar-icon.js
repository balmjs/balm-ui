import UI_GLOBAL from '../config/constants';

// Define constants
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
        UI_GLOBAL.mdi,
        this.isMenu ? 'mdc-toolbar__menu-icon' : 'mdc-toolbar__icon'
      ];
    }
  }
};
