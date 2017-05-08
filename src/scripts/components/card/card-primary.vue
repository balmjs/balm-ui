<template>
  <section :class="className.outer">
    <slot name="before"></slot>
    <h1 :class="className.title">
      <slot name="title"></slot>
    </h1>
    <h2 v-if="hasSubtitle" class="mdc-card__subtitle">
      <slot name="subtitle"></slot>
    </h2>
    <slot name="after"></slot>
  </section>
</template>

<script>
export default {
  name: 'ui-card-primary',
  props: {
    // mdc
    large: {
      type: Boolean,
      default: false
    },
    // layout
    noWrap: {
      type: Boolean,
      default: false
    },
    hasSubtitle: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        outer: {
          'mdc-card__primary': !this.noWrap
        },
        title: {
          'mdc-card__title': true,
          'mdc-card__title--large': this.large
        }
      };
    }
  }
};
</script>
