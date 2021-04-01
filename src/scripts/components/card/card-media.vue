<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'UiCardMedia',
  props: {
    square: {
      type: Boolean,
      default: false
    },
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
