<template>
  <!-- Thumbnail (optional) -->
  <i :class="className">
    <slot></slot>
  </i>
</template>

<script>
import UI_GLOBAL from '../../config/constants';

export default {
  name: 'ui-chip-thumbnail',
  props: {
    hidden: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return [
        UI_GLOBAL.mdi,
        'mdc-chip__icon mdc-chip__icon--leading',
        { 'mdc-chip__icon--leading-hidden': this.hidden }
      ];
    }
  }
};
</script>
