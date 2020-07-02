<template>
  <div :class="className">
    <template v-if="isVertical">
      <slot name="left"></slot>
      <span v-if="!noText" class="mdc-text-divider__text">
        <span>
          <slot></slot>
        </span>
      </span>
      <slot name="right"></slot>
    </template>
    <template v-else>
      <span v-if="!noText" class="mdc-text-divider__text">
        <span>
          <slot></slot>
        </span>
      </span>
    </template>
  </div>
</template>

<script>
import typeMixin from '../../mixins/type';

// Define text divider constants
const UI_TEXT_DIVIDER = {
  TYPES: {
    horizontal: 0,
    vertical: 1
  }
};

export default {
  name: 'UiTextDivider',
  mixins: [typeMixin],
  props: {
    // UI variants
    type: {
      type: [String, Number],
      default: 0
    },
    // UI attributes
    noText: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isVertical() {
      return (
        this.checkType(UI_TEXT_DIVIDER.TYPES, 'vertical') || this.type === '|'
      );
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
