<template>
  <div class="mdl-menu-container">
    <button ref="button"
      class="mdl-button mdl-js-button mdl-button--icon"
      :id="`menu-${name}`">
      <slot name="icon">
        <i class="material-icons">icon</i>
      </slot>
    </button>
    <ul ref="menu"
      :class="[className.outer, positionClassName]"
      :for="`menu-${name}`" @click="handleMenu">
      <slot>
        <ui-menuitem v-for="item in currentMenu"
          :item="item"
          @click.native="handleItem(item)"></ui-menuitem>
      </slot>
    </ul>
  </div>
</template>

<script>
import '../../../material-design-lite/menu/menu';
import {generateRandomAlphaNum, observeMutationSupport} from '../../utils/helper';
import UiMenuItem from './menuitem';

const POSITIONS = ['', 'top-left', 'top-right', 'bottom-right'];
const POSITION_NONE = 0; // Default
const POSITION_TOP_LEFT = 1; // Positions menu above button, aligns left edge of menu with button
const POSITION_TOP_RIGHT = 2; // Positions menu above button, aligns right edge of menu with button
const POSITION_BOTTOM_LEFT = POSITION_NONE; // Positions menu below button, aligns left edge of menu with button
const POSITION_BOTTOM_RIGHT = 3; // Positions menu below button, aligns right edge of menu with button
const EVENT_CLICKED = 'clicked';

export default {
  name: 'ui-menu',
  components: {
    UiMenuItem
  },
  props: {
    name: {
      type: String,
      default: function() {
        return generateRandomAlphaNum(7);
      }
    },
    menu: {
      type: Array,
      default: function() {
        return [];
      }
    },
    // Modifies an item to have a full bleed divider between it and the next list item.
    divider: {
      type: Boolean,
      default: false
    },
    // Applies ripple click effect to option links
    effect: {
      type: Boolean,
      default: false
    },
    position: {
      type: Number,
      default: POSITION_BOTTOM_LEFT
    },
    // just for '<ui-select>'
    isSelect: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      currentMenu: this.menu
    };
  },
  computed: {
    className() {
      return {
        outer: {
          'mdl-menu': true,
          'mdl-js-menu': true
        },
        inner: {
          'mdl-menu__item': true,
          'mdl-menu__item--full-bleed-divider': this.divider,
          'mdl-js-ripple-effect': this.effect
        }
      };
    },
    positionClassName() {
      let currentPositon = (this.position > 0 && this.position < POSITIONS.length)
        ? POSITIONS[this.position]
        : POSITION_NONE;
      let className = currentPositon ? `mdl-menu--${currentPositon}` : '';
      return className;
    }
  },
  watch: {
    menu(val) {
      this.currentMenu = val;
    }
  },
  methods: {
    handleMenu() {
      this.$refs.menu.MaterialMenu.hide();
    },
    handleItem(data) {
      if (!data.disabled) {
        this.$emit(EVENT_CLICKED, data);
      }
    }
  },
  mounted() {
    this.$ui.upgradeElement(this.$refs.button, 'MaterialButton');
    this.$ui.upgradeElement(this.$refs.menu, 'MaterialMenu');

    if (this.isSelect && observeMutationSupport) {
      const callback = records => {
        if (this.currentMenu.length) {
          this.$parent.isExpand = !(records[0].oldValue.indexOf('is-visible') > -1);
        }
      };

      let mo = new MutationObserver(callback);
      let element = this.$el.querySelector('.mdl-menu__container');
      let options = {
        'attributes': true,
        'attributeOldValue': true,
        'attributeFilter': ['class']
      }

      mo.observe(element, options);
    }
  }
};
</script>
