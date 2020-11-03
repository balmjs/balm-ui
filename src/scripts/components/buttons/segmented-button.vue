<template>
  <button
    :class="className"
    @click="$emit(UI_SEGMENTED_BUTTON.EVENT.CLICK, $event)"
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
  },
  EVENT: {
    CLICK: 'click'
  }
};

export default {
  name: 'UiSegmentedButton',
  mixins: [materialIconMixin],
  props: {
    // UI attributes
    text: {
      type: String,
      default: ''
    }
  },
  emits: [UI_SEGMENTED_BUTTON.EVENT.CLICK],
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
        // Accessibility
        'mdc-segmented-button--touch': isAccessible
      };
    }
  }
};
</script>
