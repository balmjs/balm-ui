import autoInstall from '../config/auto-install';
import UiSnackbar from '../components/common/snackbar';
import getType from '../utils/typeof';

const DEFAULT_OPTIONS = {
  className: '',
  timeoutMs: 5000,
  labelText: ''
};

const template = `<ui-snackbar
  :open="open"
  :class="['mdc-toast', options.className]"
  :timeoutMs="options.timeoutMs"
  :labelText="options.labelText"
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
              this.options.labelText = `${customOptions}`; // To string
            } else if (getType(customOptions) === 'object') {
              this.options = Object.assign({}, this.options, customOptions);
            }

            this.$nextTick(() => {
              document.body.appendChild(this.$el);
              setTimeout(() => {
                this.open = true;
              }, 1);
            });
          },
          methods: {
            handleClosed() {
              this.open = false;
              this.$nextTick(() => {
                document.body.removeChild(this.$el);
                vm = null;
              });
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
