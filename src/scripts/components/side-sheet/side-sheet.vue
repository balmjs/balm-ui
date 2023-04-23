<template>
  <div :class="className">
    <transition name="mdc-side-sheet">
      <div v-if="modelValue" class="mdc-side-sheet__container">
        <div class="mdc-side-sheet__wrapper">
          <header v-if="hasHeader" class="mdc-side-sheet__header">
            <h4 class="mdc-side-sheet__title">
              <slot name="title"></slot>
            </h4>
            <mdc-icon-button
              v-if="closable"
              tabindex="-1"
              @click="handleClose(true)"
            >
              close
            </mdc-icon-button>
          </header>
          <div class="mdc-side-sheet__content">
            <slot></slot>
          </div>
        </div>
        <footer v-if="hasActions" class="mdc-side-sheet__actions">
          <slot name="actions"></slot>
        </footer>
      </div>
    </transition>
    <div class="mdc-side-sheet__scrim" @click="handleClose"></div>
  </div>
</template>

<script>
// Define side sheet constants
const UI_SIDE_SHEET = {
  EVENTS: {
    CHANGE: 'update:modelValue'
  }
};

export default {
  name: 'UiSideSheet',
  customOptions: {
    UI_SIDE_SHEET
  }
};
</script>

<script setup>
import { reactive, computed, useSlots } from 'vue';
import MdcIconButton from '../icon-button/mdc-icon-button.vue';

const props = defineProps({
  // States
  modelValue: {
    type: Boolean,
    default: false
  },
  // UI attributes
  closable: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits([UI_SIDE_SHEET.EVENTS.CHANGE]);
const slots = useSlots();

const state = reactive({
  closing: false
});

const className = computed(() => ({
  'mdc-side-sheet': true,
  'mdc-side-sheet--open': props.modelValue,
  'mdc-side-sheet--closing': state.closing
}));
const hasHeader = computed(() => slots.title || props.closable);
const hasActions = computed(() => slots.actions);

function handleClose() {
  state.closing = true;
  setTimeout(() => {
    emit(UI_SIDE_SHEET.EVENTS.CHANGE, false);
    state.closing = false;
  }, 300);
}
</script>
