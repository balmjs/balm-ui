import { MDCList } from '../../material-components-web/list';
import { strings } from '../../material-components-web/list/constants';
import domMixin from './dom';
import typeMixin from './type';
import rippleMixin from './ripple';
import { getCurrentElement } from '../mixins/dom';
import { UI_LIST, UI_ITEM } from '../components/list/constants';

export default {
  mixins: [domMixin, typeMixin, rippleMixin],
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
    modelValue: {
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
  emits: [UI_LIST.EVENT.ACTION],
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
    modelValue(val) {
      if (this.$list) {
        this.$list.selectedIndex = val;
      }
    }
  },
  mounted() {
    this.$list = new MDCList(this.el);

    this.$list.listen(strings.ACTION_EVENT, ({ detail }) => {
      this.$emit(UI_LIST.EVENT.ACTION, detail.index);
    });

    if (this.singleSelection && this.modelValue > -1) {
      this.$list.singleSelection = true;
      this.$list.selectedIndex = this.modelValue;
    }

    // Making lists accessible
    this.role =
      this.el.getAttribute('role') ||
      (this.singleSelection ? 'listbox' : 'list');

    // For `<ui-drawer type="modal">` focus management
    this.focusTrapOnDrawer();
  },
  updated() {
    if (this.$list) {
      if (this.singleSelection && this.modelValue > -1) {
        this.$list.selectedIndex = this.modelValue;
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
      if (this.$parent.$el) {
        const parentEl = getCurrentElement(this.$parent.$el);

        if (
          parentEl &&
          parentEl.classList.contains('mdc-drawer__content') &&
          this.$list.listElements.length
        ) {
          const currentItem =
            this.$list.listElements.find(
              (item) =>
                item.classList.contains(UI_ITEM.cssClasses.active) ||
                item.classList.contains('mdc-list-item--activated')
            ) || this.$list.listElements[0];

          // Solution - https://github.com/material-components/material-components-web/issues/5615
          currentItem.setAttribute('tabindex', 0);
        }
      }
    }
  }
};
