<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-card-media',
  props: {
    // Automatically scales the media area's height to equal its width
    square: {
      type: Boolean,
      default: false
    },
    // Automatically scales the media area's height according to its width, maintaining a 16:9 aspect ratio
    rectangle: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-card__media': true,
        'mdc-card__media--square': this.square,
        'mdc-card__media--16-9': this.rectangle
      };
    }
  }
};
</script>
