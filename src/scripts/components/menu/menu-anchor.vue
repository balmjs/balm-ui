<template>
  <div class="mdc-menu-anchor" :style="positionStyle">
    <slot></slot>
  </div>
</template>

<script>
import getType from '../../helpers/typeof';

// Define constants
const BUTTON_POSITIONS = [
  'top left',
  'top right',
  'middle left',
  'middle right',
  'bottom left',
  'bottom right'
];

export default {
  name: 'ui-menu-anchor',
  props: {
    // UI attributes
    position: String
  },
  computed: {
    positionStyle() {
      let result = '';
      let buttonPosition = this.position;

      if (buttonPosition) {
        if (BUTTON_POSITIONS.includes(buttonPosition)) {
          let positions = buttonPosition.split(' ');

          if (positions[0] === 'middle') {
            result = `top:35%;${positions[1]}:0`;
          } else {
            result = positions.map(position => `${position}:0`).join(';');
          }
        } else {
          console.warn('Invalid button position');
        }
      }

      return result;
    }
  }
};
</script>
