<template>
  <button :class="className" :type="type" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ui-button',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    raised: {
      type: Boolean,
      default: false
    },
    fab: {
      type: Boolean,
      default: false
    },
    miniFab: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean,
      default: false
    },
    colored: {
      type: Boolean,
      default: false
    },
    primary: {
      type: Boolean,
      default: false
    },
    accent: {
      type: Boolean,
      default: false
    },
    effect: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdl-button': true, // Required
        'mdl-js-button': true, // Required
        // (none) Applies flat display effect to button (default)
        'mdl-button--raised': this.raised, // Applies raised display effect
        'mdl-button--fab': this.fab, // Applies fab (circular) display effect
        'mdl-button--mini-fab': this.miniFab, // Applies mini-fab (small fab circular) display effect
        'mdl-button--icon': this.icon, // Applies icon (small plain circular) display effect
        'mdl-button--colored': this.colored, // Applies colored display effect (primary or accent color, depending on the type of button)
        'mdl-button--primary': this.primary, // Applies primary color display effect
        'mdl-button--accent': this.accent, // Applies accent color display effect
        'mdl-js-ripple-effect': this.effect, // Applies ripple click effect
        'mdl-button--disabled': this.disabled
      };
    }
  }
};
</script>
