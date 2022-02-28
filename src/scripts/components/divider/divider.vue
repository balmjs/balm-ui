<template>
  <div :class="className">
    <template v-if="hasText">
      <template v-if="isVertical">
        <slot name="left"></slot>
        <span class="mdc-divider__text">
          <span>
            <slot></slot>
          </span>
        </span>
        <slot name="right"></slot>
      </template>
      <template v-else>
        <span class="mdc-divider__text">
          <span>
            <slot></slot>
          </span>
        </span>
      </template>
    </template>
  </div>
</template>

<script>
// Define divider constants
const UI_DIVIDER = {
  TYPES: {
    horizontal: 0,
    vertical: 1
  }
};

export default {
  name: 'UiDivider',
  customOptions: {
    UI_DIVIDER
  }
};
</script>

<script setup>
import { computed, useSlots } from 'vue';
import checkType from '../../mixins/type';

const props = defineProps({
  // UI variants
  type: {
    type: [String, Number],
    default: 0
  }
});

const slots = useSlots();

const isVertical = computed(
  () => checkType(props, UI_DIVIDER.TYPES, 'vertical') || props.type === '|'
);
const hasText = computed(() => !!slots.default);
const className = computed(() => ({
  'mdc-divider': true,
  'mdc-divider--horizontal': !isVertical.value,
  'mdc-divider--vertical': isVertical.value,
  'mdc-divider--no-text': !hasText.value
}));
</script>
