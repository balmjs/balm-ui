<template>
  <div :class="[menuClassName, positionClassName]" tabindex="-1">
    <ul class="mdc-simple-menu__items mdc-list" role="menu" aria-hidden="true">
      <slot>
        <template v-for="(item, index) in currentMenu">
          <ui-item-divider v-if="item === DIVIDER">
          </ui-item-divider>
          <ui-menuitem v-else :item="isObject(item) ? item : {}">
            {{ isString(item) ? item : '' }}
          </ui-menuitem>
        </template>
      </slot>
    </ul>
  </div>
</template>

<script>
import {MDCSimpleMenu} from '../../../material-components-web/menu';
import {isString, isObject} from '../../helpers';
import UiMenuItem from './menuitem';
import UiItemDivider from '../list/item-divider';

const DIVIDER = '-';
const POSITIONS = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
const MDC_EVENT_SELECTED = 'MDCSimpleMenu:selected';
const MDC_EVENT_CANCEL = 'MDCSimpleMenu:cancel';
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
      isString,
      isObject,
      $menu: null,
      currentMenu: this.menu
    };
  },
  computed: {
    menuClassName() {
      return {
        'mdc-simple-menu': true,
        'mdc-simple-menu--theme-dark': this.dark
      };
    },
    positionClassName() {
      let currentPositon = isString(this.position)
        ? POSITIONS.indexOf(this.position) + 1
        : this.position;

      let currentPositonName = (currentPositon > 0 && currentPositon <= POSITIONS.length)
          ? POSITIONS[currentPositon - 1]
          : false;

      let className = currentPositonName
        ? `mdc-simple-menu--open-from-${currentPositonName}`
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
  methods: {
    handlingSelection() {
      this.$el.addEventListener(MDC_EVENT_SELECTED, ({detail}) => {
        this.$emit(UI_EVENT_SELECTED, {
          index: detail.index,
          item: detail.item.textContent.trim()
        });
      });

      this.$el.addEventListener(MDC_EVENT_CANCEL, () => {
        this.$emit(UI_EVENT_CANCEL);
      });
    }
  },
  mounted() {
    if (!this.$menu && !this.cssOnly) {
      this.$menu = new MDCSimpleMenu(this.$el);
      this.handlingSelection();
    }
  }
};
</script>
