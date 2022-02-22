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
        :class="getMaterialIconClass(UI_SEGMENTED_BUTTON.cssClasses.icon)"
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
import { getMaterialIconClass } from '../../mixins/material-icon';

// Define segmented button constants
const UI_SEGMENTED_BUTTON = {
  cssClasses: {
    icon: 'mdc-segmented-button__icon',
    label: 'mdc-segmented-button__label',
    touch: 'mdc-segmented-button--touch'
  },
  EVENTS: {
    CLICK: 'click'
  }
};

export default {
  name: 'UiSegmentedButton',
  inheritAttrs: false,
  customOptions: {
    UI_SEGMENTED_BUTTON,
    getMaterialIconClass
  }
};
</script>

<script setup>
import { ref, computed } from 'vue';
import { icon, useMaterialIcon } from '../../mixins/material-icon';

const props = defineProps({
  // States
  selected: {
    type: Boolean,
    default: false
  },
  // UI attributes
  icon,
  text: {
    type: String,
    default: ''
  }
});

const emit = defineEmits([UI_SEGMENTED_BUTTON.EVENTS.CLICK]);

const segmentedButton = ref(null);

const { materialIcon } = useMaterialIcon(props);

const isAccessible = computed(
  () =>
    segmentedButton.value &&
    segmentedButton.value.classList.contains(
      UI_SEGMENTED_BUTTON.cssClasses.touch
    )
).value;

const className = computed(() => ({
  'mdc-segmented-button__segment': true,
  'mdc-segmented-button__segment--selected': props.selected,
  // Accessibility
  'mdc-segmented-button--touch': isAccessible
}));

function handleClick(event) {
  emit(UI_SEGMENTED_BUTTON.EVENT.CLICK, event);
}
</script>
