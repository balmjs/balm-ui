<template>
  <div class="mdc-data-table__table-container" :style="containerStyle">
    <table class="mdc-data-table__table" :style="tableStyle">
      <colgroup v-if="columnsData.length">
        <col
          v-for="(colValue, colKey) in columnsData"
          :key="colKey"
          :class="colValue.class ? `col-${colValue.class}` : `col-${colKey}`"
          :style="colValue.style || null"
        />
      </colgroup>
      <slot></slot>
    </table>
  </div>
</template>

<script>
export default {
  name: 'MdcTableFrame',
  props: {
    columnsData: {
      type: Array,
      default: () => []
    },
    scroll: {
      type: Object,
      default: () => ({})
    },
    offsetLeft: {
      type: Number,
      default: 0
    },
    maxWidth: {
      type: Number,
      default: 0
    }
  },
  computed: {
    containerStyle() {
      return this.scroll.y
        ? {
            'max-height': `${this.scroll.y}px`
          }
        : null;
    },
    tableStyle() {
      const scrollX = this.scroll.x || this.maxWidth;

      return scrollX
        ? {
            width: `${scrollX}px`
          }
        : null;
    }
  },
  watch: {
    offsetLeft(val) {
      this.$el.scrollLeft = val;
    }
  }
};
</script>
