import { createApp } from 'vue';
import autoInstall from '../config/auto-install';
import MdcDialog from '../components/modal/mdc-dialog';
import getType from '../utils/typeof';
import { createDiv, removeDiv } from '../utils/div';

// Define alert dialog constants
const UI_ALERT_DIALOG = {
  id: 'balmui-alert-dialog'
};

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

let globalOptions = DEFAULT_OPTIONS;

const template = `<mdc-dialog class="mdc-alert-dialog" :open="open" :options="options">
  <button type="button"
    class="mdc-button mdc-button--raised mdc-alert-dialog__button"
    data-mdc-dialog-button-default
    @click="handleClick">
    <span class="mdc-button__label">{{ options.buttonText }}</span>
  </button>
</mdc-dialog>`;

const alertDialog = (customOptions = {}) => {
  let options = Object.assign({}, globalOptions);

  if (getType(customOptions) === 'string') {
    options.message = `${customOptions}`; // To string
  } else if (getType(customOptions) === 'object') {
    options = Object.assign({}, options, customOptions);
  }

  return new Promise((resolve) => {
    const el = createDiv(UI_ALERT_DIALOG.id);

    let alertApp = createApp({
      components: {
        MdcDialog
      },
      data() {
        return {
          open: false,
          options
        };
      },
      mounted() {
        this.$nextTick(() => {
          this.open = true;
        });
      },
      methods: {
        handleClose() {
          this.open = false;

          removeDiv(el);
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
    }).mount(`#${UI_ALERT_DIALOG.id}`);
  });
};

const BalmUI_AlertPlugin = {
  install(app, options = {}) {
    globalOptions = Object.assign({}, DEFAULT_OPTIONS, options);

    app.config.globalProperties.$alert = alertDialog;
    app.provide('alert', alertDialog);
  }
};

const useAlert = () => alertDialog;

autoInstall(BalmUI_AlertPlugin);

export default BalmUI_AlertPlugin;
export { useAlert };
