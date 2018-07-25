import autoInstall from '../config/auto-install';
import UiDialog from '../components/dialog/dialog';
import UiDialogHeader from '../components/dialog/dialog-header';
import UiDialogBody from '../components/dialog/dialog-body';
import UiDialogFooter from '../components/dialog/dialog-footer';
import getType from '../utils/typeof';

const DEFAULT_PROPS = {
  className: '',
  title: '',
  message: '',
  acceptText: 'OK',
  cancelText: 'Cancel',
  callback: false
};

const template = `<ui-dialog
  :open="open"
  :class="['mdc-confirm', props.className]"
  @close="handleClose">
  <ui-dialog-header v-if="props.title">{{ props.title }}</ui-dialog-header>
  <ui-dialog-body>{{ props.message }}</ui-dialog-body>
  <ui-dialog-footer>
    <button type="button"
      class="mdc-button mdc-confirm-primary-button"
      @click="handleConfirm(true)">
      {{ props.acceptText }}
    </button>
    <button type="button"
      class="mdc-button mdc-confirm-secondary-button"
      @click="handleConfirm(false)">
      {{ props.cancelText }}
    </button>
  </ui-dialog-footer>
</ui-dialog>`;

const BalmUI_ConfirmPlugin = {
  install(Vue, configs = {}) {
    let props = Object.assign({}, DEFAULT_PROPS, configs);

    const $confirm = (customProps = {}) => {
      return new Promise(resolve => {
        let vm = new Vue({
          el: document.createElement('div'),
          components: {
            UiDialog,
            UiDialogHeader,
            UiDialogBody,
            UiDialogFooter
          },
          data: {
            open: false,
            props
          },
          created() {
            if (getType(customProps) === 'string') {
              this.props.message = `${customProps}`; // To string
            } else if (getType(customProps) === 'object') {
              this.props = Object.assign({}, this.props, customProps);
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
              if (getType(this.props.callback) === 'function') {
                this.props.callback(result);
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
