<template>
  <button :class="className" :type="type" :disabled="disabled">
    <slot>
      <i v-if="icon" class="material-icons">{{ icon }}</i>
    </slot>
  </button>
</template>

<script>
import '../../material-design-lite/button/button';
import '../../material-design-lite/ripple/ripple';

export default {
  name: 'ui-button',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    // Applies raised display effect
    raised: {
      type: Boolean,
      default: false
    },
    // Applies fab (circular) display effect
    fab: {
      type: Boolean,
      default: false
    },
    // Applies mini-fab (small fab circular) display effect
    miniFab: {
      type: Boolean,
      default: false
    },
    // Applies icon (small plain circular) display effect
    icon: {
      type: [Boolean, String],
      default: false
    },
    // Applies colored display effect (primary or accent color, depending on the type of button)
    colored: {
      type: Boolean,
      default: false
    },
    // Applies primary color display effect
    primary: {
      type: Boolean,
      default: false
    },
    // Applies accent color display effect
    accent: {
      type: Boolean,
      default: false
    },
    // Applies ripple click effect
    effect: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    link: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdl-button': true,
        'mdl-js-button': true,
        // (none) Applies flat display effect to button (default)
        'mdl-button--raised': this.raised,
        'mdl-button--fab': this.fab,
        'mdl-button--mini-fab': this.miniFab,
        'mdl-button--icon': this.icon,
        'mdl-button--colored': this.colored,
        'mdl-button--primary': this.primary,
        'mdl-button--accent': this.accent,
        'mdl-js-ripple-effect': this.effect,
        'mdl-button--disabled': this.disabled,
        'mdl-button--link': this.link,
      };
    }
  },
  mounted() {
    this.$ui.upgradeElement(this.$el, 'MaterialButton');
    if (this.effect) {
      this.$ui.upgradeElement(this.$el, 'MaterialRipple');
    }
  }
};
</script>
