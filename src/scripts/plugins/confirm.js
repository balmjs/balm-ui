import { createApp } from 'vue';
import autoInstall from '../config/auto-install';
import MdcDialog from '../components/modal/mdc-dialog';
import { getOptions, createModal, removeModel } from '../utils/modal';

// Define confirm dialog constants
const UI_CONFIRM_DIALOG = {
  id: 'balmui-confirm-dialog'
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
let confirmEl;
let confirmApp;

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

function createConfirmDialog(options, callback) {
  confirmEl = createModal(UI_CONFIRM_DIALOG.id);

  confirmApp = createApp({
    name: 'BalmUIConfirm',
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
    unmounted() {
      removeModel(confirmEl);
    },
    methods: {
      handleClose() {
        this.open = false;

        confirmApp.unmount(`#${UI_CONFIRM_DIALOG.id}`);
      },
      handleConfirm(result) {
        this.handleClose();

        if (typeof this.options.callback === 'function') {
          this.options.callback(result);
        } else {
          callback(result);
        }
      }
    },
    template
  });

  return confirmApp;
}

function confirmDialog(customOptions = {}) {
  const options = getOptions(globalOptions, customOptions);

  return new Promise((resolve) => {
    createConfirmDialog(options, resolve).mount(`#${UI_CONFIRM_DIALOG.id}`);
  });
}

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
