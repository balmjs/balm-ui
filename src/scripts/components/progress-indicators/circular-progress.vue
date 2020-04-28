<template>
  <div
    role="progressbar"
    :class="className"
    :aria-label="label"
    aria-valuemin="0"
    aria-valuemax="1"
  >
    <!-- Detrerminate -->
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
        />
      </svg>
    </div>
    <!-- Indeterminate -->
    <div class="mdc-circular-progress__indeterminate-container">
      <template v-if="fourColored">
        <ui-circular-progress-indeterminate
          v-for="i in 4"
          :key="i"
          :class="`mdc-circular-progress__color-${i}`"
          :svg="svg"
        ></ui-circular-progress-indeterminate>
      </template>
      <ui-circular-progress-indeterminate
        v-else
        :svg="svg"
      ></ui-circular-progress-indeterminate>
    </div>
  </div>
</template>

<script>
import { MDCCircularProgress } from '../../../material-components-web/circular-progress';
import UiCircularProgressIndeterminate from './circular-progress-indeterminate';
import progressMixin from '../../mixins/progress';

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
  components: {
    UiCircularProgressIndeterminate
  },
  mixins: [progressMixin],
  props: {
    // UI attributes
    size: {
      type: String,
      default: 'large'
    },
    fourColored: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      $circularProgress: null,
      currentSize: ''
    };
  },
  computed: {
    className() {
      return [
        'mdc-circular-progress',
        `mdc-circular-progress--${this.currentSize}`,
        {
          'mdc-circular-progress--indeterminate': this.active,
          'mdc-circular-progress--closed': this.closed
        }
      ];
    },
    svg() {
      return this.currentSize ? UI_CIRCULAR_PROGRESS.SVG[this.currentSize] : {};
    }
  },
  created() {
    switch (this.size) {
      case 'M':
      case 'medium':
        this.currentSize = 'medium';
        break;
      case 'S':
      case 'small':
        this.currentSize = 'small';
        break;
      // case 'L':
      // case 'large':
      default:
        this.currentSize = 'large';
    }
  },
  mounted() {
    if (this.currentSize) {
      this.$circularProgress = new MDCCircularProgress(this.$el);

      this.setProgress(this.progress);
    } else {
      console.warn('Please choose correct size');
    }
  }
};
</script>
