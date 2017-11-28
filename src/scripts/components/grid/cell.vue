<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
import {isObject} from '../../helpers/typeof';

const CLASSNAME_CELL = 'mdc-layout-grid__cell';
const TYPE_SPAN = 'span'; // [1, 12]
const SCREEN_SIZE = ['desktop', 'tablet', 'phone'];
const TYPE_ORDER = 'order'; // [1, 12]
const TYPE_ALIGN = 'align';
const ALIGN_POSITION = ['top', 'middle', 'bottom'];

export default {
  name: 'ui-cell',
  props: {
    // ui attributes
    col: [Number, String, Object], // default: 4
    order: [Number, String],
    align: String
  },
  computed: {
    className() {
      let result = [CLASSNAME_CELL];

      // Optional, specifies the number of columns the cell spans
      // mdc-layout-grid__cell--span-<NUMBER_OF_COLUMNS>
      // Optional, specifies the number of columns the cell spans on a type of device (desktop, tablet, mobile)
      // mdc-layout-grid__cell--span-<NUMBER_OF_COLUMNS>-<TYPE_OF_DEVICE>
      if (this.col) {
        result = this.handleCell(TYPE_SPAN, result, this.col);
      }

      // Optional, specifies the order of the cell
      // mdc-layout-grid__cell--order-<INDEX>
      let currentOrder = +this.order;
      if (currentOrder >= 1 && currentOrder <= 12) {
        result = this.handleCell(TYPE_ORDER, result, currentOrder);
      }

      // Optional, specifies the alignment of cell
      // mdc-layout-grid__cell--align-<POSITION>
      let currentAlign = this.align ? this.align.toLowerCase() : '';
      if (ALIGN_POSITION.includes(currentAlign)) {
        result = this.handleCell(TYPE_ALIGN, result, currentAlign);
      }

      return result;
    }
  },
  methods: {
    handleCell(type, result, data) {
      if (isObject(data)) {
        for (let key in data) {
          let value = data[key];
          if (SCREEN_SIZE.includes(key)) {
            result.push(`${CLASSNAME_CELL}--${type}-${value}-${key}`);
          } else if (key === 'default') {
            result.push(`${CLASSNAME_CELL}--${type}-${value}`);
          }
        }
      } else {
        let value = data;
        result.push(`${CLASSNAME_CELL}--${type}-${value}`);
      }

      return result;
    }
  }
};
</script>
