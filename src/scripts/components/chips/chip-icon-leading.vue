<template>
  <i :class="className">
    <slot></slot>
  </i>
</template>

<script>
export default {
  name: 'ui-chip-leading-icon',
  props: {
    hidden: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'material-icons': true,
        'mdc-chip__icon': true,
        'mdc-chip__icon--leading': true,
        'mdc-chip__icon--leading-hidden': this.hidden
      };
    }
  }
};
</script>
