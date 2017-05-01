<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-card-media-item',
  props: {
    // mdc
    size: {
      type: Number,
      default: 1
    }
  },
  computed: {
    className() {
      return {
        'mdc-card__media-item': true,
        'mdc-card__media-item--1dot5x': this.size === 1.5,
        'mdc-card__media-item--2x': this.size === 2,
        'mdc-card__media-item--3x': this.size === 3
      };
    }
  }
};
</script>
