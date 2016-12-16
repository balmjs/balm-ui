<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
import {isObject} from '../../utils/helper';

const MODE = ['phone', 'tablet', 'desktop'];
const HIDE = ['', 'phone', 'tablet', 'desktop'];
const HIDE_PHONE = 1;
const HIDE_TABLET = 2;
const HIDE_DESKTOP = 3;
const ALIGN = ['', 'top', 'middle', 'bottom', 'stretch'];
const ALIGN_TOP = 1;
const ALIGN_MIDDLE = 2;
const ALIGN_BOTTOM = 3;
const ALIGN_FULL = 4;
const TYPE_COL = 'col';
const TYPE_OFFSET = 'offset';
const TYPE_ORDER = 'order';

export default {
  name: 'ui-cell',
  props: {
    col: [Number, String, Object], // default: 4
    offset: [Number, String, Object],
    order: [Number, String, Object],
    hide: [Number, String],
    align: [Number, String] // default: 4
  },
  data() {
    return {
      mode: this.$parent.currentMode || false
    };
  },
  computed: {
    suffix() {
      return this.mode ? `-${this.mode}` : '';
    },
    className() {
      let result = ['mdl-cell'];
      // Sets the column size for the cell to N
      if (this.col) {
        result = this.handleColumn(TYPE_COL, result, this.col);
      }
      // Adds N columns of whitespace before the cell
      if (this.offset) {
        result = this.handleColumn(TYPE_OFFSET, result, this.offset);
      }
      // Reorders cell to position N
      if (this.order) {
        result = this.handleColumn(TYPE_ORDER, result, this.order);
      }
      // Hides the cell
      let hideMode = HIDE[+this.hide];
      if (hideMode) {
        result.push(`mdl-cell--hide-${hideMode}`);
      }
      // Aligns the cell to the parent
      if (this.align) {
        let align = ALIGN[this.align];
        result.push(`mdl-cell--${align}`);
      }

      return result;
    }
  },
  methods: {
    handleColumn(type, result, data) {
      if (isObject(data)) {
        for (let key in data) {
          let value = data[key];
          let suffix = (MODE.indexOf(key) === -1) ? '' : `-${key}`;
          if (type === TYPE_ORDER) {
            result.push(`mdl-cell--${type}-${value}${suffix}`);
          } else {
            result.push(`mdl-cell--${value}-${type}${suffix}`);
          }
        }
      } else {
        let value = data;
        let suffix = this.suffix;
        if (type === TYPE_ORDER) {
          result.push(`mdl-cell--${type}-${value}${suffix}`);
        } else {
          result.push(`mdl-cell--${value}-${type}${suffix}`);
        }
      }

      return result;
    }
  }
};
</script>
