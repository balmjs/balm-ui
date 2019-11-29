import UI_LIST from '../components/list/constants';

export default {
  props: {
    type: {
      type: [Number, String],
      default: UI_LIST.TYPES.singleLine // 1
    },
    // UI attributes
    nonInteractive: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    avatar: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-list': true,
        'mdc-list--two-line': +this.type === UI_LIST.TYPES.twoLine, // 2
        'mdc-list--non-interactive': this.nonInteractive,
        'mdc-list--dense': this.dense,
        'mdc-list--avatar-list': this.avatar
      };
    }
  }
};
