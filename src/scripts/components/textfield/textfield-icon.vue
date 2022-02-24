<template>
  <i
    :class="className"
    :tabindex="unclickable ? null : 0"
    :role="unclickable ? null : 'button'"
    @click="handleClick"
  >
    <slot>
      <!-- Material icon -->
    </slot>
  </i>
</template>

<script>
import UI_GLOBAL from '../../config/constants';
import { UI_TEXTFIELD_ICON } from './constants';

export default {
  name: 'UiTextfieldIcon',
  customOptions: {
    UI_GLOBAL,
    UI_TEXTFIELD_ICON
  }
};
</script>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  trailing: {
    type: Boolean,
    default: false
  },
  unclickable: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits([UI_GLOBAL.EVENTS.CLICK]);

const className = computed(() => {
  let result = [UI_GLOBAL.cssClasses.icon, UI_TEXTFIELD_ICON.cssClasses.icon];

  if (props.trailing) {
    result.push(UI_TEXTFIELD_ICON.cssClasses.trailingIcon);
  } else {
    result.push(UI_TEXTFIELD_ICON.cssClasses.leadingIcon);
  }

  return result;
});

function handleClick(event) {
  if (!props.unclickable) {
    emit(UI_GLOBAL.EVENTS.CLICK, event);
  }
}
</script>
