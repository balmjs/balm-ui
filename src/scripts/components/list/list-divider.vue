<template>
  <hr class="mdc-list-divider">
</template>

<script>
export default {
  name: 'ui-list-divider',
  props: {
    inset: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-list-divider': true,
        'mdc-list-divider--inset': this.inset
      };
    }
  }
};
</script>
