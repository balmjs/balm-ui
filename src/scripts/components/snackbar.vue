<template>
  <div class="mdc-snackbar"
       aria-live="assertive"
       aria-atomic="true"
       aria-hidden="true"
       :style="style">
    <div class="mdc-snackbar__text">{{ message }}</div>
    <div class="mdc-snackbar__action-wrapper">
      <button type="button" class="mdc-button mdc-snackbar__action-button">
        {{ actionText }}
      </button>
    </div>
  </div>
</template>

<script>
import {MDCSnackbar} from '../material-components-web/snackbar';

const UI_EVENT_DONE = 'done';

export default {
  name: 'ui-snackbar',
  props: {
    // state
    active: {
      type: Boolean,
      default: false
    },
    // ui attributes
    cssOnly: {
      type: Boolean,
      default: false
    },
    alignStart: {
      type: Boolean,
      default: false
    },
    message: String,
    timeout: {
      type: [Number, String],
      default: 2750
    },
    actionHandler: {
      type: [Function, Boolean],
      default: false
    },
    actionText: String,
    multiline: Boolean,
    actionOnBottom: Boolean,
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
        'mdc-snackbar--align-start': this.alignStart
      };
    },
    hasAction() {
      return this.actionHandler && this.actionText;
    },
    style() {
      return this.fouc ? {
        transform: 'translateY(100%)'
      } : {};
    }
  },
  methods: {
    show() {
      if (this.$snackbar && this.message) {
        let data =  {
          message: this.message,
          multiline: this.multiline
        };
        if (this.hasAction) {
          data.actionHandler = this.actionHandler;
          data.actionText = this.actionText;
        }
        if (this.multiline) {
          data.actionOnBottom = this.actionOnBottom;
        }
        this.$snackbar.show(data);
      }
      this.$emit(UI_EVENT_DONE);
    }
  },
  watch: {
    active(val) {
      if (val) {
        this.show();
      }
    }
  },
  created() {
    if (this.actionHandler && !this.actionText) {
      console.warn('`actionHandler` and `actionText` need be settled.');
    }
    if (!this.multiline && this.actionOnBottom) {
      console.warn('`actionOnBottom` applies when `multiline` is true.');
    }
  },
  mounted() {
    if (!this.$snackbar && !this.cssOnly) {
      this.$snackbar = new MDCSnackbar(this.$el);
    }
  }
};
</script>
