import Vue from 'vue';
import autoInstall from '../config/auto-install';
import MdcDialog from '../components/modal/mdc-dialog';
import { getOptions, createModal, removeModel } from '../utils/modal';

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

function createConfirmDialog(options, done) {
  confirmApp = new Vue({
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
    mounted() {
      createModal(this.$el);

      this.open = true;
    },
    methods: {
      handleClose() {
        this.open = false;

        removeModel(this.$el);
        confirmApp = null;
      },
      handleConfirm(result) {
        this.handleClose();

        if (typeof this.options.callback === 'function') {
          this.options.callback(result);
        } else {
          done(result);
        }
      }
    },
    template
  });
}

function confirmDialog(customOptions = {}) {
  const options = getOptions(globalOptions, customOptions);

  return new Promise((resolve) => {
    createConfirmDialog(options, resolve);
  });
}

const BalmUI_ConfirmPlugin = {
  install(Vue, options = {}) {
    globalOptions = Object.assign({}, DEFAULT_OPTIONS, options);

    Vue.prototype.$confirm = confirmDialog;
  }
};

const useConfirm = () => confirmDialog;

autoInstall(BalmUI_ConfirmPlugin);

export default BalmUI_ConfirmPlugin;
export { useConfirm };
