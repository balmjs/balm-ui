<template>
  <div :class="className">
    <ui-grid-inner>
      <slot></slot>
    </ui-grid-inner>
  </div>
</template>

<script>
import UiGridInner from './grid-inner';

const ALIGNMENT = ['left', 'right']; // mdc-layout-grid--align-<GRID_POSITION>

export default {
  name: 'ui-grid',
  components: {
    UiGridInner
  },
  props: {
    // ui attributes
    fixedColumnWidth: {
      type: Boolean,
      default: false
    },
    align: String
  },
  computed: {
    className() {
      let result = ['mdc-layout-grid'];

      // Optional, specifies the grid should have fixed column width
      if (this.fixedColumnWidth) {
        result.push('mdc-layout-grid--fixed-column-width');
      }

      // Optional, specifies the alignment of the whole grid
      // mdc-layout-grid--align-<GRID_POSITION>
      let currentAlign = this.align ? this.align.toLowerCase() : '';
      if (ALIGNMENT.includes(currentAlign)) {
        result.push(`mdc-layout-grid--align-${currentAlign}`);
      }

      return result;
    }
  }
};
</script>
