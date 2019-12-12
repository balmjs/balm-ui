import { MDCList } from '../../material-components-web/list';
import typeMixin from './type';
import rippleMixin from './ripple';
import UI_LIST from '../components/list/constants';

export default {
  mixins: [typeMixin, rippleMixin],
  model: {
    prop: 'selectedIndex',
    event: UI_LIST.EVENT.ACTION
  },
  props: {
    singleSelection: {
      type: Boolean,
      default: false
    },
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
    }
  },
  data() {
    return {
      UI_LIST,
      $list: null
    };
  },
  computed: {
    isTwoLine() {
      return this.checkType(UI_LIST.TYPES, 'twoLine');
    },
    className() {
      return {
        'mdc-list': true,
        'mdc-list--two-line': this.isTwoLine,
        'mdc-list--non-interactive': this.nonInteractive,
        'mdc-list--dense': this.dense,
        'mdc-list--avatar-list': this.avatar
      };
    }
  },
  watch: {
    selectedIndex(val) {
      if (this.$list) {
        this.$list.selectedIndex = val;
      }
    }
  },
  mounted() {
    this.init();
  },
  updated() {
    if (!this.$list) {
      this.init();
    }
  },
  methods: {
    init() {
      this.$list = new MDCList(this.$el);

      const listElements = this.$list.listElements;

      if (listElements.length) {
        if (!this.nonInteractive) {
          listElements.map(listItemEl => this.initRipple(listItemEl));
        }

        if (this.singleSelection) {
          this.$list.singleSelection = true;
          this.$list.selectedIndex = this.selectedIndex;
        }

        // TODO: has bug? Execute twice in <ui-dismissible-drawer> and <ui-modal-drawer>
        this.$list.listen(`MDCList:${UI_LIST.EVENT.ACTION}`, ({ detail }) => {
          this.$emit(UI_LIST.EVENT.ACTION, detail.index);
        });
      } else {
        this.$list = null;
      }
    }
  }
};
