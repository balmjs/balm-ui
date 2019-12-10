<template>
  <!-- Container -->
  <div :class="className">
    <div class="mdc-snackbar__surface">
      <!-- Text label -->
      <div class="mdc-snackbar__label" role="status" aria-live="polite">
        <slot>{{ message }}</slot>
      </div>
      <!-- Action (optional) -->
      <div v-if="hasAction" class="mdc-snackbar__actions">
        <button type="button" :class="buttonClassName">
          {{ actionButtonText || 'close' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { MDCSnackbar } from '../../../material-components-web/snackbar';
import UI_GLOBAL from '../../config/constants';

// Define snackbar constants
const UI_SNACKBAR = {
  ACTION_TYPE: {
    BUTTON: 'button',
    ICON: 'icon'
  },
  timeoutMs: {
    MIN: 4000,
    MAX: 10000
  },
  EVENT: {
    CHANGE: 'change',
    CLOSED: 'closed'
  }
};

export default {
  name: 'ui-snackbar',
  model: {
    prop: 'open',
    event: UI_SNACKBAR.EVENT.CHANGE
  },
  props: {
    // States
    open: {
      type: Boolean,
      default: false
    },
    timeoutMs: {
      type: [Number, String],
      default: 5000
    },
    message: {
      type: String,
      default: ''
    },
    actionButtonText: String,
    // UI attributes
    actionType: {
      type: String,
      default: UI_SNACKBAR.ACTION_TYPE.BUTTON
    },
    stacked: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      $snackbar: null
    };
  },
  computed: {
    className() {
      return {
        'mdc-snackbar': true,
        'mdc-snackbar--stacked': this.stacked,
        'mdc-snackbar--leading': this.leading // tablet and desktop only
      };
    },
    hasAction() {
      return !!this.actionButtonText;
    },
    buttonClassName() {
      return this.actionType === UI_SNACKBAR.ACTION_TYPE.ICON
        ? [UI_GLOBAL.cssClasses.icon, 'mdc-icon-button mdc-snackbar__dismiss']
        : 'mdc-button mdc-snackbar__action';
    }
  },
  watch: {
    open(val) {
      if (val) {
        this.$snackbar.open();
      }
    },
    timeoutMs(val) {
      this.setTimeoutMs(+val);
    },
    message(val) {
      this.$snackbar.labelText = val;
    }
  },
  mounted() {
    this.$snackbar = new MDCSnackbar(this.$el);

    if (this.timeoutMs !== 5e3) {
      this.setTimeoutMs(+this.timeoutMs);
    }
    if (this.message) {
      this.$snackbar.labelText = this.message;
    }

    this.$snackbar.listen('MDCSnackbar:closed', () => {
      this.$emit(UI_SNACKBAR.EVENT.CHANGE, false);
      this.$emit(UI_SNACKBAR.EVENT.CLOSED);
    });
  },
  methods: {
    setTimeoutMs(val) {
      if (
        val >= UI_SNACKBAR.timeoutMs.MIN &&
        val <= UI_SNACKBAR.timeoutMs.MAX
      ) {
        this.$snackbar.timeoutMs = val;
      } else {
        console.warn(
          'The timeoutMs of the snackbar must be between `4000` and `10000`'
        );
      }
    }
  }
};
</script>
