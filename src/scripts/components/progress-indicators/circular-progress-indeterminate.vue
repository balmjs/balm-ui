<template>
  <div class="mdc-circular-progress__spinner-layer">
    <div
      class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left"
    >
      <svg
        class="mdc-circular-progress__indeterminate-circle-graphic"
        :viewBox="svg.viewBox"
      >
        <circle
          :cx="svg.cx"
          :cy="svg.cy"
          :r="svg.r"
          :stroke-dasharray="svg.stroke"
          :stroke-dashoffset="dashoffset"
        />
      </svg>
    </div>
    <div class="mdc-circular-progress__gap-patch">
      <svg
        class="mdc-circular-progress__indeterminate-circle-graphic"
        :viewBox="svg.viewBox"
      >
        <circle
          :cx="svg.cx"
          :cy="svg.cy"
          :r="svg.r"
          :stroke-dasharray="svg.stroke"
          :stroke-dashoffset="dashoffset"
        />
      </svg>
    </div>
    <div
      class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right"
    >
      <svg
        class="mdc-circular-progress__indeterminate-circle-graphic"
        :viewBox="svg.viewBox"
      >
        <circle
          :cx="svg.cx"
          :cy="svg.cy"
          :r="svg.r"
          :stroke-dasharray="svg.stroke"
          :stroke-dashoffset="dashoffset"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ui-circular-progress-indeterminate',
  props: {
    svg: {
      type: Object,
      required: true
    }
  },
  computed: {
    dashoffset() {
      return this.svg.stroke / 2;
    }
  }
};
</script>
