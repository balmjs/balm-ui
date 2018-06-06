<template>
  <button type="button"
    :class="className"
    :data-icon-inner-selector="iconInnerSelector">
    <slot></slot>
  </button>
</template>

<script>
import iconButtonMixin from '../../mixins/icon-button';

export default {
  name: 'ui-icon-button',
  mixins: [iconButtonMixin]
};
</script>
