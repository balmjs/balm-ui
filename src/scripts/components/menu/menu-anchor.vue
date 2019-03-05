<template>
  <div class="mdc-menu-surface--anchor" :style="positionStyle">
    <slot></slot>
  </div>
</template>

<script>
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
    position: String,
    middleValue: {
      type: String,
      default: '35%'
    }
  },
  computed: {
    positionStyle() {
      let result = '';
      let buttonPosition = this.position;

      if (buttonPosition) {
        if (BUTTON_POSITIONS.includes(buttonPosition)) {
          let positions = buttonPosition.split(' ');

          if (positions[0] === 'middle') {
            result = `top:${this.middleValue};${positions[1]}:0`;
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
