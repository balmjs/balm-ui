<template>
  <div
    role="progressbar"
    :class="className"
    :aria-label="label"
    aria-valuemin="0"
    aria-valuemax="1"
  >
    <div class="mdc-linear-progress__buffer">
      <div class="mdc-linear-progress__buffer-bar"></div>
      <div class="mdc-linear-progress__buffer-dots"></div>
    </div>
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
import progressMixin from '../../mixins/progress';
import { UI_PROGRESS } from './constants';

export default {
  name: 'ui-linear-progress',
  mixins: [progressMixin],
  props: {
    // States
    buffer: {
      type: [Number, String],
      default: 0
    },
    // UI attributes
    reversed: {
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
        'mdc-linear-progress--indeterminate': this.active,
        'mdc-linear-progress--reversed': this.reversed,
        'mdc-linear-progress--closed': this.closed
      };
    }
  },
  watch: {
    buffer(val) {
      this.setBuffer(val);
    }
  },
  mounted() {
    this.$linearProgress = new MDCLinearProgress(this.$el);

    this.setProgress(this.progress);
    if (this.$el.dataset.buffer) {
      this.setBuffer(this.buffer);
    }
  },
  methods: {
    setBuffer(value) {
      if (
        this.$linearProgress &&
        value >= UI_PROGRESS.VALUE.MIN &&
        value <= UI_PROGRESS.VALUE.MAX
      ) {
        this.$linearProgress.buffer = +value;
      } else {
        console.warn('Buffer value should be between [0, 1]');
      }
    }
  }
};
</script>
