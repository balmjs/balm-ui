<template>
  <div class="mdc-tooltip" role="tooltip" aria-hidden="true">
    <div class="mdc-tooltip__surface" :style="style">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { MDCTooltip } from '../../../material-components-web/tooltip';

export default {
  name: 'UiTooltip',
  props: {
    width: {
      type: [String, Number],
      default: 0
    }
  },
  computed: {
    style() {
      return this.width
        ? {
            'max-width': `${this.width}px`
          }
        : {};
    }
  },
  mounted() {
    new MDCTooltip(this.$el);
  }
};
</script>
