<template>
  <fieldset :class="className">
    <slot></slot>
  </fieldset>
</template>

<script>
import typeMixin from '../../mixins/type';

// Define text divider constants
const UI_FORM = {
  TYPES: {
    horizontal: 0,
    vertical: 1
  }
};

export default {
  name: 'ui-form',
  mixins: [typeMixin],
  props: {
    // UI variants
    type: {
      type: [String, Number],
      default: 0
    },
    // UI attributes
    labelEndAligned: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isVertical() {
      return this.checkType(UI_FORM.TYPES, 'vertical') || this.type === '|';
    },
    className() {
      return {
        'mdc-form': true,
        'mdc-form--horizontal': !this.isVertical,
        'mdc-form--vertical': this.isVertical,
        'mdc-form--label-end-aligned': this.labelEndAligned
      };
    }
  }
};
</script>
