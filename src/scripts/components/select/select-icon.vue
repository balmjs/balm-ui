<template>
  <i
    :class="[UI_GLOBAL.cssClasses.icon, 'mdc-select__icon']"
    :tabindex="unclickable ? null : 0"
    :role="unclickable ? null : 'button'"
    @click="handleClick"
  >
    <slot>
      <!-- Material Icons -->
    </slot>
  </i>
</template>

<script>
import UI_GLOBAL from '../icon/constants';

// Define select icon constants
const UI_SELECT_ICON = {
  EVENTS: {
    CLICK: 'click'
  }
};

export default {
  name: 'UiSelectIcon',
  inheritAttrs: false,
  customOptions: {
    UI_GLOBAL,
    UI_SELECT_ICON
  }
};
</script>

<script setup>
const props = defineProps({
  unclickable: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits([UI_SELECT_ICON.EVENTS.CLICK]);

function handleClick(event) {
  if (!props.unclickable) {
    emit(UI_SELECT_ICON.EVENTS.CLICK, event);
  }
}
</script>
