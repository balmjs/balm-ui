<template>
  <div :class="className">
    <ui-grid-inner>
      <slot></slot>
    </ui-grid-inner>
  </div>
</template>

<script>
import UiGridInner from './grid-inner';

// Define constants
const UI_GRID = {
  POSITIONS: ['left', 'right']
};

export default {
  name: 'ui-grid',
  components: {
    UiGridInner
  },
  props: {
    // UI attributes
    fixedColumnWidth: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: ''
    }
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
      if (this.position) {
        let gridPosition = this.position;
        if (UI_GRID.POSITIONS.includes(gridPosition)) {
          result.push(`mdc-layout-grid--align-${gridPosition}`);
        } else {
          console.warn('Invalid <GRID_POSITION>');
        }
      }

      return result;
    }
  }
};
</script>
