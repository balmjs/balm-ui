<template>
  <section :class="className">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'ui-dialog-body',
  props: {
    scrollable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-dialog__body': true,
        'mdc-dialog__body--scrollable': this.scrollable
      };
    }
  }
};
</script>
