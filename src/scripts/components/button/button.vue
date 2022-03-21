<template>
  <!-- (M3) Container -->
  <button
    ref="button"
    :type="nativeType"
    :class="className"
    @click="handleClick"
  >
    <span class="mdc-button__ripple"></span>
    <span class="mdc-button__focus-ring"></span>
    <!-- Leading icon (optional) -->
    <slot name="before" :iconClass="UI_BUTTON.cssClasses.icon">
      <i
        v-if="materialIcon"
        :class="UI_GLOBAL.getMaterialIconClass(UI_BUTTON.cssClasses.icon)"
        aria-hidden="true"
        v-text="materialIcon"
      ></i>
    </slot>
    <!-- Label text -->
    <span :class="UI_BUTTON.cssClasses.label">
      <slot></slot>
    </span>
    <!-- Trailing icon (optional) -->
    <slot name="after" :iconClass="UI_BUTTON.cssClasses.icon"></slot>
  </button>
</template>

<script>
import UI_GLOBAL from '../../config/constants';

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
  customOptions: {
    UI_GLOBAL,
    UI_BUTTON
  }
};
</script>

<script setup>
import { ref, computed } from 'vue';
import { useGlobal } from '../../config/constants';
import { useButton } from '../../mixins/button';
import { iconProps, useMaterialIcon } from '../../mixins/material-icon';
import { useCardAction } from '../../mixins/card-action';
import checkType from '../../mixins/type';

const props = defineProps({
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
  // UI attributes
  ...iconProps,
  // Native button attributes
  nativeType: {
    type: String,
    default: 'button'
  }
});

const emit = defineEmits([UI_GLOBAL.EVENTS.CLICK]);

const button = ref(null);

const { handleClick } = useGlobal({ emit });
useButton(button, props);
const { materialIcon } = useMaterialIcon(props);
const { cardActionClasses } = useCardAction(button);

const isOutlined = computed(() =>
  checkType(props, UI_BUTTON.TYPES, 'outlined')
);
const isRaised = computed(() => checkType(props, UI_BUTTON.TYPES, 'raised'));
const isUnelevated = computed(() =>
  checkType(props, UI_BUTTON.TYPES, 'unelevated')
);
const isAccessible = computed(
  () =>
    button.value && button.value.classList.contains(UI_BUTTON.cssClasses.touch)
);
const className = computed(() => [
  {
    // Text button
    'mdc-button': true,
    // Outlined button
    'mdc-button--outlined': isOutlined.value,
    // Contained button
    'mdc-button--raised': isRaised.value,
    'mdc-button--unelevated': isUnelevated.value,
    // Accessibility
    'mdc-button--touch': isAccessible.value
  },
  cardActionClasses.value
]);
</script>
