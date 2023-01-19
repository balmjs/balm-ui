import Vue from 'vue';
import autoInit from '../config/auto-init';
import MdcDialog from '../components/dialog/mdc-dialog.vue';
import { getOptions, createModal, removeModel } from '../utils/modal';

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
let alertApp;

const template = `<mdc-dialog class="mdc-alert-dialog" :open="open" :options="options">
  <button type="button"
    class="mdc-button mdc-button--raised mdc-alert-dialog__button"
    data-mdc-dialog-button-default
    @click="handleClick">
    <span class="mdc-button__label">{{ options.buttonText }}</span>
  </button>
</mdc-dialog>`;

function createAlertDialog(options, done) {
  alertApp = new Vue({
    el: document.createElement('div'),
    name: 'AlertDialog',
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
        alertApp = null;
      },
      handleClick() {
        this.handleClose();

        if (typeof this.options.callback === 'function') {
          this.options.callback();
        } else {
          done();
        }
      }
    },
    template
  });

  return alertApp;
}

function alertDialog(customOptions = {}) {
  const options = getOptions(globalOptions, customOptions);

  return new Promise((resolve) => {
    createAlertDialog(options, resolve);
  });
}

const $alert = {
  install(Vue, options = {}) {
    globalOptions = Object.assign({}, DEFAULT_OPTIONS, options);

    Vue.prototype.$alert = alertDialog;
  }
};

const useAlert = () => alertDialog;

autoInit($alert);

export default $alert;
export { useAlert };
