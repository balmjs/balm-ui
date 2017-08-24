<template>
  <div :class="className">
    <ui-grid-inner>
      <slot></slot>
    </ui-grid-inner>
  </div>
</template>

<script>
import UiGridInner from './grid-inner';

const ALIGNMENT = ['left', 'right'];

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

      if (this.fixedColumnWidth) {
        result.push('mdc-layout-grid--fixed-column-width');
      }

      let currentAlign = this.align ? this.align.toLowerCase() : '';
      if (ALIGNMENT.includes(currentAlign)) {
        result.push(`mdc-layout-grid--align-${currentAlign}`);
      }

      return result;
    }
  }
};
</script>
