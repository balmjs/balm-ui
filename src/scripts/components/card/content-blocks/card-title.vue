<template>
  <h1 :class="className">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: 'ui-card-title',
  props: {
    // ui attributes
    large: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    className() {
      return {
        'mdc-card__title': true,
        'mdc-card__title--large': this.large
      }
    }
  }
};
</script>
