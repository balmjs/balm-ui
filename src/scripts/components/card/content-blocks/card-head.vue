<template>
  <section :class="className">
    <slot><!-- Primary title / text --></slot>
  </section>
</template>

<script>
export default {
  name: 'ui-card-head',
  props: {
    // layout
    noWrap: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-card__primary': !this.noWrap
      };
    }
  }
};
</script>
