<template>
  <a :class="className">
    <slot></slot>
  </a>
</template>

<script>
import rippleMixin from '../mixins/ripple';

export default {
  name: 'ui-link',
  mixins: [rippleMixin],
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
      this.initRipple(this.$el);
    }
  }
};
</script>
