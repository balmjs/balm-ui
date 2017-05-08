<template>
  <div class="mdc-snackbar"
       aria-live="assertive"
       aria-atomic="true"
       aria-hidden="true">
    <div class="mdc-snackbar__text"></div>
    <div class="mdc-snackbar__action-wrapper">
      <ui-button :class="'mdc-snackbar__action-button'"></ui-button>
    </div>
  </div>
</template>

<script>
import {MDCSnackbar} from '../material-components-web/snackbar';
import UiButton from './button';

const UI_EVENT_DONE = 'done';

export default {
  name: 'ui-snackbar',
  components: {
    UiButton
  },
  props: {
    active: {
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
    actionOnBottom: Boolean
  },
  data() {
    return {
      $snackbar: null
    };
  },
  computed: {
    hasAction() {
      return this.actionHandler && this.actionText;
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
      console.warn('`actionText` is required if `actionHandler` is set');
    }
    if (!this.multiline && this.actionOnBottom) {
      console.warn('`actionOnBottom` applies when `multiline` is true');
    }
  },
  mounted() {
    if (!this.$snackbar) {
      this.$snackbar = new MDCSnackbar(this.$el);
    }
  }
};
</script>
