import UiSnackbar from '../components/common/snackbar';
import getType from '../helpers/typeof';

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

const BalmUIToastPlugin = {
  // TODO: options
  install(Vue, options) {
    let vm;

    const UiToast = (toastOptions = '') => {
      if (!document.querySelector('.mdc-toast')) {
        vm = new Vue({
          el: document.createElement('div'),
          components: {
            UiSnackbar
          },
          data: {
            active: false,
            options: DEFAULT_OPTIONS
          },
          created() {
            if (getType(toastOptions) === 'string') {
              this.options.message = toastOptions;
            } else if (getType(toastOptions) === 'object') {
              this.options = Object.assign(DEFAULT_OPTIONS, toastOptions);
            }
          },
          template
        });

        document.body.appendChild(vm.$el);
        setTimeout(() => {
          vm.active = true;
        }, DELAY);

        setTimeout(() => {
          vm.active = false;
          setTimeout(() => {
            document.body.removeChild(vm.$el);
            vm = null;
          }, DELAY);
        }, vm.options.timeout);
      }
    };

    Vue.prototype.$toast = UiToast;
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BalmUIToastPlugin);
}

export default BalmUIToastPlugin;
