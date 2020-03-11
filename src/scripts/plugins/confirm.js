import autoInstall from '../config/auto-install';
import UiDialog from '../components/modal/dialog';
import UiDialogTitle from '../components/modal/dialog-title';
import UiDialogContent from '../components/modal/dialog-content';
import UiDialogActions from '../components/modal/dialog-actions';
import getType from '../utils/typeof';

const DEFAULT_OPTIONS = {
  className: '',
  title: '',
  message: '',
  raw: false,
  acceptText: 'OK',
  cancelText: 'Cancel',
  callback: false
};

const template = `<ui-dialog
  :open="open"
  :class="['mdc-confirm', options.className]"
  @close="handleClose">
  <ui-dialog-title v-if="options.title">{{ options.title }}</ui-dialog-title>
  <ui-dialog-content v-if="options.raw" v-html="options.message"></ui-dialog-content>
  <ui-dialog-content v-else>{{ options.message }}</ui-dialog-content>
  <ui-dialog-actions>
    <button type="button"
      class="mdc-button mdc-confirm-primary-button"
      @click="handleConfirm(true)">
      <span class="mdc-button__label">{{ options.acceptText }}</span>
    </button>
    <button type="button"
      class="mdc-button mdc-confirm-secondary-button"
      @click="handleConfirm(false)">
      <span class="mdc-button__label">{{ options.cancelText }}</span>
    </button>
  </ui-dialog-actions>
</ui-dialog>`;

const BalmUI_ConfirmPlugin = {
  install(Vue, configs = {}) {
    let options = Object.assign({}, DEFAULT_OPTIONS, configs);

    const $confirm = (customOptions = {}) => {
      return new Promise(resolve => {
        let vm = new Vue({
          el: document.createElement('div'),
          components: {
            UiDialog,
            UiDialogTitle,
            UiDialogContent,
            UiDialogActions
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

            this.$nextTick(() => {
              document.body.appendChild(this.$el);
              setTimeout(() => {
                this.open = true;
              }, 1);
            });
          },
          methods: {
            handleClose() {
              this.open = false;
              this.$nextTick(() => {
                document.body.removeChild(this.$el);
                vm = null;
              });
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

    Vue.prototype.$confirm = $confirm;
  }
};

autoInstall(BalmUI_ConfirmPlugin);

export default BalmUI_ConfirmPlugin;
