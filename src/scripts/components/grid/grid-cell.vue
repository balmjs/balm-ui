<template>
  <div :class="className">
    <ui-grid-inner v-if="nested">
      <slot></slot>
    </ui-grid-inner>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<script>
// Define grid cell constants
const name = 'UiGridCell';

const UI_GRID_CELL = {
  cssClasses: 'mdc-layout-grid__cell',
  TYPE: {
    COLUMNS: 'span', // [1, 12]
    ORDER: 'order', // [1, 12]
    ALIGN: 'align'
  },
  TYPE_OF_DEVICE: ['desktop', 'tablet', 'phone'],
  POSITION: ['top', 'middle', 'bottom']
};

export default {
  name,
  customOptions: {
    UI_GRID_CELL
  }
};
</script>

<script setup>
import { computed } from 'vue';
import UiGridInner from './grid-inner.vue';
import getType from '../../utils/typeof';

const props = defineProps({
  // UI layout
  nested: {
    type: Boolean,
    default: false
  },
  // UI attributes
  columns: {
    type: [Number, String, Object],
    default: 4
  },
  order: {
    type: [Number, String],
    default: 0
  },
  align: {
    type: String,
    default: ''
  }
});

function handleCell(type, result, data) {
  if (getType(data) === 'object') {
    for (let key in data) {
      let value = data[key];
      if (UI_GRID_CELL.TYPE_OF_DEVICE.includes(key)) {
        result.push(`${UI_GRID_CELL.cssClasses}--${type}-${value}-${key}`);
      } else if (key === 'default') {
        result.push(`${UI_GRID_CELL.cssClasses}--${type}-${value}`);
      }
    }
  } else {
    let value = data;
    result.push(`${UI_GRID_CELL.cssClasses}--${type}-${value}`);
  }

  return result;
}

const className = computed(() => {
  let result = [UI_GRID_CELL.cssClasses];

  // mdc-layout-grid__cell--span-<NUMBER_OF_COLUMNS>
  // mdc-layout-grid__cell--span-<NUMBER_OF_COLUMNS>-<TYPE_OF_DEVICE>
  if (props.columns) {
    result = handleCell(UI_GRID_CELL.TYPE.COLUMNS, result, props.columns);
  }

  // mdc-layout-grid__cell--order-<INDEX>
  if (props.order) {
    let orderIndex = +props.order;
    if (orderIndex >= 1 && orderIndex <= 12) {
      result = handleCell(UI_GRID_CELL.TYPE.ORDER, result, orderIndex);
    } else {
      console.warn(`[${name}]: Order <INDEX> is an integer between 1 and 12`);
    }
  }

  // mdc-layout-grid__cell--align-<POSITION>
  if (props.align) {
    let alignPosition = props.align.toLowerCase();
    if (UI_GRID_CELL.POSITION.includes(alignPosition)) {
      result = handleCell(UI_GRID_CELL.TYPE.ALIGN, result, alignPosition);
    }
  }

  return result;
});
</script>
