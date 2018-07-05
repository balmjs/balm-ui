<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-card-actions',
  props: {
    fullBleed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-card__actions': true,
        'mdc-card__actions--full-bleed': this.fullBleed
      };
    }
  }
};
</script>
