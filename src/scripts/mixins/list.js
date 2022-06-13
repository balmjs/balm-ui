import { MDCList } from '../../material-components-web/list';
import {
  strings,
  deprecatedClassNameMap
} from '../../material-components-web/list/constants';
import typeMixin from './type';
import rippleMixin from './ripple';
import { UI_LIST, UI_ITEM } from '../components/list/constants';

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
      $list: null,
      role: null
    };
  },
  computed: {
    isTwoLine() {
      return this.checkType(UI_LIST.TYPES, 'twoLine');
    },
    className() {
      return [
        deprecatedClassNameMap['mdc-list'],
        {
          'mdc-deprecated-list--two-line': this.isTwoLine,
          'mdc-deprecated-list--non-interactive': this.nonInteractive,
          'mdc-deprecated-list--dense': this.dense,
          'mdc-deprecated-list--avatar-list': this.avatar
        }
      ];
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

    this.$list.listen(strings.ACTION_EVENT, ({ detail }) => {
      this.$emit(UI_LIST.EVENT.ACTION, detail.index);
    });

    if (this.singleSelection && ~this.selectedIndex) {
      this.$list.singleSelection = true;
      this.$list.selectedIndex = this.selectedIndex;
    }

    // Making lists accessible
    this.role =
      this.$el.getAttribute('role') ||
      (this.singleSelection ? 'listbox' : 'list');

    // For `<ui-drawer type="modal">` focus management
    this.focusTrapOnDrawer();
  },
  updated() {
    if (this.$list) {
      if (this.singleSelection && ~this.selectedIndex) {
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
    focusTrapOnDrawer() {
      if (
        this.$parent.$el &&
        this.$parent.$el.classList.contains('mdc-drawer__content') &&
        this.$list.listElements.length
      ) {
        const currentItem =
          this.$list.listElements.find(
            (item) =>
              item.classList.contains(UI_ITEM.cssClasses.active) ||
              item.classList.contains(
                deprecatedClassNameMap['mdc-list-item--activated']
              )
          ) || this.$list.listElements[0];

        // Solution - https://github.com/material-components/material-components-web/issues/5615
        currentItem.setAttribute('tabindex', 0);
      }
    }
  }
};
