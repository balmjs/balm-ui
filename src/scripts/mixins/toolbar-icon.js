const TYPE_MENU = 'menu';
const TYPE_ICON = 'icon';

export default {
  props: {
    // ui attributes
    type: {
      type: String,
      default: TYPE_ICON
    }
  },
  computed: {
    isMenu() {
      return this.type.toLowerCase() === TYPE_MENU;
    },
    className() {
      return [
        'material-icons',
        this.isMenu ? 'mdc-toolbar__menu-icon' : 'mdc-toolbar__icon'
      ];
    }
  }
};
