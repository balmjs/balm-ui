<template>
  <button
    ref="segmentedButton"
    :class="className"
    :role="$parent.singleSelect ? 'radio' : null"
    @click="handleClick"
  >
    <div class="mdc-segmented-button__ripple"></div>
    <slot name="before" :iconClass="UI_SEGMENTED_BUTTON.cssClasses.icon">
      <i
        v-if="materialIcon"
        :class="
          UI_GLOBAL.getMaterialIconClass(UI_SEGMENTED_BUTTON.cssClasses.icon)
        "
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
import UI_GLOBAL from '../../config/constants';

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
  customOptions: {
    UI_GLOBAL,
    UI_SEGMENTED_BUTTON
  }
};
</script>

<script setup>
import { ref, computed } from 'vue';
import { useGlobal } from '../../config/constants';
import { iconProps, useMaterialIcon } from '../../mixins/material-icon';

const props = defineProps({
  // States
  selected: {
    type: Boolean,
    default: false
  },
  // UI attributes
  ...iconProps,
  text: {
    type: String,
    default: ''
  }
});

const emit = defineEmits([UI_GLOBAL.EVENTS.CLICK]);

const segmentedButton = ref(null);

const { handleClick } = useGlobal({ emit });
const { materialIcon } = useMaterialIcon(props);

const isAccessible = computed(
  () =>
    segmentedButton.value &&
    segmentedButton.value.classList.contains(
      UI_SEGMENTED_BUTTON.cssClasses.touch
    )
);
const className = computed(() => ({
  'mdc-segmented-button__segment': true,
  'mdc-segmented-button__segment--selected': props.selected,
  // Accessibility
  'mdc-segmented-button--touch': isAccessible.value
}));
</script>
