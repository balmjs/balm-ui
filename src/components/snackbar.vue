<template>
  <div class="mdl-snackbar mdl-js-snackbar"
    aria-live="assertive"
    aria-atomic="true"
    aria-relevant="text"
    ref="popup">
    <div class="mdl-snackbar__text">{{ currentMessage }}</div>
    <button class="mdl-snackbar__action" type="button">{{ actionText }}</button>
  </div>
</template>

<script>
import '../material-design-lite/snackbar/snackbar';

const TOAST = 0;
const SNACKBAR = 1;
const CALLBACK_DONE = 'done';

export default {
  name: 'ui-snackbar',
  props: {
    type: {
      type: [Number, String],
      default: 0
    },
    // Marks the snackbar as active which causes it to display.
    active: {
      type: Boolean,
      default: false
    },
    // The text message to display.
    message: {
      type: String,
      required: true
    },
    // The amount of time in milliseconds to show the snackbar.
    timeout: {
      type: Number,
      default: 2750
    },
    // The function to execute when the action is clicked.
    actionHandler: Function,
    // The text to display for the action button.
    actionText: String
  },
  data() {
    return {
      currentMessage: this.message
    };
  },
  computed: {
    isSnackbar() {
      return +this.type === SNACKBAR;
    }
  },
  watch: {
    message(val) {
      this.currentMessage = val;
    },
    active(val) {
      if (val) {
        this.show(val);
      }
    }
  },
  methods: {
    show() {
      let data = {
        message: this.currentMessage,
        timeout: this.timeout
      };

      if (this.isSnackbar) {
        data.actionHandler = this.actionHandler; // TODO: has bug
        data.actionText = this.actionText;
      }

      this.$refs.popup.MaterialSnackbar.showSnackbar(data);

      setTimeout(() => {
        this.$emit(CALLBACK_DONE);
      }, this.timeout);
    }
  },
  created() {
    if (this.isSnackbar) {
      if (!(this.actionHandler && this.actionText)) {
        console.warn('`actionHandler` and `actionText` is required in a snackbar.');
      }
    }
  },
  mounted() {
    this.$ui.upgradeElement(this.$el, 'MaterialSnackbar');
  }
};
</script>
