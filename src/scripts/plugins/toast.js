import { createApp } from 'vue';
import autoInstall from '../config/auto-install';
import getType from '../utils/typeof';
import { createDiv, removeDiv } from '../utils/div';

// Define toast constants
const UI_TOAST = {
  id: 'toast',
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

const template = `<div
  :class="[
    'mdc-snackbar',
    'mdc-toast',
    options.className,
    {
      'mdc-snackbar--opening': opening,
      'mdc-snackbar--open': opened
    }
  ]">
  <div class="mdc-snackbar__surface">
    <div class="mdc-snackbar__label">
      {{ options.message }}
    </div>
  </div>
</div>`;

function hasToast() {
  return document.getElementById(UI_TOAST.id);
}

const toast = (customOptions = {}) => {
  let options = Object.assign({}, globalOptions);

  if (getType(customOptions) === 'string') {
    options.message = `${customOptions}`; // To string
  } else if (getType(customOptions) === 'object') {
    options = Object.assign({}, options, customOptions);
  }

  if (hasToast()) {
    clearTimeout(toastTimer);
    clearTimeout(toastElTimer);

    toastApp.init(options);
  } else {
    const el = createDiv(UI_TOAST.id);

    toastApp = createApp({
      el: document.createElement('div'),
      data() {
        return {
          open: false,
          opening: true,
          opened: false,
          options
        };
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
        this.init(options);
      },
      methods: {
        init(options) {
          if (
            options.timeoutMs <= UI_TOAST.timeoutMs.MAX &&
            options.timeoutMs >= UI_TOAST.timeoutMs.MIN
          ) {
            this.options = options;

            this.$nextTick(() => {
              if (!hasToast()) {
                document.body.appendChild(this.$refs.toast);
              }

              this.show();
            });
          } else {
            throw new Error(
              `[BalmUI toast]: The timeoutMs of the toast must be between ${UI_TOAST.timeoutMs.MIN} and ${UI_TOAST.timeoutMs.MAX}`
            );
          }
        },
        show() {
          this.open = true;
          // hide toast
          toastTimer = setTimeout(() => {
            this.hide();
          }, this.options.timeoutMs);
        },
        hide() {
          this.open = false;

          if (!this.options.debug) {
            // remove toast
            toastElTimer = setTimeout(() => {
              try {
                removeDiv(el);
                toastApp = null;
              } catch (e) {}
            }, this.options.timeoutMs);
          }
        }
      },
      template
    }).mount(`#${UI_TOAST.id}`);
  }
};

const BalmUI_ToastPlugin = {
  install(app, options = {}) {
    globalOptions = Object.assign({}, DEFAULT_OPTIONS, options);

    app.config.globalProperties.$toast = toast;
    app.provide('toast', toast);
  }
};

const useToast = () => toast;

autoInstall(BalmUI_ToastPlugin);

export default BalmUI_ToastPlugin;
export { useToast };
