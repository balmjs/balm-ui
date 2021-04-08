<template>
  <!-- Container -->
  <div :class="className">
    <div class="mdc-snackbar__surface" role="status" aria-relevant="additions">
      <!-- Text label -->
      <div class="mdc-snackbar__label" aria-atomic="false">
        <slot>{{ message }}</slot>
      </div>
      <!-- Action (optional) -->
      <div class="mdc-snackbar__actions" aria-atomic="true">
        <slot name="action" :actionClass="actionButtonClassName">
          <mdc-icon-button v-if="canDismiss" :class="actionButtonClassName">
            close
          </mdc-icon-button>
          <template v-else>
            <mdc-button v-if="actionButtonText" :class="actionButtonClassName">
              {{ actionButtonText }}
            </mdc-button>
          </template>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { MDCSnackbar } from '../../../material-components-web/snackbar';
import { strings } from '../../../material-components-web/snackbar/constants';
import MdcButton from '../button/mdc-button.vue';
import MdcIconButton from '../icon-button/mdc-icon-button.vue';
import domMixin from '../../mixins/dom';

// Define snackbar constants
const UI_SNACKBAR = {
  ACTION_TYPE: {
    ACTION_BUTTON: 0,
    DISMISS_ICON: 1
  },
  timeoutMs: {
    MIN: 4000,
    MAX: 10000,
    DEFAULTS: 5000
  },
  position: {
    TOP: 'top',
    BOTTOM: 'bottom',
    CENTER: 'center'
  },
  EVENT: {
    CHANGE: 'update:modelValue',
    CLOSED: 'closed'
  }
};

export default {
  name: 'UiSnackbar',
  components: {
    MdcButton,
    MdcIconButton
  },
  mixins: [domMixin],
  props: {
    actionType: {
      type: Number,
      default: UI_SNACKBAR.ACTION_TYPE.ACTION_BUTTON
    },
    // States
    modelValue: {
      type: Boolean,
      default: false
    },
    timeoutMs: {
      type: [Number, String],
      default: UI_SNACKBAR.timeoutMs.DEFAULTS
    },
    message: {
      type: String,
      default: ''
    },
    actionButtonText: {
      type: String,
      default: ''
    },
    // UI attributes
    stacked: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: UI_SNACKBAR.position.BOTTOM
    }
  },
  emits: [UI_SNACKBAR.EVENT.CHANGE, UI_SNACKBAR.EVENT.CLOSED],
  data() {
    return {
      $snackbar: null
    };
  },
  computed: {
    positionClassName() {
      return ['top', 'center'].includes(this.position)
        ? `mdc-snackbar--${this.position}`
        : '';
    },
    className() {
      const isOpen =
        this.el && this.el.classList.contains('mdc-snackbar--open'); // fix(@ui): for `position`

      return [
        {
          'mdc-snackbar': true,
          'mdc-snackbar--stacked': this.stacked,
          'mdc-snackbar--leading': this.leading, // tablet and desktop only
          'mdc-snackbar--open': isOpen
        },
        this.positionClassName
      ];
    },
    canDismiss() {
      return this.actionType === UI_SNACKBAR.ACTION_TYPE.DISMISS_ICON;
    },
    actionButtonClassName() {
      return this.canDismiss ? 'mdc-snackbar__dismiss' : 'mdc-snackbar__action';
    }
  },
  watch: {
    modelValue(val) {
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
    this.$snackbar = new MDCSnackbar(this.el);

    if (this.timeoutMs !== UI_SNACKBAR.timeoutMs.DEFAULTS) {
      this.setTimeoutMs(+this.timeoutMs);
    }
    if (this.message) {
      this.$snackbar.labelText = this.message;
    }

    this.$snackbar.listen(strings.CLOSED_EVENT, () => {
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
          '[UiSnackbar]',
          `The 'timeoutMs' prop must be between ${UI_SNACKBAR.timeoutMs.MIN} and ${UI_SNACKBAR.timeoutMs.MAX}`
        );
      }
    }
  }
};
</script>
