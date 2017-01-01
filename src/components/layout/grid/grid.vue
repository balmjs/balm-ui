<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
import {isString} from '../../utils/helper';

const MODE = ['', 'phone', 'tablet', 'desktop'];
const MODE_PHONE = 1;
const MODE_TABLET = 2;
const MODE_DESKTOP = 3;

export default {
  name: 'ui-grid',
  props: {
    mode: {
      type: [Number, String],
      default: 0
    },
    // Modifies the grid cells to have no margin between them.
    noSpacing: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdl-grid': true,
        'mdl-grid--no-spacing': this.noSpacing
      };
    },
    currentMode() {
      return isString(this.mode) ? MODE[MODE.indexOf(this.mode)] : MODE[+this.mode];
    }
  }
};
</script>
