<template>
  <div
    :class="className"
    role="progressbar"
    aria-valuemin="0"
    aria-valuemax="1"
  >
    <div class="mdc-circular-progress__determinate-container">
      <svg
        class="mdc-circular-progress__determinate-circle-graphic"
        :viewBox="svg.viewBox"
      >
        <circle
          class="mdc-circular-progress__determinate-circle"
          :cx="svg.cx"
          :cy="svg.cy"
          :r="svg.r"
          :stroke-dasharray="svg.stroke"
          :stroke-dashoffset="svg.stroke"
        />
      </svg>
    </div>
    <div class="mdc-circular-progress__indeterminate-container">
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
              :stroke-dashoffset="svg.stroke / 2"
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
              :stroke-dashoffset="svg.stroke / 2"
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
              :stroke-dashoffset="svg.stroke / 2"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MDCCircularProgress } from '../../../material-components-web/circular-progress';

// Define circular progress constants
const UI_CIRCULAR_PROGRESS = {
  SVG: {
    large: {
      viewBox: '0 0 48 48',
      cx: '24',
      cy: '24',
      r: '18',
      stroke: '113.097'
    },
    medium: {
      viewBox: '0 0 32 32',
      cx: '16',
      cy: '16',
      r: '12.5',
      stroke: '78.54'
    },
    small: {
      viewBox: '0 0 24 24',
      cx: '12',
      cy: '12',
      r: '8.75',
      stroke: '54.978'
    }
  }
};

export default {
  name: 'ui-circular-progress',
  props: {
    size: {
      type: String,
      default: 'large'
    }
  },
  computed: {
    currentSize() {
      let size = '';

      switch (this.size) {
        case 'M':
        case 'medium':
          size = 'medium';
          break;
        case 'S':
        case 'small':
          size = 'small';
          break;
        // case 'L':
        // case 'large':
        default:
          size = 'large';
      }

      return size;
    },
    className() {
      return [
        'mdc-circular-progress',
        `mdc-circular-progress--${this.currentSize}`,
        {
          'mdc-circular-progress--indeterminate': this.indeterminate,
          'mdc-circular-progress--closed': this.closed
        }
      ];
    },
    svg() {
      return this.currentSize ? UI_CIRCULAR_PROGRESS.SVG[this.currentSize] : {};
    }
  },
  mounted() {
    if (this.currentSize) {
      new MDCCircularProgress(this.$el);
    } else {
      console.warn('Please choose correct size');
    }
  }
};
</script>
