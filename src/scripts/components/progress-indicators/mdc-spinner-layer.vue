<template>
  <div class="mdc-circular-progress__spinner-layer">
    <div
      class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left"
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
      class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right"
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
  props: {
    svg: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      UI_CIRCULAR_PROGRESS_INDETERMINATE
    };
  },
  computed: {
    gapStroke() {
      return this.svg.stroke / 2;
    },
    gapWidth() {
      return this.svg.width * 0.8;
    }
  }
};
</script>
