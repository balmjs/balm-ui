import autoInstall from '../config/auto-install';
import UiSnackbar from '../components/common/snackbar';
import getType from '../utilities/typeof';

const DEFAULT_OPTIONS = {
  className: '',
  message: '',
  timeout: 3000,
  multiline: false
};
const DELAY = 200;

const template = `<ui-snackbar
  :class="['mdc-toast', options.className]"
  :active="active"
  :message="options.message"
  :multiline="options.multiline">
</ui-snackbar>`;

const BalmUI_ToastPlugin = {
  install(Vue, config = {}) {
    let options = Object.assign({}, DEFAULT_OPTIONS, config);

    const $toast = (customOptions = {}) => {
      if (!document.querySelector('.mdc-toast')) {
        let vm = new Vue({
          el: document.createElement('div'),
          components: {
            UiSnackbar
          },
          data: {
            active: false,
            options
          },
          created() {
            if (getType(customOptions) === 'string') {
              this.options.message = customOptions;
            } else if (getType(customOptions) === 'object') {
              this.options = Object.assign({}, this.options, customOptions);
            }

            this.$nextTick(() => {
              document.body.appendChild(vm.$el);

              setTimeout(() => {
                this.active = true;
              }, DELAY);

              setTimeout(() => {
                this.active = false;
                setTimeout(() => {
                  document.body.removeChild(vm.$el);
                  vm = null;
                }, DELAY);
              }, this.options.timeout);
            });
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
