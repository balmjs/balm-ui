<template>
  <div :class="className.container">
    <button ref="button"
      class="mdl-button mdl-js-button mdl-button--icon"
      :id="`menu${name}`">
      <slot name="icon">
        <i class="material-icons">icon</i>
      </slot>
    </button>
    <ul ref="menu"
      :class="[className.outer, positionClassName]"
      :for="`menu${name}`">
      <li ref="item"
        v-for="menu in currentData"
        :class="className.inner"
        :disabled="menu.disabled"
        @click="handleClick(menu)">
        <slot name="menu" :data="menu">{{ menu.name || menu }}</slot>
      </li>
    </ul>
  </div>
</template>

<script>
import '../../material-design-lite/menu/menu';
import '../../material-design-lite/ripple/ripple';

const POSITIONS = ['', 'top-left', 'top-right', 'bottom-right'];
const POSITION_NONE = 0; // Default
const POSITION_TOP_LEFT = 1; // Positions menu above button, aligns left edge of menu with button
const POSITION_TOP_RIGHT = 2; // Positions menu above button, aligns right edge of menu with button
const POSITION_BOTTOM_LEFT = POSITION_NONE; // Positions menu below button, aligns left edge of menu with button
const POSITION_BOTTOM_RIGHT = 3; // Positions menu below button, aligns right edge of menu with button
const CALLBACK_CLICKED = 'clicked';

export default {
  name: 'ui-menu',
  props: {
    name: {
      type: String,
      required: true
    },
    data: {
      type: Array,
      required: true
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
    }
  },
  data() {
    return {
      currentData: this.data
    };
  },
  computed: {
    className() {
      return {
        container: [
          'mdl-menu-container',
          `menu${this.name}`
        ],
        outer: {
          'mdl-menu': true,
          'mdl-js-menu': true,
          'mdl-js-ripple-effect': this.effect
        },
        inner: {
          'mdl-menu__item': true,
          'mdl-menu__item--full-bleed-divider': this.divider
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
    data(val) {
      this.currentData = val;
    }
  },
  methods: {
    handleClick(data) {
      if (!data.disabled) {
        this.$emit(CALLBACK_CLICKED, data);
      }
    }
  },
  mounted() {
    this.$ui.upgradeElement(this.$refs.button, 'MaterialButton');
    this.$ui.upgradeElement(this.$refs.menu, 'MaterialMenu');
    if (this.effect) {
      this.$ui.upgradeElement(this.$refs.menu, 'MaterialRipple');
      this.$ui.upgradeElements(this.$refs.item);
    }
  }
};
</script>
