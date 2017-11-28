<template>
  <div class="mdc-snackbar"
       aria-live="assertive"
       aria-atomic="true"
       aria-hidden="true"
       :style="style">
    <div class="mdc-snackbar__text">{{ message }}</div>
    <div v-show="hasAction" class="mdc-snackbar__action-wrapper">
      <button type="button" class="mdc-snackbar__action-button">
        {{ actionText }}
      </button>
    </div>
  </div>
</template>

<script>
import {MDCSnackbar} from '../../../material-components-web/snackbar';

const UI_EVENT_CALLBACK = 'callback';

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
    // Showing a message and action
    message: String,
    timeout: {
      type: [Number, String],
      default: 2750
    },
    actionHandler: Function,
    actionText: String,
    multiline: Boolean,
    actionOnBottom: Boolean,
    dismissesOnAction: {
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
      return this.actionHandler && this.actionText;
    },
    style() {
      return this.fouc ? {
        transform: 'translateY(100%)'
      } : {};
    }
  },
  watch: {
    active(val) {
      if (val) {
        this.show();
      }
    },
    dismissesOnAction(val) {
      if (this.$snackbar) {
        this.$snackbar.dismissesOnAction = val;
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
  },
  methods: {
    show() {
      if (this.$snackbar && this.message) {
        let dataObj =  {
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
      this.$emit(UI_EVENT_CALLBACK);
    }
  }
};
</script>
