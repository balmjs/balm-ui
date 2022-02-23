<template>
  <i :class="className" aria-hidden="true" @click="handleClick">
    <slot>
      <!-- The material icon name -->
    </slot>
  </i>
</template>

<script>
// Define material icons constants
const UI_ICON = {
  TYPES: {
    filled: 0,
    outlined: 1,
    round: 2,
    twoTone: 3,
    sharp: 4
  },
  DEFAULT_SIZE: 24,
  EVENTS: {
    CLICK: 'click'
  }
};

export default {
  name: 'UiIcon',
  inheritAttrs: false,
  customOptions: {
    UI_ICON
  }
};
</script>

<script setup>
import { computed, onBeforeMount } from 'vue';
import checkType from '../../mixins/type';

const props = defineProps({
  // UI styles
  type: {
    type: [String, Number],
    default: 0
  },
  outlined: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  twoTone: {
    type: Boolean,
    default: false
  },
  sharp: {
    type: Boolean,
    default: false
  },
  // UI attributes
  size: {
    type: [Number, String],
    default: UI_ICON.DEFAULT_SIZE
  },
  dark: {
    type: Boolean,
    default: false
  },
  light: {
    type: Boolean,
    default: false
  },
  inactive: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits([UI_ICON.EVENTS.CLICK]);

const isFilled = computed(() =>
  checkType(props, UI_ICON.TYPES, 'filled')
).value;
const isOutlined = computed(() =>
  checkType(props, UI_ICON.TYPES, 'outlined')
).value;
const isRound = computed(() => checkType(props, UI_ICON.TYPES, 'round')).value;
const isTwoTone = computed(() =>
  checkType(props, UI_ICON.TYPES, 'twoTone')
).value;
const isSharp = computed(() => checkType(props, UI_ICON.TYPES, 'sharp')).value;
const invalidIcon = computed(() => props.dark && props.light).value;
const activeIcon = computed(() => props.dark || props.light).value;

const className = computed(() => {
  let result = {
    'material-icons': isFilled,
    'material-icons-outlined': isOutlined,
    'material-icons-round': isRound,
    'material-icons-two-tone': isTwoTone,
    'material-icons-sharp': isSharp,
    'md-dark': props.dark && !props.light,
    'md-light': props.light && !props.dark,
    'md-inactive': props.inactive
  };

  if (+props.size !== UI_ICON.DEFAULT_SIZE && props.size > 0) {
    result[`md-${props.size}`] = true;
  }

  return result;
});

onBeforeMount(() => {
  if (invalidIcon || (!activeIcon && props.inactive)) {
    console.warn('[UiIcon]', 'Invalid dark or light icon');
  }
});

function handleClick(event) {
  if (!props.inactive) {
    emit(UI_ICON.EVENTS.CLICK, event);
  }
}
</script>
