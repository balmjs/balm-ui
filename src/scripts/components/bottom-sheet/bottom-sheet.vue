<template>
  <div :class="className">
    <transition name="mdc-slide">
      <div v-if="modelValue" class="mdc-bottom-sheet__content">
        <slot></slot>
      </div>
    </transition>
    <div class="mdc-bottom-sheet__scrim" @click="handleClose"></div>
  </div>
</template>

<script>
// Define bottom sheet constants
const UI_BOTTOM_SHEET = {
  EVENTS: {
    CHANGE: 'update:modelValue'
  }
};

export default {
  name: 'UiBottomSheet',
  customOptions: {
    UI_BOTTOM_SHEET
  }
};
</script>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  // States
  modelValue: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits([UI_BOTTOM_SHEET.EVENTS.CHANGE]);

let closing = false;

const className = computed(() => ({
  'mdc-bottom-sheet': true,
  'mdc-bottom-sheet--open': props.modelValue,
  'mdc-bottom-sheet--closing': closing
}));

function handleClose() {
  closing = true;
  setTimeout(() => {
    emit(UI_BOTTOM_SHEET.EVENTS.CHANGE, false);
    closing = false;
  }, 300);
}
</script>
