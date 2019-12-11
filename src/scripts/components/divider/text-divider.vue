<template>
  <div :class="className">
    <span v-if="!noText">
      <slot></slot>
    </span>
  </div>
</template>

<script>
// Define text divider constants
const UI_TEXT_DIVIDER = {
  TYPES: ['horizontal', 'vertical'],
  VERTICAL: ['vertical', '|', 1]
};

export default {
  name: 'ui-text-divider',
  props: {
    type: {
      type: [String, Number],
      default: UI_TEXT_DIVIDER.TYPES[0]
    },
    noText: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isVertical() {
      return UI_TEXT_DIVIDER.VERTICAL.includes(this.type);
    },
    className() {
      return {
        'mdc-text-divider': true,
        'mdc-text-divider--horizontal': !this.isVertical,
        'mdc-text-divider--vertical': this.isVertical
      };
    }
  }
};
</script>
