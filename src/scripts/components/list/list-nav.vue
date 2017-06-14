<template>
  <nav :class="className">
    <slot></slot>
  </nav>
</template>

<script>
export default {
  name: 'ui-list-nav',
  props: {
    // ui attributes
    dense: {
      type: Boolean,
      default: false
    },
    twoLine: {
      type: Boolean,
      default: false
    },
    avatar: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-list': true,
        'mdc-list--dense': this.dense,
        'mdc-list--two-line': this.twoLine,
        'mdc-list--avatar-list': this.avatar
      };
    }
  }
};
</script>
