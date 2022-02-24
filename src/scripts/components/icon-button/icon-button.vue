<template>
  <!-- Container -->
  <button
    ref="iconButton"
    type="button"
    :class="className"
    @click="handleClick"
  >
    <div class="mdc-icon-button__ripple"></div>
    <!-- Icon -->
    <template v-if="toggleButton">
      <i
        :class="UI_GLOBAL.getMaterialIconClass(UI_ICON_BUTTON.cssClasses.off)"
        v-text="toggle.off"
      ></i>
      <i
        :class="UI_GLOBAL.getMaterialIconClass(UI_ICON_BUTTON.cssClasses.on)"
        v-text="toggle.on"
      ></i>
    </template>
    <template v-else>
      <slot
        :onClass="UI_ICON_BUTTON.cssClasses.on"
        :offClass="UI_ICON_BUTTON.cssClasses.off"
      >
        {{ icon }}
      </slot>
    </template>
  </button>
</template>

<script>
import UI_GLOBAL from '../../config/constants';

// Define icon/toggle button constants
const UI_ICON_BUTTON = {
  cssClasses: {
    off: 'mdc-icon-button__icon',
    on: 'mdc-icon-button__icon mdc-icon-button__icon--on'
  },
  EVENTS: {
    CHANGE: 'update:modelValue'
  }
};

export default {
  name: 'UiIconButton',
  inheritAttrs: false,
  customOptions: {
    UI_GLOBAL,
    UI_ICON_BUTTON
  }
};
</script>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { MDCIconButtonToggle } from '../../../material-components-web/icon-button';
import { strings } from '../../../material-components-web/icon-button/constants';
import { icon } from '../../mixins/material-icon';
import { useCardAction } from '../../mixins/card-action';

const props = defineProps({
  // States
  modelValue: {
    type: Boolean,
    default: false
  },
  // UI attributes
  icon,
  toggle: {
    type: Object,
    default: () => ({})
  }
});

const emit = defineEmits([
  UI_GLOBAL.EVENTS.CLICK,
  UI_ICON_BUTTON.EVENTS.CHANGE
]);

const iconButton = ref(null);

const { cardActionClasses } = useCardAction(iconButton);

const toggleButton = computed(() => props.toggle.on && props.toggle.off).value;
const className = computed(() => [
  {
    'mdc-icon-button': true,
    'material-icons': !toggleButton
  },
  cardActionClasses
]);

function handleClick(event) {
  emit(UI_GLOBAL.EVENTS.CLICK, event);
}

onMounted(() => {
  const $iconButton = new MDCIconButtonToggle(iconButton.value);

  // For default and custom icon button
  $iconButton.listen(strings.CHANGE_EVENT, ({ detail }) => {
    emit(UI_ICON_BUTTON.EVENTS.CHANGE, detail.isOn);
  });

  // Init
  $iconButton.on = props.modelValue;

  // Watch the model value change
  watch(
    () => props.modelValue,
    (val) => ($iconButton.on = val)
  );
});
</script>
