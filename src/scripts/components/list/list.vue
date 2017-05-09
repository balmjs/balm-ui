<template>
  <ul :class="className">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'ui-list',
  props: {
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
