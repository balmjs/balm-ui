<template>
  <div :class="className">
    <template v-if="hasText">
      <template v-if="isVertical">
        <slot name="left"></slot>
        <span class="mdc-divider__text">
          <span>
            <slot></slot>
          </span>
        </span>
        <slot name="right"></slot>
      </template>
      <template v-else>
        <span class="mdc-divider__text">
          <span>
            <slot></slot>
          </span>
        </span>
      </template>
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
  name: 'UiDivider',
  mixins: [typeMixin],
  props: {
    // UI variants
    type: {
      type: [String, Number],
      default: 0
    }
  },
  computed: {
    isVertical() {
      return (
        this.checkType(UI_TEXT_DIVIDER.TYPES, 'vertical') || this.type === '|'
      );
    },
    hasText() {
      return this.$slots.default;
    },
    className() {
      return {
        'mdc-divider': true,
        'mdc-divider--horizontal': !this.isVertical,
        'mdc-divider--vertical': this.isVertical,
        'mdc-divider--no-text': !this.hasText
      };
    }
  }
};
</script>
