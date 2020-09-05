import autoInstall from '../config/auto-install';
import UiSnackbar from '../components/modal/snackbar';
import getType from '../utils/typeof';

// Define toast constants
const UI_TOAST = {
  timeoutMs: {
    MIN: 1000,
    MAX: 4000,
    DEFAULTS: 1800
  }
};

const DEFAULT_OPTIONS = {
  className: '',
  timeoutMs: UI_TOAST.timeoutMs.DEFAULTS,
  message: ''
};

const template = `<ui-snackbar
  :open="open"
  :class="['mdc-toast', options.className]"
  :message="options.message"
  @closed="handleClosed">
</ui-snackbar>`;

const BalmUI_ToastPlugin = {
  install(Vue, configs = {}) {
    let options = Object.assign({}, DEFAULT_OPTIONS, configs);

    const $toast = (customOptions = {}) => {
      if (!document.querySelector('.mdc-toast')) {
        let vm = new Vue({
          el: document.createElement('div'),
          components: {
            UiSnackbar
          },
          data: {
            open: false,
            options
          },
          created() {
            if (getType(customOptions) === 'string') {
              this.options.message = `${customOptions}`; // To string
            } else if (getType(customOptions) === 'object') {
              this.options = Object.assign({}, this.options, customOptions);
            }

            if (
              this.options.timeoutMs < UI_TOAST.timeoutMs.MIN ||
              this.options.timeoutMs > UI_TOAST.timeoutMs.MAX
            ) {
              this.options.timeoutMs = UI_TOAST.timeoutMs.DEFAULTS;
              console.warn(
                `The timeoutMs of the toast must be between ${UI_TOAST.timeoutMs.MIN} and ${UI_TOAST.timeoutMs.MAX}`
              );
            }

            this.$nextTick(() => {
              document.body.appendChild(this.$el);
              setTimeout(() => {
                this.open = true;

                setTimeout(() => {
                  vm.handleClosed();
                }, options.timeoutMs);
              }, 1);
            });
          },
          methods: {
            handleClosed() {
              if (vm) {
                this.open = false;
                this.$nextTick(() => {
                  document.body.removeChild(this.$el);
                  vm = null;
                });
              }
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
