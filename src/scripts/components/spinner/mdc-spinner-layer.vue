<template>
  <div class="mdc-circular-progress__spinner-layer">
    <div
      class="
        mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left
      "
    >
      <svg
        :class="UI_CIRCULAR_PROGRESS_INDETERMINATE.cssClasses.circle"
        :viewBox="svg.viewBox"
      >
        <circle
          fill="none"
          :cx="svg.cx"
          :cy="svg.cy"
          :r="svg.r"
          :stroke-dasharray="svg.stroke"
          :stroke-dashoffset="gapStroke"
          :stroke-width="svg.width"
        />
      </svg>
    </div>
    <div class="mdc-circular-progress__gap-patch">
      <svg
        :class="UI_CIRCULAR_PROGRESS_INDETERMINATE.cssClasses.circle"
        :viewBox="svg.viewBox"
      >
        <circle
          fill="none"
          :cx="svg.cx"
          :cy="svg.cy"
          :r="svg.r"
          :stroke-dasharray="svg.stroke"
          :stroke-dashoffset="gapStroke"
          :stroke-width="gapWidth"
        />
      </svg>
    </div>
    <div
      class="
        mdc-circular-progress__circle-clipper
        mdc-circular-progress__circle-right
      "
    >
      <svg
        :class="UI_CIRCULAR_PROGRESS_INDETERMINATE.cssClasses.circle"
        :viewBox="svg.viewBox"
      >
        <circle
          fill="none"
          :cx="svg.cx"
          :cy="svg.cy"
          :r="svg.r"
          :stroke-dasharray="svg.stroke"
          :stroke-dashoffset="gapStroke"
          :stroke-width="svg.width"
        />
      </svg>
    </div>
  </div>
</template>

<script>
// Define circular progress indeterminate constants
const UI_CIRCULAR_PROGRESS_INDETERMINATE = {
  cssClasses: {
    circle: 'mdc-circular-progress__indeterminate-circle-graphic'
  }
};

export default {
  name: 'MdcSpinnerLayer',
  customOptions: {
    UI_CIRCULAR_PROGRESS_INDETERMINATE
  }
};
</script>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  svg: {
    type: Object,
    required: true
  }
});

const gapStroke = computed(() => props.svg.stroke / 2);
const gapWidth = computed(() => props.svg.width * 0.8);
</script>
