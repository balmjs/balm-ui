import { MDCList } from '../../material-components-web/list';

// Define constants
const UI_LIST = {
  EVENT: {
    CHANGE: 'change'
  }
};

export default {
  model: {
    prop: 'selectedIndex',
    event: UI_LIST.EVENT.CHANGE
  },
  props: {
    // States
    selectedIndex: {
      type: Number,
      default: -1
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
    this.$nextTick(() => {
      this.$list = new MDCList(this.$el);

      if (this.singleSelection) {
        this.$list.singleSelection = true;
      }

      const selectedIndex = this.$list.foundation_.selectedIndex_;
      if (selectedIndex !== this.selectedIndex) {
        this.$emit(UI_LIST.EVENT.CHANGE, selectedIndex);
      }
    });
  },
  methods: {
    onChange() {
      this.$nextTick(() => {
        this.$emit(UI_LIST.EVENT.CHANGE, this.$list.foundation_.selectedIndex_);
      });
    }
  }
};
