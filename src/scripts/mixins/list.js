import { MDCList } from '../../material-components-web/list';

export default {
  props: {
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
    },
    twoLine: {
      type: Boolean,
      default: false
    },
    singleSelection: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      $list: null
    };
  },
  computed: {
    className() {
      return {
        'mdc-list': true,
        'mdc-list--non-interactive': this.nonInteractive,
        'mdc-list--dense': this.dense,
        'mdc-list--avatar-list': this.avatar,
        'mdc-list--two-line': this.twoLine
      };
    }
  },
  mounted() {
    if (!this.$list) {
      this.$list = new MDCList(this.$el);
      if (this.singleSelection) {
        this.$list.singleSelection = true;
      }
    }
  }
};
