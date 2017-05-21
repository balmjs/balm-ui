<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
import elevation from '../../mixins/elevation';

export default {
  name: 'ui-card',
  mixins: [elevation],
  props: {
    // theme
    dark: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-card': true,
        'mdc-card--theme-dark': this.dark
      };
    }
  }
};
</script>
