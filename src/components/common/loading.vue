<template>
  <div :class="className">
    <slot>
      <div v-if="isSpinner" class="mdl-spinner__circle"></div>
    </slot>
  </div>
</template>

<script>
import '../../material-design-lite/spinner/spinner';
import '../../material-design-lite/progress/progress';
import {isString} from '../utils/helper';

const TYPES = ['spinner', 'progress'];
const TYPE_SPINNER  = 0; // Spinner
const TYPE_PROGRESS = 1; // Progress bar

export default {
  name: 'ui-loading',
  props: {
    type: {
      type: [Number, String],
      default: 0
    },
    // Makes the spinner visible and animated
    active: {
      type: Boolean,
      default: false
    },
    // Uses a single (primary palette) color instead of changing colors
    singleColor: {
      type: Boolean,
      default: false
    },
    noBuffer: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      let className = {};

      let type = isString(this.type) ? TYPES.indexOf(this.type) : this.type;

      switch (type) {
        case TYPE_SPINNER:
          className = {
            'mdl-spinner': true,
            'mdl-js-spinner': true,
            'is-active': this.active,
            'mdl-spinner--single-color': this.singleColor
          };
          break;
        case TYPE_PROGRESS:
          className = {
            'mdl-progress': true,
            'mdl-js-progress': true,
            'mdl-progress--indeterminate': this.active,
            'no-buffer': this.noBuffer
          };
          break;
      }

      return className;
    },
    isSpinner() {
      let type = isString(this.type) ? TYPES[TYPE_SPINNER] : TYPE_SPINNER;
      return this.type === type;
    }
  },
  mounted() {
    this.$ui.upgradeElement(this.$el, this.isSpinner ? 'MaterialSpinner' : 'MaterialProgress');
  }
};
</script>
