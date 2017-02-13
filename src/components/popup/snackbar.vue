<template>
  <div :class="className"
    ref="popup"
    aria-live="assertive"
    aria-atomic="true"
    aria-relevant="text">
    <div class="mdl-snackbar__text">{{ currentMessage }}</div>
    <button class="mdl-snackbar__action" type="button">{{ actionText }}</button>
  </div>
</template>

<script>
import '../../material-design-lite/snackbar/snackbar';
import {isString} from '../utils/helper';

const TYPES = ['toast', 'snackbar'];
const TYPE_TOAST = 0;
const TYPE_SNACKBAR = 1;
const EVENT_DONE = 'done';

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
    actionText: String,
    mini: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentActive: this.active,
      currentMessage: this.message
    };
  },
  computed: {
    className() {
      return {
        'mdl-snackbar': true,
        'mdl-js-snackbar': true,
        'mdl-snackbar--active': this.active,
        'mdl-snackbar--mini': this.mini
      }
    },
    isSnackbar() {
      let type = isString(this.type) ? TYPES[TYPE_SNACKBAR] : TYPE_SNACKBAR;
      return this.type === type;
    }
  },
  watch: {
    message(val) {
      this.currentMessage = val;
    },
    active(val) {
      if (!this.currentActive && val) {
        this.currentActive = val;
        this.show();
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
        data.actionHandler = this.actionHandler;
        data.actionText = this.actionText;
      }

      this.$refs.popup.MaterialSnackbar.showSnackbar(data);

      setTimeout(() => {
        this.currentActive = false;
        this.$emit(EVENT_DONE);
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
