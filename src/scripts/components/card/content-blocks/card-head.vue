<template>
  <section :class="className.outer">
    <!-- Primary title / text -->
    <slot name="before"></slot>
    <h1 v-if="!noTitle" :class="className.inner">
      <slot name="title"></slot>
    </h1>
    <h2 v-if="!noSubtitle" class="mdc-card__subtitle">
      <slot name="subtitle"></slot>
    </h2>
    <slot name="after"></slot>
  </section>
</template>

<script>
export default {
  name: 'ui-card-head',
  props: {
    // ui attributes
    large: {
      type: Boolean,
      default: true
    },
    // layout
    noWrap: {
      type: Boolean,
      default: false
    },
    noTitle: {
      type: Boolean,
      default: false
    },
    noSubtitle: {
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
        inner: {
          'mdc-card__title': true,
          'mdc-card__title--large': this.large
        }
      };
    }
  }
};
</script>
