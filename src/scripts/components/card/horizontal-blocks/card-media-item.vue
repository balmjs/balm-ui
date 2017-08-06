<template>
  <img :class="className">
</template>

<script>
export default {
  name: 'ui-card-media-item',
  props: {
    // ui attributes
    size: {
      type: [Number, String],
      default: 1
    }
  },
  computed: {
    className() {
      let size = +this.size;
      return {
        'mdc-card__media-item': true,
        'mdc-card__media-item--1dot5x': size === 1.5,
        'mdc-card__media-item--2x': size === 2,
        'mdc-card__media-item--3x': size === 3
      };
    }
  }
};
</script>
