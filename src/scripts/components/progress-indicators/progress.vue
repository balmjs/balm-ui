<template>
  <mdc-linear-progress
    :class="className"
    :aria-label="label"
    aria-valuemin="0"
    aria-valuemax="1"
    :data-buffer="!!buffer"
  ></mdc-linear-progress>
</template>

<script>
import { MDCLinearProgress } from '../../../material-components-web/linear-progress';
import MdcLinearProgress from './mdc-linear-progress';
import progressMixin from '../../mixins/progress';
import { UI_PROGRESS } from './constants';

export default {
  name: 'UiProgress',
  components: {
    MdcLinearProgress
  },
  mixins: [progressMixin],
  props: {
    // States
    buffer: {
      type: Number,
      default: 0
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
        'mdc-linear-progress--indeterminate': this.active,
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
        this.$linearProgress.buffer = value;
      } else {
        console.warn('Buffer value should be between [0, 1]');
      }
    }
  }
};
</script>
