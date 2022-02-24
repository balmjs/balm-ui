<template>
  <i
    :class="UI_GLOBAL.getMaterialIconClass('mdc-select__icon')"
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
import UI_GLOBAL from '../../config/constants';

export default {
  name: 'UiSelectIcon',
  customOptions: {
    UI_GLOBAL
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

const emit = defineEmits([UI_GLOBAL.EVENTS.CLICK]);

function handleClick(event) {
  if (!props.unclickable) {
    emit(UI_GLOBAL.EVENTS.CLICK, event);
  }
}
</script>
