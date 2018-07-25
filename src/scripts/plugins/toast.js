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

    const $toast = (customProps = {}) => {
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
            if (getType(customProps) === 'string') {
              this.props.message = `${customProps}`; // To string
            } else if (getType(customProps) === 'object') {
              this.props = Object.assign({}, this.props, customProps);
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
