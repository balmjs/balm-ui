<template>
  <div class="mdc-data-table__table-container">
    <table class="mdc-data-table__table">
      <colgroup v-if="columnsData.length">
        <template v-for="(colValue, colKey) in columnsData">
          <col
            :key="colKey"
            :class="colValue.className ? `col-${colValue.className}` : null"
            :style="style(colValue)"
          />
        </template>
      </colgroup>
      <slot></slot>
    </table>
  </div>
</template>

<script>
import getType from '../../utils/typeof';

export default {
  name: 'MdcTableFrame',
  props: {
    columnsData: {
      type: Array,
      default() {
        return [];
      }
    },
    defaultWidth: {
      type: String,
      default: '200px'
    }
  },
  methods: {
    style({ width }) {
      return {
        width: width
          ? getType(width) === 'number'
            ? `${width}px`
            : width
          : this.defaultWidth
      };
    }
  }
};
</script>
