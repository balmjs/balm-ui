import UiSnackbar from '../components/snackbar';
import {isString, isObject} from '../helpers';

const DEFAULT_OPTIONS = {
  className: '',
  message: '',
  timeout: 3000,
  multiline: false
};
const DELAY = 200;

const template =
`<ui-snackbar
  :class="['mdc-toast', options.className]"
  :active="active"
  :message="options.message"
  :multiline="options.multiline">
</ui-snackbar>`;

export default {
  install(Vue) {
    let vm;

    const toast = (options = '') => {
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
            if (isString(options)) {
              this.options.message = options;
            } else if (isObject(options)) {
              this.options = Object.assign(DEFAULT_OPTIONS, options);
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

    Vue.prototype.$toast = toast;
  }
};
