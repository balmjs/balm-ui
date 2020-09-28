<template>
  <!-- Container -->
  <button :type="nativeType" :class="className" @click="handleClick">
    <div class="mdc-button__ripple"></div>
    <!-- Icon (optional) -->
    <slot name="before" :iconClass="UI_BUTTON.cssClasses.icon">
      <i
        v-if="materialIcon"
        :class="getIconClassName(UI_BUTTON.cssClasses.icon)"
        aria-hidden="true"
        v-text="materialIcon"
      ></i>
    </slot>
    <!-- Text label -->
    <span :class="UI_BUTTON.cssClasses.label">
      <slot></slot>
    </span>
    <!-- Icon (optional) -->
    <slot name="after" :iconClass="UI_BUTTON.cssClasses.icon"></slot>
  </button>
</template>

<script>
import buttonMixin from '../../mixins/button';
import cardActionMixin from '../../mixins/card-action';

// Define button constants
const UI_BUTTON = {
  TYPES: {
    text: 0,
    outlined: 1,
    raised: 2,
    unelevated: 3
  },
  cssClasses: {
    icon: 'mdc-button__icon',
    label: 'mdc-button__label',
    touch: 'mdc-button--touch'
  }
};

export default {
  name: 'UiButton',
  mixins: [buttonMixin, cardActionMixin],
  props: {
    // UI variants
    type: {
      type: [String, Number],
      default: 0
    },
    outlined: {
      type: Boolean,
      default: false
    },
    raised: {
      type: Boolean,
      default: false
    },
    unelevated: {
      type: Boolean,
      default: false
    },
    // native button attributes
    nativeType: {
      type: String,
      default: 'button'
    }
  },
  data() {
    return {
      UI_BUTTON
    };
  },
  computed: {
    isOutlined() {
      return this.checkType(UI_BUTTON.TYPES, 'outlined');
    },
    isRaised() {
      return this.checkType(UI_BUTTON.TYPES, 'raised');
    },
    isUnelevated() {
      return this.checkType(UI_BUTTON.TYPES, 'unelevated');
    },
    className() {
      const isAccessible =
        this.$el && this.$el.classList.contains(UI_BUTTON.cssClasses.touch);

      return [
        {
          // Text button
          'mdc-button': true,
          // Outlined button
          'mdc-button--outlined': this.isOutlined,
          // Contained button
          'mdc-button--raised': this.isRaised,
          'mdc-button--unelevated': this.isUnelevated,
          // Accessibility
          'mdc-button--touch': isAccessible
        },
        this.cardActionClassName
      ];
    }
  }
};
</script>
