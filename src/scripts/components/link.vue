<template>
  <a :class="className">
    <slot></slot>
  </a>
</template>

<script>
import {MDCRipple} from '../material-components-web/ripple';

export default {
  name: 'ui-link',
  props: {
    // mdc
    effect: {
      type: Boolean,
      default: false
    },
    item: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-list-item': this.item // for `<ui-list-nav>`
      };
    }
  },
  mounted() {
    if (this.effect) {
      MDCRipple.attachTo(this.$el);
    }
  }
};
</script>
