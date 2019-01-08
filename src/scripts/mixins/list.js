import { MDCList } from '../../material-components-web/list';

// Define constants
const UI_LIST = {
  TYPES: {
    singleLine: 1,
    twoLine: 2,
    threeLine: 3 // TODO
  },
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
    type: {
      type: [Number, String],
      default: 1
    },
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
        'mdc-list--two-line': +this.type === UI_LIST.TYPES.twoLine
      };
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$list = new MDCList(this.$el);

      if (this.singleSelection) {
        this.$list.singleSelection = true;
      }

      const selectedIndex = this.$list.selectedIndex;
      if (selectedIndex !== this.selectedIndex) {
        this.$emit(UI_LIST.EVENT.CHANGE, selectedIndex);
      }
    });
  },
  methods: {
    onChange() {
      this.$nextTick(() => {
        this.$emit(UI_LIST.EVENT.CHANGE, this.$list.selectedIndex);
      });
    }
  }
};
