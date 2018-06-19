<template>
  <div class="mdc-menu-anchor" :style="positionStyle">
    <slot></slot>
  </div>
</template>

<script>
import getType from '../../helpers/typeof';

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
    position: {
      type: String,
      default: ''
    }
  },
  computed: {
    positionStyle() {
      let result = '';

      if (BUTTON_POSITIONS.includes(this.position)) {
        let positions = this.position.split(' ');

        if (positions[0] === 'middle') {
          result = `top:35%;${positions[1]}:0`;
        } else {
          result = positions.map(position => `${position}:0`).join(';');
        }
      }

      console.log(result);

      return result;
    }
  }
};
</script>
