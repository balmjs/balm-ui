<template>
  <button
    type="button"
    :class="['mdc-icon-button', UI_GLOBAL.cssClasses.icon]"
    @click="handleClick"
  >
    <div class="mdc-icon-button__ripple"></div>
    <span class="mdc-icon-button__focus-ring"></span>
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
import { useGlobal } from '../../config/constants';

const emit = defineEmits([UI_GLOBAL.EVENTS.CLICK]);

const { handleClick } = useGlobal({ emit });
</script>
