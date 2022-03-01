<template>
  <div :class="className" :style="positionStyle">
    <slot></slot>
  </div>
</template>

<script>
// Define anchors and positioning constants
const name = 'UiMenuAnchor';

const ANCHOR_POSITIONS = [
  'top left',
  'top right',
  'middle left',
  'middle right',
  'bottom left',
  'bottom right'
];

export default {
  name,
  customOptions: {
    name,
    ANCHOR_POSITIONS
  }
};
</script>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  // UI attributes
  position: {
    type: String,
    default: ''
  },
  absolute: {
    type: Boolean,
    default: false
  }
});

const className = computed(() => ({
  'mdc-menu-surface--anchor': true,
  'mdc-menu-surface--absolute': props.absolute
}));
const positionStyle = computed(() => {
  let result = '';
  let anchorPosition = props.position;

  if (anchorPosition) {
    if (ANCHOR_POSITIONS.includes(anchorPosition)) {
      let positions = anchorPosition.split(' ');

      if (positions[0] === 'middle') {
        result = `top:50%;${positions[1]}:0;transform:translateY(-50%);`;
      } else {
        result = positions.map((position) => `${position}:0`).join(';');
      }
    } else {
      console.warn(`[${name}]: Invalid anchor position`);
    }
  }

  return result;
});
</script>
