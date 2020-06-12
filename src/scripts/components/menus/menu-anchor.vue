<template>
  <div :class="className" :style="positionStyle">
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
  name: 'UiMenuAnchor',
  props: {
    // UI attributes
    position: {
      type: String,
      default: ''
    },
    absolute: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-menu-surface--anchor': true,
        'mdc-menu-surface--absolute': this.absolute
      };
    },
    positionStyle() {
      let result = '';
      let anchorPosition = this.position;

      if (anchorPosition) {
        if (ANCHOR_POSITIONS.includes(anchorPosition)) {
          let positions = anchorPosition.split(' ');

          if (positions[0] === 'middle') {
            result = `top:50%;${positions[1]}:0;transform:translateY(-50%);`;
          } else {
            result = positions.map((position) => `${position}:0`).join(';');
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
