<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
import {isObject} from '../../helpers';

const CLASSNAME_CELL = 'mdc-layout-grid__cell';
const MODE = ['default', 'phone', 'tablet', 'desktop'];
const TYPE_COL = 'span';
const TYPE_ORDER = 'order';

export default {
  name: 'ui-cell',
  props: {
    // ui attributes
    col: [Number, String, Object], // default: 4
    order: [Number, String, Object]
  },
  computed: {
    className() {
      let result = [CLASSNAME_CELL];
      // Sets the column size for the cell to N
      if (this.col) {
        result = this.handleColumn(TYPE_COL, result, this.col);
      }
      // Reorders cell to position N
      if (this.order) {
        result = this.handleColumn(TYPE_ORDER, result, this.order);
      }

      return result;
    }
  },
  methods: {
    handleColumn(type, result, data) {
      if (isObject(data)) {
        for (let key in data) {
          if (MODE.indexOf(key) > -1) {
            let value = data[key];
            let suffix = (key === 'default') ? '' : `-${key}`;
            result.push(`${CLASSNAME_CELL}--${type}-${value}${suffix}`);
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
