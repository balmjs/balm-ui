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
import {MDCLinearProgress} from '../../material-components-web/linear-progress';

export default {
  name: 'ui-linear-progress',
  props: {
    // state
    progress: {
      type: [Number, String],
      default: 0
    },
    buffer: {
      type: [Number, String],
      default: 0
    },
    // ui attributes
    indeterminate: {
      type: Boolean,
      default: false
    },
    reversed: {
      type: Boolean,
      default: false
    },
    accent: {
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
        'mdc-linear-progress--accent': this.accent
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
      if (this.$linearProgress && value >= 0 && value <= 1) {
        this.$linearProgress.progress = value;
      }
    },
    setBuffer(value) {
      if (this.$linearProgress && value >= 0 && value <= 1) {
        this.$linearProgress.buffer = value;
      }
    }
  }
};
</script>
