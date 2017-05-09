<template>
  <li :class="className" role="separator"></li>
</template>

<script>
export default {
  name: 'ui-item-divider',
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
