import autoInstall from '../config/auto-install';
import WindowDialog from '../components/modal/window-dialog';
import getType from '../utils/typeof';

const DEFAULT_OPTIONS = {
  className: '',
  title: '',
  state: '', // success, info, warning, error, help
  stateOutlined: false,
  message: '',
  raw: false,
  buttonText: 'OK',
  callback: false
};

const template = `<window-dialog class="mdc-alert-dialog" :open="open" :options="options">
  <button type="button"
    class="mdc-button mdc-button--raised mdc-alert-dialog__button"
    data-mdc-dialog-button-default
    @click="handleClick">
    <span class="mdc-button__label">{{ options.buttonText }}</span>
  </button>
</window-dialog>`;

const BalmUI_AlertPlugin = {
  install(Vue, configs = {}) {
    let options = Object.assign({}, DEFAULT_OPTIONS, configs);

    const $alert = (customOptions = {}) => {
      return new Promise((resolve) => {
        let vm = new Vue({
          el: document.createElement('div'),
          components: {
            WindowDialog
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
          },
          mounted() {
            document.body.appendChild(this.$el);

            this.$nextTick(() => {
              this.open = true;
            });
          },
          methods: {
            handleClose() {
              this.open = false;

              document.body.removeChild(this.$el);
              vm = null;
            },
            handleClick() {
              this.handleClose();

              if (getType(this.options.callback) === 'function') {
                this.options.callback();
              } else {
                resolve();
              }
            }
          },
          template
        });
      });
    };

    Vue.prototype.$alert = $alert;
  }
};

autoInstall(BalmUI_AlertPlugin);

export default BalmUI_AlertPlugin;
