<template>
  <i :class="className" aria-hidden="true" @click="handleClick">
    <slot><!-- Custom Icon --></slot>
  </i>
</template>

<script>
// Define constants
const UI_ICON = {
  DEFAULT_SIZE: 24,
  EVENT: {
    CLICK: 'click'
  }
};

export default {
  name: 'ui-icon',
  props: {
    // UI attributes
    size: {
      type: [Number, String],
      default: UI_ICON.DEFAULT_SIZE
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

      if (+this.size !== UI_ICON.DEFAULT_SIZE && this.size > 0) {
        result[`md-${this.size}`] = true;
      }

      return result;
    }
  },
  methods: {
    handleClick(event) {
      this.$emit(UI_ICON.EVENT.CLICK, event);
    }
  }
};
</script>
