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
  message: ''
};

const template = `<div
  :class="[
    'mdc-snackbar',
    'mdc-toast',
    options.className,
    {'mdc-snackbar--open': open}
  ]">
  <div class="mdc-snackbar__surface">
    <div class="mdc-snackbar__label">
      {{ options.message }}
    </div>
  </div>
</div>`;

let vm;
let toastTimer;
let toastElTimer;

function hasToast() {
  return document.querySelector('.mdc-toast');
}

const BalmUI_ToastPlugin = {
  install(Vue, configs = {}) {
    let options = Object.assign({}, DEFAULT_OPTIONS, configs);

    const $toast = (customOptions = {}) => {
      if (getType(customOptions) === 'string') {
        options.message = `${customOptions}`; // To string
      } else if (getType(customOptions) === 'object') {
        options = Object.assign({}, options, customOptions);
      }

      if (hasToast()) {
        clearTimeout(toastTimer);
        clearTimeout(toastElTimer);

        vm.init(options);
      } else {
        vm = new Vue({
          el: document.createElement('div'),
          data: {
            open: false,
            options
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
                    document.body.appendChild(this.$el);
                  }

                  this.show();
                });
              } else {
                throw new Error(
                  `The timeoutMs of the toast must be between ${UI_TOAST.timeoutMs.MIN} and ${UI_TOAST.timeoutMs.MAX}`
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

              // remove toast
              toastElTimer = setTimeout(() => {
                try {
                  document.body.removeChild(this.$el);
                  vm = null;
                } catch (e) {}
              }, this.options.timeoutMs);
            }
          },
          template
        });
      }
    };

    Vue.prototype.$toast = $toast;
  }
};

autoInstall(BalmUI_ToastPlugin);

export default BalmUI_ToastPlugin;
