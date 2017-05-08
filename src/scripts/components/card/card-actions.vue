<template>
  <section :class="className">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'ui-card-actions',
  props: {
    // mdc
    vertical: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-card__actions': true,
        'mdc-card__actions--vertical': this.vertical
      };
    }
  }
};
</script>
