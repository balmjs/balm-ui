<template>
  <a :class="cssClasses.item">
    <slot></slot>
  </a>
</template>

<script>
import rippleMixin from '../../mixins/ripple';
import cssClasses from './constants';

export default {
  name: 'ui-item-link',
  mixins: [rippleMixin],
  props: {
    // ui attributes
    cssOnly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      cssClasses
    };
  },
  mounted() {
    if (!this.cssOnly) {
      this.initRipple(this.$el);
    }
  }
};
</script>
