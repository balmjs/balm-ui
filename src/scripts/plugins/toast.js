import { createApp } from 'vue';
import autoInstall from '../config/auto-install';
import getType from '../utils/typeof';

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

const template = `<div ref="toast"
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

let toastApp;
let toastTimer;
let toastElTimer;

function hasToast() {
  return document.querySelector('.mdc-toast');
}

const BalmUI_ToastPlugin = {
  install(app, configs = {}) {
    let options = Object.assign({}, DEFAULT_OPTIONS, configs);

    const toast = (customOptions = {}) => {
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
        toastApp = createApp({
          el: document.createElement('div'),
          data: {
            open: false,
            opening: true,
            opened: false,
            options
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
                    document.body.removeChild(this.$refs.toast);
                    toastApp = null;
                  } catch (e) {}
                }, this.options.timeoutMs);
              }
            }
          },
          template
        });
      }
    };

    app.config.globalProperties.$toast = toast;
    app.provide('toast', toast);
  }
};

const useToast = () => toast;

autoInstall(BalmUI_ToastPlugin);

export default BalmUI_ToastPlugin;
export { useToast };
