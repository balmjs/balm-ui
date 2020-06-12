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
import UiGridInner from './grid-inner';
import getType from '../../utils/typeof';

// Define grid cell constants
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
  name: 'UiGridCell',
  components: {
    UiGridInner
  },
  props: {
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
  },
  computed: {
    className() {
      let result = [UI_GRID_CELL.cssClasses];

      // mdc-layout-grid__cell--span-<NUMBER_OF_COLUMNS>
      // mdc-layout-grid__cell--span-<NUMBER_OF_COLUMNS>-<TYPE_OF_DEVICE>
      if (this.columns) {
        result = this.handleCell(
          UI_GRID_CELL.TYPE.COLUMNS,
          result,
          this.columns
        );
      }

      // mdc-layout-grid__cell--order-<INDEX>
      if (this.order) {
        let orderIndex = +this.order;
        if (orderIndex >= 1 && orderIndex <= 12) {
          result = this.handleCell(UI_GRID_CELL.TYPE.ORDER, result, orderIndex);
        } else {
          console.warn('Order <INDEX> is an integer between 1 and 12');
        }
      }

      // mdc-layout-grid__cell--align-<POSITION>
      if (this.align) {
        let alignPosition = this.align.toLowerCase();
        if (UI_GRID_CELL.POSITION.includes(alignPosition)) {
          result = this.handleCell(
            UI_GRID_CELL.TYPE.ALIGN,
            result,
            alignPosition
          );
        }
      }

      return result;
    }
  },
  methods: {
    handleCell(type, result, data) {
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
  }
};
</script>
