<template>
  <i :class="className" aria-hidden="true" @click="handleClick">
    <slot>
      <!-- The material icon name -->
    </slot>
  </i>
</template>

<script>
import UI_GLOBAL from '../../config/constants';

// Define material icons constants
const name = 'UiIcon';

const UI_ICON = {
  TYPES: {
    filled: 0,
    outlined: 1,
    round: 2,
    twoTone: 3,
    sharp: 4
  },
  DEFAULT_SIZE: 24
};

export default {
  name,
  customOptions: {
    name,
    UI_GLOBAL,
    UI_ICON
  }
};
</script>

<script setup>
import { computed, onBeforeMount } from 'vue';
import { useGlobal } from '../../config/constants';
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

const emit = defineEmits([UI_GLOBAL.EVENTS.CLICK]);

const { handleClick } = useGlobal({ emit });

const isFilled = computed(() => checkType(props, UI_ICON.TYPES, 'filled'));
const isOutlined = computed(() => checkType(props, UI_ICON.TYPES, 'outlined'));
const isRound = computed(() => checkType(props, UI_ICON.TYPES, 'round'));
const isTwoTone = computed(() => checkType(props, UI_ICON.TYPES, 'twoTone'));
const isSharp = computed(() => checkType(props, UI_ICON.TYPES, 'sharp'));
const invalidIcon = computed(() => props.dark && props.light);
const activeIcon = computed(() => props.dark || props.light);

const className = computed(() => {
  let result = {
    'material-icons': isFilled.value,
    'material-icons-outlined': isOutlined.value,
    'material-icons-round': isRound.value,
    'material-icons-two-tone': isTwoTone.value,
    'material-icons-sharp': isSharp.value,
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
  if (invalidIcon.value || (!activeIcon.value && props.inactive)) {
    console.warn(`[${name}]: Invalid dark or light icon`);
  }
});
</script>
