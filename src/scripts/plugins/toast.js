import autoInstall from '../config/auto-install';
import UiSnackbar from '../components/common/snackbar';
import getType from '../utils/typeof';

const DEFAULT_OPTIONS = {
  className: '',
  alignStart: false,
  message: '',
  timeout: 2750,
  multiline: false,
  fouc: false
};

const template = `<ui-snackbar
  :active="active"
  :class="['mdc-toast', options.className]"
  :alignStart="options.alignStart"
  :message="options.message"
  :timeout="options.timeout"
  :multiline="options.multiline"
  :fouc="options.fouc"
  @change="handleChange">
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
            active: false,
            options
          },
          created() {
            if (getType(customOptions) === 'string') {
              this.options.message = `${customOptions}`; // To string
            } else if (getType(customOptions) === 'object') {
              this.options = Object.assign({}, this.options, customOptions);
            }

            this.$nextTick(() => {
              document.body.appendChild(this.$el);
              setTimeout(() => {
                this.active = true;
              }, 1);
            });
          },
          methods: {
            handleChange() {
              this.active = false;
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
