<template>
  <!-- Container -->
  <div :class="className"
    aria-live="assertive"
    aria-atomic="true"
    aria-hidden="true"
    :style="style">
    <!-- Text label -->
    <div class="mdc-snackbar__text">
      <slot>{{ message }}</slot>
    </div>
    <!-- Action (optional) -->
    <div v-show="hasAction" class="mdc-snackbar__action-wrapper">
      <button type="button" class="mdc-snackbar__action-button">
        {{ actionText }}
      </button>
    </div>
  </div>
</template>

<script>
import { MDCSnackbar } from '../../../material-components-web/snackbar';

// Define constants
const UI_SNACKBAR = {
  EVENT: {
    CHANGE: 'change'
  }
};

export default {
  name: 'ui-snackbar',
  model: {
    prop: 'active',
    event: UI_SNACKBAR.EVENT.CHANGE
  },
  props: {
    // States
    active: {
      type: Boolean,
      default: false
    },
    // UI attributes
    alignStart: {
      type: Boolean,
      default: false
    },
    // Showing a message and action
    message: {
      type: String,
      default: ''
    },
    timeout: {
      type: [Number, String],
      default: 2750
    },
    actionHandler: Function,
    actionText: String,
    multiline: Boolean,
    actionOnBottom: Boolean,
    dismiss: {
      type: Boolean,
      default: true
    },
    // Avoiding Flash-Of-Unstyled-Content (FOUC)
    fouc: {
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
        'mdc-snackbar--align-start': this.alignStart // tablet and desktop only
      };
    },
    hasAction() {
      return !!(this.actionHandler && this.actionText);
    },
    style() {
      return this.fouc
        ? {
            transform: 'translateY(100%)'
          }
        : {};
    }
  },
  watch: {
    active(val) {
      if (val) {
        this.show();
      }
    },
    dismiss(val) {
      this.$snackbar.dismissesOnAction = val;
    }
  },
  created() {
    if (this.actionHandler && !this.actionText) {
      console.warn('`actionHandler` and `actionText` need be settled');
    }
    if (!this.multiline && this.actionOnBottom) {
      console.warn('`actionOnBottom` applies when `multiline` is true');
    }
  },
  mounted() {
    this.$snackbar = new MDCSnackbar(this.$el);

    this.$snackbar.listen('MDCSnackbar:hide', () => {
      this.$emit(UI_SNACKBAR.EVENT.CHANGE, false);
    });
  },
  methods: {
    show() {
      if (this.message) {
        let dataObj = {
          message: this.message,
          timeout: this.timeout,
          multiline: this.multiline
        };

        if (this.hasAction) {
          dataObj.actionHandler = this.actionHandler;
          dataObj.actionText = this.actionText;
        }

        if (this.multiline) {
          dataObj.actionOnBottom = this.actionOnBottom;
        }

        this.$snackbar.show(dataObj);
      }
    }
  }
};
</script>
