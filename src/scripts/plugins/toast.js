import Vue from 'vue';
import autoInstall from '../config/auto-install';
import { getOptions, createModal, removeModel } from '../utils/modal';

// Define toast constants
const UI_TOAST = {
  timeoutMs: {
    MIN: 2000,
    MAX: 3500,
    DEFAULTS: 2000
  }
};

const DEFAULT_OPTIONS = {
  className: '',
  timeoutMs: UI_TOAST.timeoutMs.DEFAULTS,
  message: '',
  debug: false
};

let globalOptions = DEFAULT_OPTIONS;
let toastApp;
let toastTimer;
let toastElTimer;

const template = `<div :class="className">
  <div class="mdc-snackbar__surface">
    <div class="mdc-snackbar__label">
      {{ options.message }}
    </div>
  </div>
</div>`;

function hasToast() {
  return document.querySelector('.mdc-toast');
}

function createToast(options) {
  return new Vue({
    el: document.createElement('div'),
    data() {
      return {
        open: false,
        opening: true,
        opened: false,
        options
      };
    },
    computed: {
      className() {
        return [
          'mdc-snackbar',
          'mdc-toast',
          this.options.className,
          {
            'mdc-snackbar--opening': this.opening,
            'mdc-snackbar--open': this.opened
          }
        ];
      }
    },
    watch: {
      open(val) {
        if (val) {
          // animation
          setTimeout(() => {
            this.opened = true;
            setTimeout(() => {
              this.opening = false;
            }, 150);
          }, 150);
        } else {
          // reset
          this.opening = true;
          this.opened = false;
        }
      }
    },
    mounted() {
      this.render(options);
    },
    methods: {
      hide() {
        this.open = false;

        if (!this.options.debug) {
          // remove toast
          toastElTimer = setTimeout(() => {
            try {
              removeModel(this.$el);
              toastApp = null;
            } catch (e) {}
          }, this.options.timeoutMs);
        }
      },
      show() {
        this.open = true;
        // hide toast
        toastTimer = setTimeout(() => {
          this.hide();
        }, this.options.timeoutMs);
      },
      render(options) {
        if (
          options.timeoutMs <= UI_TOAST.timeoutMs.MAX &&
          options.timeoutMs >= UI_TOAST.timeoutMs.MIN
        ) {
          this.options = options;

          if (!hasToast()) {
            createModal(this.$el);
          }

          this.show();
        } else {
          throw new Error(
            `[BalmUI] The timeoutMs of the toast must be between ${UI_TOAST.timeoutMs.MIN} and ${UI_TOAST.timeoutMs.MAX}`
          );
        }
      }
    },
    template
  });
}

function toast(customOptions = {}) {
  const options = getOptions(globalOptions, customOptions);

  if (hasToast()) {
    clearTimeout(toastTimer);
    clearTimeout(toastElTimer);

    toastApp.render(options);
  } else {
    toastApp = createToast(options);
  }
}

const BalmUI_ToastPlugin = {
  install(Vue, options = {}) {
    globalOptions = Object.assign({}, DEFAULT_OPTIONS, options);

    Vue.prototype.$toast = toast;
  }
};

const useToast = () => toast;

autoInstall(BalmUI_ToastPlugin);

export default BalmUI_ToastPlugin;
export { useToast };
