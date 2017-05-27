<template>
  <i :class="className">
    <slot></slot>
  </i>
</template>

<script>
const DEFAULT_SIZE = 24;

export default {
  name: 'ui-icon',
  props: {
    // ui attributes
    size: {
      type: [Number, String],
      default: DEFAULT_SIZE
    },
    dark: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    inactive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      let result = {
        'material-icons': true,
        'md-dark': this.dark && !this.light,
        'md-light': this.light && !this.dark,
        'md-inactive': this.inactive
      };
      if (+this.size !== DEFAULT_SIZE && this.size > 0) {
        result[`md-${this.size}`] = true;
      }
      return result;
    }
  }
};
</script>
