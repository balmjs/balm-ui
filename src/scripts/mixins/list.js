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
    },
    withCheckbox: {
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
    this.$list = new MDCList(this.$el);

    if (this.singleSelection) {
      this.$list.singleSelection = true;
    }

    if (this.withCheckbox) {
      this.$list.listElements_.forEach(item => {
        item.addEventListener('click', e => {
          this.clickHandler(e, item);
        });
      });
    }
  },
  methods: {
    onChange() {
      this.$nextTick(() => {
        this.$emit(UI_LIST.EVENT.CHANGE, this.$list.foundation_.selectedIndex_);
      });
    },
    clickHandler(evt, li) {
      if (evt.target === li) {
        let checkbox = li.querySelector('.mdc-checkbox__native-control');
        checkbox.checked = !checkbox.checked;
      }
    }
  }
};
