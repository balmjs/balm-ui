import { createApp } from 'vue';
import autoInstall from '../config/auto-install';
import MdcDialog from '../components/modal/mdc-dialog';
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

const template = `<mdc-dialog ref="alert" class="mdc-alert-dialog" :open="open" :options="options">
  <button type="button"
    class="mdc-button mdc-button--raised mdc-alert-dialog__button"
    data-mdc-dialog-button-default
    @click="handleClick">
    <span class="mdc-button__label">{{ options.buttonText }}</span>
  </button>
</mdc-dialog>`;

const BalmUI_AlertPlugin = {
  install(app, globalOptions = {}) {
    options = Object.assign({}, DEFAULT_OPTIONS, globalOptions);

    const alertDialog = (customOptions = {}) => {
      return new Promise((resolve) => {
        let alertApp = createApp({
          el: document.createElement('div'),
          components: {
            MdcDialog
          },
          data() {
            return {
              open: false,
              options
            };
          },
          created() {
            if (getType(customOptions) === 'string') {
              this.options.message = `${customOptions}`; // To string
            } else if (getType(customOptions) === 'object') {
              this.options = Object.assign({}, this.options, customOptions);
            }
          },
          mounted() {
            document.body.appendChild(this.$refs.alert);

            this.$nextTick(() => {
              this.open = true;
            });
          },
          methods: {
            handleClose() {
              this.open = false;

              document.body.removeChild(this.$refs.alert);
              alertApp = null;
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

    app.config.globalProperties.$alert = alertDialog;
    app.provide('alert', alertDialog);
  }
};

const useAlert = () => alertDialog;

autoInstall(BalmUI_AlertPlugin);

export default BalmUI_AlertPlugin;
export { useAlert };
