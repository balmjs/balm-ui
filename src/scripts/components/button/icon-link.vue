<template>
  <a :class="className"
    :href="url"
    :data-icon-inner-selector="iconInnerSelector">
    <slot></slot>
  </a>
</template>

<script>
import iconButtonMixin from '../../mixins/icon-button';

export default {
  name: 'ui-icon-link',
  mixins: [iconButtonMixin],
  props: {
    // Element attributes
    url: {
      type: String,
      default: 'javascript:void(0)'
    }
  }
};
</script>
