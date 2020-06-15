import { MDCList } from '../../material-components-web/list';
import typeMixin from './type';
import rippleMixin from './ripple';
import UI_LIST from '../components/lists/constants';

export default {
  mixins: [typeMixin, rippleMixin],
  model: {
    prop: 'selectedIndex',
    event: UI_LIST.EVENT.ACTION
  },
  props: {
    // UI variants
    type: {
      type: [String, Number],
      default: 1
    },
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
      $list: null,
      role: null
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
    this.$list = new MDCList(this.$el);

    this.$list.listen(`MDCList:${UI_LIST.EVENT.ACTION}`, ({ detail }) => {
      this.$emit(UI_LIST.EVENT.ACTION, detail.index);
    });

    if (this.singleSelection && this.selectedIndex > -1) {
      this.$list.singleSelection = true;
      this.$list.selectedIndex = this.selectedIndex;
    }

    // Making lists accessible
    this.role =
      this.$el.getAttribute('role') ||
      (this.singleSelection ? 'listbox' : 'list');

    // For `<ui-drawer type="modal">` focus management
    this.fix4Drawer();
  },
  updated() {
    if (this.$list) {
      if (this.singleSelection && this.selectedIndex > -1) {
        this.$list.selectedIndex = this.selectedIndex;
      }

      if (!this.nonInteractive) {
        this.$list.listElements.forEach((listItemEl) => {
          this.initRipple(listItemEl);

          let itemRole = listItemEl.getAttribute('role');
          if (itemRole === 'checkbox' || itemRole === 'radio') {
            this.$list.layout();
          }
        });
      }
    }
  },
  methods: {
    fix4Drawer() {
      if (
        this.$parent.$el &&
        this.$parent.$el.classList.contains('mdc-drawer__content') &&
        this.$list.listElements.length
      ) {
        const currentItem =
          this.$list.listElements.find(
            (item) =>
              item.classList.contains(UI_LIST.cssClasses.active) ||
              item.classList.contains('router-link-active')
          ) || this.$list.listElements[0];

        // Solution - https://github.com/material-components/material-components-web/issues/5615
        currentItem.setAttribute('tabindex', 0);
      }
    }
  }
};
