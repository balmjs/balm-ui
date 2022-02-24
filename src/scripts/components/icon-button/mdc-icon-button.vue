<template>
  <button
    type="button"
    :class="['mdc-icon-button', UI_GLOBAL.cssClasses.icon]"
    @click="handleClick"
  >
    <div class="mdc-icon-button__ripple"></div>
    <slot>
      <!-- Material icon -->
    </slot>
  </button>
</template>

<script>
import UI_GLOBAL from '../../config/constants';

export default {
  name: 'MdcIconButton',
  customOptions: {
    UI_GLOBAL
  }
};
</script>

<script setup>
const emit = defineEmits([UI_GLOBAL.EVENTS.CLICK]);

function handleClick(event) {
  emit(UI_GLOBAL.EVENTS.CLICK, event);
}
</script>
