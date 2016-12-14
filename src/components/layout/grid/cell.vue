<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
const HIDE = ['', 'phone', 'tablet', 'desktop'];
const HIDE_PHONE = 1;
const HIDE_TABLET = 2;
const HIDE_DESKTOP = 3;
const ALIGN = ['', 'top', 'middle', 'bottom', 'stretch'];
const ALIGN_TOP = 1;
const ALIGN_MIDDLE = 2;
const ALIGN_BOTTOM = 3;
const ALIGN_FULL = 4;

export default {
  name: 'ui-cell',
  props: {
    col: [Number, String], // default: 4
    offset: [Number, String],
    order: [Number, String],
    hide: [Number, String],
    align: [Number, String] // default: 4
  },
  data() {
    return {
      mode: this.$parent.currentMode || false
    };
  },
  computed: {
    className() {
      let suffix = this.mode ? `-${this.mode}` : '';

      let result = ['mdl-cell'];
      // Sets the column size for the cell to N
      if (this.col) {
        result.push(`mdl-cell--${this.col}-col${suffix}`);
      }
      // Adds N columns of whitespace before the cell
      if (this.offset) {
        result.push(`mdl-cell--${this.offset}-offset${suffix}`);
      }
      // Reorders cell to position N
      if (this.order) {
        result.push(`mdl-cell--order-${this.order}${suffix}`);
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
  }
};
</script>
