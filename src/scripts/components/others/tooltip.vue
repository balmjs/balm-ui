<template>
  <div class="mdc-tooltip" role="tooltip" aria-hidden="true">
    <div class="mdc-tooltip__surface">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { MDCTooltip } from '../../../material-components-web/tooltip';

export default {
  name: 'UiTooltip',
  mounted() {
    new MDCTooltip(this.$el);
  }
};
</script>
