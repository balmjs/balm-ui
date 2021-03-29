<template>
  <div class="mdc-data-table__table-container" :style="containerStyle">
    <table class="mdc-data-table__table" :style="tableStyle">
      <colgroup v-if="columnsData.length">
        <template v-for="(colValue, colKey) in columnsData">
          <col
            :key="colKey"
            :class="colValue.class ? `col-${colValue.class}` : `col-${colKey}`"
            :style="colValue.style || null"
          />
        </template>
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
      default() {
        return [];
      }
    },
    scroll: {
      type: Object,
      default() {
        return {};
      }
    },
    offsetLeft: {
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
      return this.scroll.x
        ? {
            width: `${this.scroll.x}px`
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
