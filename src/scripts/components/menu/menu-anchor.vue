<template>
  <div class="mdc-menu-anchor" :style="positionStyle">
    <slot></slot>
  </div>
</template>

<script>
import {isString} from '../../helpers/typeof';

const POSITIONS = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

export default {
  name: 'ui-menu-anchor',
  props: {
    // ui attributes
    position: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    positionStyle() {
      let currentPositon = isString(this.position)
        ? POSITIONS.indexOf(this.position) + 1
        : this.position;

      let currentPositonName = (currentPositon > 0 && currentPositon <= POSITIONS.length)
        ? POSITIONS[currentPositon - 1]
        : false;

      let styles = [];
      if (currentPositonName) {
        currentPositonName.split('-').forEach(positionName => {
          styles.push(`${positionName}:0;`);
        });
      }

      return styles.join(' ');
    }
  }
};
</script>
