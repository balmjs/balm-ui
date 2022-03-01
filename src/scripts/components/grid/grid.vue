<template>
  <div :class="className">
    <ui-grid-inner>
      <slot></slot>
    </ui-grid-inner>
  </div>
</template>

<script>
// Define grid constants
const name = 'UiGrid';

const UI_GRID = {
  POSITIONS: ['left', 'right']
};

export default {
  name,
  customOptions: {
    name,
    UI_GRID
  }
};
</script>

<script setup>
import { computed } from 'vue';
import UiGridInner from './grid-inner.vue';

const props = defineProps({
  // UI attributes
  fixedColumnWidth: {
    type: Boolean,
    default: false
  },
  position: {
    type: String,
    default: ''
  }
});

const className = computed(() => {
  let result = ['mdc-layout-grid'];

  if (props.fixedColumnWidth) {
    result.push('mdc-layout-grid--fixed-column-width');
  }

  // mdc-layout-grid--align-<GRID_POSITION>
  if (props.position) {
    const gridPosition = props.position;
    if (UI_GRID.POSITIONS.includes(gridPosition)) {
      result.push(`mdc-layout-grid--align-${gridPosition}`);
    } else {
      console.warn(`[${name}]: Invalid <GRID_POSITION>`);
    }
  }

  return result;
});
</script>
