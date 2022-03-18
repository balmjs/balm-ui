<template>
  <mdc-linear-progress
    ref="linearProgress"
    :class="className"
    :aria-label="label"
    aria-valuemin="0"
    aria-valuemax="1"
    :data-buffer="!!buffer"
  ></mdc-linear-progress>
</template>

<script>
import UI_PROGRESS from './constants';

const name = 'UiProgress';

export default {
  name,
  customOptions: {
    name,
    UI_PROGRESS
  }
};
</script>

<script setup>
import { ref, reactive, computed, watch, onMounted } from 'vue';
import { MDCLinearProgress } from '../../../material-components-web/linear-progress';
import MdcLinearProgress from './mdc-linear-progress.vue';
import { progressProps, useProgress } from '../../mixins/progress';

const props = defineProps({
  ...progressProps,
  // States
  buffer: {
    type: Number,
    default: 0
  }
});

const linearProgress = ref(null);
const state = reactive({
  $linearProgress: null
});

const className = computed(() => ({
  'mdc-linear-progress--indeterminate': props.active,
  'mdc-linear-progress--closed': props.closed
}));

watch(
  () => props.buffer,
  (val) => setBuffer(val)
);

onMounted(() => {
  const el = linearProgress.value.mdcLinearProgress;
  state.$linearProgress = new MDCLinearProgress(el);

  const { setProgress } = useProgress(state.$linearProgress, props);

  setProgress(props.progress);
  if (el.dataset.buffer) {
    setBuffer(props.buffer);
  }
});

function setBuffer(value) {
  if (
    state.$linearProgress &&
    value >= UI_PROGRESS.VALUE.MIN &&
    value <= UI_PROGRESS.VALUE.MAX
  ) {
    state.$linearProgress.buffer = value;
  } else {
    console.warn(`[${name}]: The 'buffer' prop value should be between [0, 1]`);
  }
}
</script>
