<template>
  <button
    :class="className"
    :role="$parent.singleSelect ? 'radio' : null"
    @click="$emit('click', $event)"
  >
    <div class="mdc-segmented-button__ripple"></div>
    <slot name="before" :iconClass="UI_SEGMENTED_BUTTON.cssClasses.icon">
      <i
        v-if="materialIcon"
        :class="getIconClassName(UI_SEGMENTED_BUTTON.cssClasses.icon)"
        aria-hidden="true"
        v-text="materialIcon"
      ></i>
    </slot>
    <slot :textClass="UI_SEGMENTED_BUTTON.cssClasses.label">
      <span v-if="text" :class="UI_SEGMENTED_BUTTON.cssClasses.label">
        {{ text }}
      </span>
    </slot>
    <slot name="after" :iconClass="UI_SEGMENTED_BUTTON.cssClasses.icon"></slot>
  </button>
</template>

<script>
import materialIconMixin from '../../mixins/material-icon';

// Define segmented button constants
const UI_SEGMENTED_BUTTON = {
  cssClasses: {
    icon: 'mdc-segmented-button__icon',
    label: 'mdc-segmented-button__label',
    touch: 'mdc-segmented-button--touch'
  }
};

export default {
  name: 'UiSegmentedButton',
  mixins: [materialIconMixin],
  props: {
    // States
    selected: {
      type: Boolean,
      default: false
    },
    // UI attributes
    text: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      UI_SEGMENTED_BUTTON
    };
  },
  computed: {
    className() {
      const isAccessible =
        this.$el &&
        this.$el.classList.contains(UI_SEGMENTED_BUTTON.cssClasses.touch);

      return {
        'mdc-segmented-button__segment': true,
        'mdc-segmented-button__segment--selected': this.selected,
        // Accessibility
        'mdc-segmented-button--touch': isAccessible
      };
    }
  }
};
</script>
