<template>
  <div :class="className">
    <div class="mdc-layout-grid__inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// Define constants
const UI_GRID = {
  POSITIONS: ['left', 'right']
};

export default {
  name: 'ui-grid',
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
