<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
import getType from '../../helpers/typeof';

// Define constants
const UI_GRID_CELL = {
  CLASSNAME: 'mdc-layout-grid__cell',
  TYPE: {
    COLSPAN: 'span', // [1, 12]
    ORDER: 'order', // [1, 12]
    ALIGN: 'align'
  },
  TYPE_OF_DEVICE: ['desktop', 'tablet', 'phone'],
  ALIGN_POSITION: ['top', 'middle', 'bottom']
};

export default {
  name: 'ui-grid-cell',
  props: {
    // UI attributes
    colspan: [Number, String, Object], // default: 4
    order: [Number, String],
    align: String
  },
  computed: {
    className() {
      let result = [UI_GRID_CELL.CLASSNAME];

      // Optional, specifies the number of columns the cell spans
      // mdc-layout-grid__cell--span-<NUMBER_OF_COLUMNS>
      // Optional, specifies the number of columns the cell spans on a type of device (desktop, tablet, phone)
      // mdc-layout-grid__cell--span-<NUMBER_OF_COLUMNS>-<TYPE_OF_DEVICE>
      if (this.colspan) {
        result = this.handleCell(
          UI_GRID_CELL.TYPE.COLSPAN,
          result,
          this.colspan
        );
      }

      // Optional, specifies the order of the cell
      // mdc-layout-grid__cell--order-<INDEX>
      if (this.order) {
        let orderIndex = +this.order;
        if (orderIndex >= 1 && orderIndex <= 12) {
          result = this.handleCell(UI_GRID_CELL.TYPE.ORDER, result, orderIndex);
        } else {
          console.warn('Order <INDEX> is an integer between 1 and 12');
        }
      }

      // Optional, specifies the alignment of cell
      // mdc-layout-grid__cell--align-<POSITION>
      if (this.align) {
        let alignPosition = this.align.toLowerCase();
        if (UI_GRID_CELL.ALIGN_POSITION.includes(alignPosition)) {
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
            result.push(`${UI_GRID_CELL.CLASSNAME}--${type}-${value}-${key}`);
          } else if (key === 'default') {
            result.push(`${UI_GRID_CELL.CLASSNAME}--${type}-${value}`);
          }
        }
      } else {
        let value = data;
        result.push(`${UI_GRID_CELL.CLASSNAME}--${type}-${value}`);
      }

      return result;
    }
  }
};
</script>
