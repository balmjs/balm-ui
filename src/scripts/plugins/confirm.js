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
  acceptText: 'OK',
  cancelText: 'Cancel',
  callback: false
};

const template = `<mdc-dialog ref="confirm" class="mdc-confirm-dialog" :open="open" :options="options">
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

const BalmUI_ConfirmPlugin = {
  install(app, configs = {}) {
    let options = Object.assign({}, DEFAULT_OPTIONS, configs);

    const confirmDialog = (customOptions = {}) => {
      return new Promise((resolve) => {
        let confirmApp = createApp({
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
            document.body.appendChild(this.$refs.confirm);

            this.$nextTick(() => {
              this.open = true;
            });
          },
          methods: {
            handleClose() {
              this.open = false;

              document.body.removeChild(this.$refs.confirm);
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
        });
      });
    };

    app.config.globalProperties.$confirm = confirmDialog;
    app.provide('confirm', confirmDialog);
  }
};

const useConfirm = () => confirmDialog;

autoInstall(BalmUI_ConfirmPlugin);

export default BalmUI_ConfirmPlugin;
export { useConfirm };
