import { createApp } from 'vue';
import autoInstall from '../config/auto-install';
import MdcDialog from '../components/modal/mdc-dialog';
import getType from '../utils/typeof';
import { createDiv, removeDiv } from '../utils/div';

// Define confirm dialog constants
const UI_CONFIRM_DIALOG = {
  id: 'confirm-dialog'
};

const DEFAULT_OPTIONS = {
  className: '',
  title: '',
  state: '', // success, info, warning, error, help
  stateOutlined: false,
  message: '',
  raw: false,
  acceptText: 'OK',
  cancelText: 'Cancel',
  callback: false
};

let globalOptions = DEFAULT_OPTIONS;

const template = `<mdc-dialog class="mdc-confirm-dialog" :open="open" :options="options">
  <button type="button"
    class="mdc-button mdc-button--raised mdc-confirm-dialog__primary-button"
    data-mdc-dialog-button-default
    @click="handleConfirm(true)">
    <span class="mdc-button__label">{{ options.acceptText }}</span>
  </button>
  <button type="button"
    class="mdc-button mdc-button--outlined mdc-confirm-dialog__secondary-button"
    @click="handleConfirm(false)">
    <span class="mdc-button__label">{{ options.cancelText }}</span>
  </button>
</mdc-dialog>`;

const confirmDialog = (customOptions = {}) => {
  let options = Object.assign({}, globalOptions);

  if (getType(customOptions) === 'string') {
    this.options.message = `${customOptions}`; // To string
  } else if (getType(customOptions) === 'object') {
    this.options = Object.assign({}, this.options, customOptions);
  }

  return new Promise((resolve) => {
    const el = createDiv(UI_CONFIRM_DIALOG.id);

    let confirmApp = createApp({
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
          confirmApp = null;
        },
        handleConfirm(result) {
          this.handleClose();

          if (getType(this.options.callback) === 'function') {
            this.options.callback(result);
          } else {
            resolve(result);
          }
        }
      },
      template
    }).mount(`#${UI_CONFIRM_DIALOG.id}`);
  });
};

const BalmUI_ConfirmPlugin = {
  install(app, options = {}) {
    globalOptions = Object.assign({}, DEFAULT_OPTIONS, options);

    app.config.globalProperties.$confirm = confirmDialog;
    app.provide('confirm', confirmDialog);
  }
};

const useConfirm = () => confirmDialog;

autoInstall(BalmUI_ConfirmPlugin);

export default BalmUI_ConfirmPlugin;
export { useConfirm };
