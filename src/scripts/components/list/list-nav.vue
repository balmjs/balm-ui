<template>
  <nav :class="className">
    <slot :className="cssClasses"></slot>
  </nav>
</template>

<script>
import cssClasses from './constants';

export default {
  name: 'ui-list-nav',
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
  data() {
    return {
      cssClasses
    };
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
