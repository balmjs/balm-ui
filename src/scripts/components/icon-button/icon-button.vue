<template>
  <!-- Container -->
  <button
    ref="iconButtonEl"
    type="button"
    :class="className"
    @click="handleClick"
  >
    <div class="mdc-icon-button__ripple"></div>
    <!-- Icon -->
    <template v-if="toggleButton">
      <i
        :class="getIconClassName(UI_ICON_BUTTON.cssClasses.off)"
        v-text="toggle.off"
      ></i>
      <i
        :class="getIconClassName(UI_ICON_BUTTON.cssClasses.on)"
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
import { getIconClassName } from '../../mixins/material-icon';
import UI_ICON_BUTTON from './constants';

export default {
  name: 'UiIconButton',
  inheritAttrs: false,
  customOptions: {
    UI_ICON_BUTTON,
    getIconClassName
  }
};
</script>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { MDCIconButtonToggle } from '../../../material-components-web/icon-button';
import { strings } from '../../../material-components-web/icon-button/constants';
import { icon, useMaterialIcon } from '../../mixins/material-icon';
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
  UI_ICON_BUTTON.EVENT.CLICK,
  UI_ICON_BUTTON.EVENT.CHANGE
]);

const iconButtonEl = ref();

const { materialIcon } = useMaterialIcon(props);
const { cardActionClassName } = useCardAction(iconButtonEl);

const toggleButton = computed(() => props.toggle.on && props.toggle.off);
const className = computed(() => [
  {
    'mdc-icon-button': true,
    'material-icons': !toggleButton.value
  },
  cardActionClassName
]);

function handleClick(event) {
  emit(UI_ICON_BUTTON.EVENT.CLICK, event);
}

onMounted(() => {
  const $iconButton = new MDCIconButtonToggle(iconButtonEl.value);

  // For default and custom icon button
  $iconButton.listen(strings.CHANGE_EVENT, ({ detail }) => {
    emit(UI_ICON_BUTTON.EVENT.CHANGE, detail.isOn);
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
