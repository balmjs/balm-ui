import UI_LIST from '../components/list/constants';

export default {
  props: {
    // States
    selected: {
      type: Boolean,
      default: false
    },
    activated: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      let result = [UI_LIST.cssClasses.item];

      if (this.selected) {
        result.push(UI_LIST.cssClasses.selected);
      } else if (this.activated) {
        result.push(UI_LIST.cssClasses.activated);
      }

      return result;
    }
  }
};
