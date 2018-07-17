import autoInstall from '../config/auto-install';
import UiSnackbar from '../components/common/snackbar';
import getType from '../utils/typeof';

const DEFAULT_PROPS = {
  className: '',
  alignStart: false,
  message: '',
  timeout: 2750,
  multiline: false,
  fouc: false
};
const DELAY = 200;

const template = `<ui-snackbar
  :active="active"
  :class="['mdc-toast', props.className]"
  :alignStart="props.alignStart"
  :message="props.message"
  :timeout="props.timeout"
  :multiline="props.multiline"
  :fouc="props.fouc"
  @change="handleChange">
</ui-snackbar>`;

const BalmUI_ToastPlugin = {
  install(Vue, configs = {}) {
    let props = Object.assign({}, DEFAULT_PROPS, configs);

    const $toast = (customOptions = {}) => {
      if (!document.querySelector('.mdc-toast')) {
        let vm = new Vue({
          el: document.createElement('div'),
          components: {
            UiSnackbar
          },
          data: {
            active: false,
            props
          },
          created() {
            if (getType(customOptions) === 'string') {
              this.props.message = customOptions;
            } else if (getType(customOptions) === 'object') {
              this.props = Object.assign({}, this.props, customOptions);
            }

            this.$nextTick(() => {
              document.body.appendChild(vm.$el);

              setTimeout(() => {
                this.active = true;
              }, DELAY);
            });
          },
          methods: {
            handleChange() {
              this.active = false;

              setTimeout(() => {
                document.body.removeChild(vm.$el);
                vm = null;
              }, DELAY);
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
