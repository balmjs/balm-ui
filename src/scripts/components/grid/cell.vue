<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
import {isObject} from '../../helpers';

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

      // Column spans
      // mdc-layout-grid__cell--span-{columns}
      // Column spans for specific screen sizes
      // mdc-layout-grid__cell--span-{columns}-{screen_size}
      if (this.col) {
        result = this.handleCell(TYPE_SPAN, result, this.col);
      }

      // Reordering
      // mdc-layout-grid__cell--order-{number}
      let currentOrder = +this.order;
      if (currentOrder >= 1 && currentOrder <= 12) {
        result = this.handleCell(TYPE_ORDER, result, currentOrder);
      }

      // Alignment
      // mdc-layout-grid__cell--align-{position}
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
