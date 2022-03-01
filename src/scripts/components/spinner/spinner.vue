<template>
  <div
    ref="circularProgress"
    role="progressbar"
    :class="className"
    :aria-label="label"
    aria-valuemin="0"
    aria-valuemax="1"
  >
    <!-- Determinate -->
    <div class="mdc-circular-progress__determinate-container">
      <svg
        class="mdc-circular-progress__determinate-circle-graphic"
        :viewBox="svg.viewBox"
      >
        <circle
          class="mdc-circular-progress__determinate-circle"
          fill="none"
          :cx="svg.cx"
          :cy="svg.cy"
          :r="svg.r"
          :stroke-dasharray="svg.stroke"
          :stroke-dashoffset="svg.stroke"
          :stroke-width="svg.width"
        />
      </svg>
    </div>
    <!-- Indeterminate -->
    <div class="mdc-circular-progress__indeterminate-container">
      <template v-if="fourColored">
        <mdc-spinner-layer
          v-for="i in 4"
          :key="i"
          :class="`mdc-circular-progress__color-${i}`"
          :svg="svg"
        ></mdc-spinner-layer>
      </template>
      <mdc-spinner-layer v-else :svg="svg"></mdc-spinner-layer>
    </div>
  </div>
</template>

<script>
// Define circular progress constants
const name = 'UiSpinner';

const UI_CIRCULAR_PROGRESS = {
  SVG: {
    // 48px
    large: {
      viewBox: '0 0 48 48',
      cx: 24,
      cy: 24,
      r: 18,
      stroke: 113.097,
      width: 4
    },
    // 36px
    medium: {
      viewBox: '0 0 32 32',
      cx: 16,
      cy: 16,
      r: 12.5,
      stroke: 78.54,
      width: 3
    },
    // 24px
    small: {
      viewBox: '0 0 24 24',
      cx: '12',
      cy: '12',
      r: '8.75',
      stroke: '54.978',
      width: 2.5
    }
  }
};

export default {
  name,
  customOptions: {
    name,
    UI_CIRCULAR_PROGRESS
  }
};
</script>

<script setup>
import { ref, reactive, computed, onBeforeMount, onMounted } from 'vue';
import { MDCCircularProgress } from '../../../material-components-web/circular-progress';
import MdcSpinnerLayer from './mdc-spinner-layer.vue';
import { progressProps, useProgress } from '../../mixins/progress';

const props = defineProps({
  ...progressProps,
  // UI attributes
  size: {
    type: String,
    default: 'large'
  },
  fourColored: {
    type: Boolean,
    default: false
  }
});

const circularProgress = ref(null);
const state = reactive({
  $circularProgress: null,
  currentSize: ''
});

const className = computed(() => {
  return [
    'mdc-circular-progress',
    `mdc-circular-progress--${state.currentSize}`,
    {
      'mdc-circular-progress--indeterminate': props.active,
      'mdc-circular-progress--closed': props.closed
    }
  ];
});
const svg = computed(() =>
  state.currentSize ? UI_CIRCULAR_PROGRESS.SVG[state.currentSize] : {}
);

onBeforeMount(() => {
  switch (props.size) {
    case 'M':
    case 'medium':
      state.currentSize = 'medium';
      break;
    case 'S':
    case 'small':
      state.currentSize = 'small';
      break;
    // case 'L':
    // case 'large':
    default:
      state.currentSize = 'large';
  }
});

onMounted(() => {
  if (state.currentSize) {
    state.$circularProgress = new MDCCircularProgress(circularProgress.value);

    const { setProgress } = useProgress(state.$circularProgress, props);

    setProgress(props.progress);
  } else {
    console.warn(`[${name}]: Please choose correct size`);
  }
});
</script>
