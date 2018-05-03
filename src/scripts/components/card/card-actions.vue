<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-card-actions',
  props: {
    // Removes the action area's padding and causes its only child (an mdc-card__action element) to consume 100% of the action area's width
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
