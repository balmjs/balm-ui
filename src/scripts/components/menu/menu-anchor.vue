<template>
  <div class="mdc-menu-surface--anchor" :style="positionStyle">
    <slot></slot>
  </div>
</template>

<script>
// Define anchors and positioning constants
const ANCHOR_POSITIONS = [
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
      default: '45%'
    }
  },
  computed: {
    positionStyle() {
      let result = '';
      let anchorPosition = this.position;

      if (anchorPosition) {
        if (ANCHOR_POSITIONS.includes(anchorPosition)) {
          let positions = anchorPosition.split(' ');

          if (positions[0] === 'middle') {
            result = `top:${this.middleValue};${positions[1]}:0`;
          } else {
            result = positions.map(position => `${position}:0`).join(';');
          }
        } else {
          console.warn('Invalid anchor position');
        }
      }

      return result;
    }
  }
};
</script>
