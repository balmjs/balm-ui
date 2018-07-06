<template>
  <ul :class="className">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'ui-image-list',
  props: {
    // UI attributes
    masonry: {
      type: Boolean,
      default: false
    },
    withTextProtection: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-image-list': true,
        'mdc-image-list--masonry': this.masonry,
        'mdc-image-list--with-text-protection': this.withTextProtection
      };
    }
  }
};
</script>
