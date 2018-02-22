<template>
  <div :class="[menuClassName, positionClassName]" tabindex="-1">
    <ul class="mdc-menu__items mdc-list" role="menu" aria-hidden="true">
      <slot>
        <template v-for="item in currentMenu">
          <ui-item-divider v-if="item === DIVIDER">
          </ui-item-divider>
          <ui-menuitem v-else :item="(getType(item) === 'object') ? item : {}">
            {{ (getType(item) === 'string') ? item : '' }}
          </ui-menuitem>
        </template>
      </slot>
    </ul>
  </div>
</template>

<script>
import { MDCMenu } from '../../../material-components-web/menu';
import getType from '../../helpers/typeof';
import UiMenuItem from './menuitem';
import UiItemDivider from '../list/item-divider';

const DIVIDER = '-';
const POSITIONS = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
const MDC_EVENT_SELECTED = 'MDCMenu:selected';
const MDC_EVENT_CANCEL = 'MDCMenu:cancel';
const UI_EVENT_SELECTED = 'selected';
const UI_EVENT_CANCEL = 'cancel';

export default {
  name: 'ui-menu',
  components: {
    UiMenuItem,
    UiItemDivider
  },
  props: {
    // state
    open: {
      type: Boolean,
      default: false
    },
    menu: {
      type: Array,
      default: function() {
        return [];
      }
    },
    // ui attributes
    cssOnly: {
      type: Boolean,
      default: false
    },
    position: {
      type: [Number, String],
      default: 0
    },
    // theme
    dark: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      DIVIDER,
      getType,
      $menu: null,
      currentMenu: this.menu
    };
  },
  computed: {
    menuClassName() {
      return {
        'mdc-menu': true,
        'mdc-menu--theme-dark': this.dark
      };
    },
    positionClassName() {
      let currentPositon =
        getType(this.position) === 'string'
          ? POSITIONS.indexOf(this.position) + 1
          : this.position;

      let currentPositonName =
        currentPositon > 0 && currentPositon <= POSITIONS.length
          ? POSITIONS[currentPositon - 1]
          : false;

      let className = currentPositonName
        ? `mdc-menu--open-from-${currentPositonName}`
        : '';

      return className;
    }
  },
  watch: {
    open(val) {
      if (val) {
        this.$menu.show();
      }
    },
    menu(val) {
      this.currentMenu = val;
    }
  },
  mounted() {
    if (!this.$menu && !this.cssOnly) {
      this.$menu = new MDCMenu(this.$el);
      this.handlingSelection();
    }
  },
  methods: {
    handlingSelection() {
      this.$el.addEventListener(MDC_EVENT_SELECTED, ({ detail }) => {
        let item = detail.item;
        this.$emit(UI_EVENT_SELECTED, {
          item, // HTMLElement
          index: detail.index, // number
          label: item.textContent.trim() // string
        });
      });

      this.$el.addEventListener(MDC_EVENT_CANCEL, () => {
        this.$emit(UI_EVENT_CANCEL);
      });
    }
  }
};
</script>
