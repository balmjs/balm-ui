<template>
  <div :class="className">
    <slot>
      <div class="mdl-spinner__circle" v-if="isSpinner"></div>
    </slot>
  </div>
</template>

<script>
import mdlSpinner from '../styles/spinner/spinner';
import mdlProgress from '../styles/progress/progress';

const SPINNER  = 0; // Spinner
const PROGRESS = 1; // Progress bar

export default {
  name: 'ui-loading',
  props: {
    type: {
      type: [Number, String],
      default: 0
    },
    // Makes the spinner visible and animated
    isActive: {
      type: Boolean,
      default: false
    },
    // Uses a single (primary palette) color instead of changing colors
    singleColor: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      let className = {};

      switch (+this.type) {
        case SPINNER:
          className = {
            'mdl-spinner': true,
            'mdl-js-spinner': true,
            'is-active': this.isActive,
            'mdl-spinner--single-color': this.singleColor
          };
          break;
        case PROGRESS:
          className = {
            'mdl-progress': true,
            'mdl-js-progress': true,
            'mdl-progress--indeterminate': this.isActive
          };
          break;
      }

      return className;
    },
    isSpinner() {
      return +this.type === SPINNER;
    }
  }
};
</script>
