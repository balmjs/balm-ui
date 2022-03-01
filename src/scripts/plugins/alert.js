import createVueApp from '../config/ssr';
import MdcDialog from '../components/dialog/mdc-dialog.vue';
import { alertDialogId, useDialog } from '../mixins/dialog';
import { getOptions, createModal } from '../utils/modal';

// Define alert dialog constants
const UI_ALERT_DIALOG = {
  id: alertDialogId
};

const DEFAULT_OPTIONS = {
  className: '',
  title: '',
  state: '', // 'success' | 'info' | 'warning' | 'error' | 'help'
  stateOutlined: false,
  message: '',
  raw: false,
  buttonText: 'OK',
  callback: false
};

let globalOptions = DEFAULT_OPTIONS;
let alertApp;

const template = `<mdc-dialog class="mdc-alert-dialog" :open="open" :options="options">
  <button type="button"
    class="mdc-button mdc-button--raised mdc-alert-dialog__button"
    data-mdc-dialog-button-default
    @click="handleClick">
    <span class="mdc-button__label" v-text="options.buttonText"></span>
  </button>
</mdc-dialog>`;

function createAlertDialog(options, done) {
  const el = createModal(UI_ALERT_DIALOG.id);

  alertApp = createVueApp({
    name: 'AlertDialog',
    components: {
      MdcDialog
    },
    setup() {
      return useDialog({
        app: alertApp,
        el,
        constants: UI_ALERT_DIALOG,
        options,
        done
      });
    },
    template
  });

  return alertApp;
}

function alertDialog(customOptions = {}) {
  const options = getOptions(globalOptions, customOptions);

  return new Promise((resolve) => {
    createAlertDialog(options, resolve).mount(`#${UI_ALERT_DIALOG.id}`);
  });
}

function install(app, options = {}) {
  globalOptions = Object.assign({}, DEFAULT_OPTIONS, options);

  app.config.globalProperties.$alert = alertDialog;
  app.provide('alert', alertDialog);
}

const $alert = {
  install
};

const useAlert = () => alertDialog;

export default $alert;
export { install, useAlert };
