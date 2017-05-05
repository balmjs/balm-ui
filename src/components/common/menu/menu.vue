<template>
  <div :class="[menuClassName, positionClassName]" tabindex="-1">
    <ul class="mdc-simple-menu__items mdc-list" role="menu" aria-hidden="true">
      <slot>
        <template v-for="(item, index) in currentMenu">
          <ui-separator v-if="item.hr || item.divider || item.separator"></ui-separator>
          <ui-menuitem v-else :item="item"></ui-menuitem>
        </template>
      </slot>
    </ul>
  </div>
</template>

<script>
import {MDCSimpleMenu} from '../../../material-components-web/menu';
import {isString} from '../../utils/helper';
import UiMenuItem from './menuitem';
import UiSeparator from './separator';

const POSITIONS = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
const MDC_EVENT_SELECTED = 'MDCSimpleMenu:selected';
const MDC_EVENT_CANCEL = 'MDCSimpleMenu:cancel';
const UI_EVENT_SELECTED = 'selected';
const UI_EVENT_CANCEL = 'cancel';

export default {
  name: 'ui-menu',
  components: {
    UiMenuItem,
    UiSeparator
  },
  props: {
    // mdc
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
      this.$el.addEventListener(MDC_EVENT_SELECTED, evt => {
        let detail = evt.detail;
        this.$emit(UI_EVENT_SELECTED, detail);
      });

      this.$el.addEventListener(MDC_EVENT_CANCEL, () => {
        this.$emit(UI_EVENT_CANCEL);
      });
    }
  },
  mounted() {
    if (!this.$menu) {
      this.$menu = new MDCSimpleMenu(this.$el);
    }
    this.handlingSelection();
    if (this.open) {
      this.$menu.show();
    }
  }
};
</script>
