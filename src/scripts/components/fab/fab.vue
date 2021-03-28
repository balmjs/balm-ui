<template>
  <!-- Container -->
  <button type="button" :class="className" @click="handleClick">
    <div class="mdc-fab__ripple"></div>
    <template v-if="isExtended">
      <!-- Icon (optional) -->
      <slot name="before" :iconClass="UI_FAB.cssClasses.icon">
        <i
          v-if="materialIcon"
          :class="getIconClassName(UI_FAB.cssClasses.icon)"
          v-text="materialIcon"
        ></i>
      </slot>
      <!-- Text label -->
      <span class="mdc-fab__label">
        <slot></slot>
      </span>
      <!-- Icon (optional) -->
      <slot name="after" :iconClass="UI_FAB.cssClasses.icon"></slot>
    </template>
    <template v-else>
      <!-- Icon -->
      <slot :iconClass="UI_FAB.cssClasses.icon">
        <i
          v-if="materialIcon"
          :class="getIconClassName(UI_FAB.cssClasses.icon)"
          v-text="materialIcon"
        ></i>
      </slot>
    </template>
  </button>
</template>

<script>
import buttonMixin from '../../mixins/button';

// Define fab constants
const UI_FAB = {
  TYPES: {
    regular: 0,
    extended: 1
  },
  cssClasses: {
    icon: 'mdc-fab__icon',
    touch: 'mdc-fab--touch'
  }
};

export default {
  name: 'UiFab',
  mixins: [buttonMixin],
  props: {
    // UI variants
    type: {
      type: [String, Number],
      default: 0
    },
    extended: {
      type: Boolean,
      default: false
    },
    // UI attributes
    mini: {
      type: Boolean,
      default: false
    },
    exited: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      UI_FAB
    };
  },
  computed: {
    isExtended() {
      return this.checkType(UI_FAB.TYPES, 'extended');
    },
    className() {
      const isTouch =
        this.$el && this.$el.classList.contains(UI_FAB.cssClasses.touch);

      return {
        'mdc-fab': true,
        'mdc-fab--extended': this.isExtended,
        'mdc-fab--mini': this.mini,
        'mdc-fab--exited': this.exited,
        // Accessibility
        'mdc-fab--touch': isTouch
      };
    }
  }
};
</script>
