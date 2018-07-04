<template>
  <div role="progressbar" :class="className">
    <div class="mdc-linear-progress__buffering-dots"></div>
    <div class="mdc-linear-progress__buffer"></div>
    <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
      <span class="mdc-linear-progress__bar-inner"></span>
    </div>
    <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
      <span class="mdc-linear-progress__bar-inner"></span>
    </div>
  </div>
</template>

<script>
import { MDCLinearProgress } from '../../../material-components-web/linear-progress';

// Define constants
const UI_LINEAR_PROGRESS = {
  VALUE: {
    MIN: 0,
    MAX: 1
  }
};

export default {
  name: 'ui-linear-progress',
  props: {
    // States
    progress: {
      type: [String, Number],
      default: 0
    },
    buffer: {
      type: [String, Number],
      default: 0
    },
    // UI attributes
    indeterminate: {
      type: Boolean,
      default: false
    },
    reversed: {
      type: Boolean,
      default: false
    },
    closed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      $linearProgress: null
    };
  },
  computed: {
    className() {
      return {
        'mdc-linear-progress': true,
        'mdc-linear-progress--indeterminate': this.indeterminate,
        'mdc-linear-progress--reversed': this.reversed,
        'mdc-linear-progress--closed': this.closed
      };
    }
  },
  watch: {
    progress(val) {
      this.setProgress(val);
    },
    buffer(val) {
      this.setBuffer(val);
    }
  },
  mounted() {
    if (!this.$linearProgress) {
      this.$linearProgress = new MDCLinearProgress(this.$el);

      this.setProgress(this.progress);
      if (this.$el.dataset.buffer) {
        this.setBuffer(this.buffer);
      }
    }
  },
  methods: {
    setProgress(value) {
      if (
        this.$linearProgress &&
        value >= UI_LINEAR_PROGRESS.VALUE.MIN &&
        value <= UI_LINEAR_PROGRESS.VALUE.MAX
      ) {
        this.$linearProgress.progress = +value;
      } else {
        console.warn('Progress value should be between [0, 1]');
      }
    },
    setBuffer(value) {
      if (
        this.$linearProgress &&
        value >= UI_LINEAR_PROGRESS.VALUE.MIN &&
        value <= UI_LINEAR_PROGRESS.VALUE.MAX
      ) {
        this.$linearProgress.buffer = +value;
      } else {
        console.warn('Buffer value should be between [0, 1]');
      }
    }
  }
};
</script>
