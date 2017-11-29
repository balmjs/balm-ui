import UiDialog from '../components/dialog/dialog';
import UiDialogHeader from '../components/dialog/dialog-header';
import UiDialogBody from '../components/dialog/dialog-body';
import UiDialogFooter from '../components/dialog/dialog-footer';
import UiButton from '../components/button/button';
import getType from '../helpers/typeof';

const DEFAULT_OPTIONS = {
  className: '',
  title: '',
  message: '',
  acceptText: 'OK',
  cancelText: 'Cancel',
  callback: false
};

const template =
`<ui-dialog
  :class="['mdc-confirm', options.className]"
  :open="open"
  @close="handleClose">
  <ui-dialog-header v-if="options.title">
    {{ options.title }}
    <i slot="after" class="material-icons close" @click="handleClose">close</i>
  </ui-dialog-header>
  <ui-dialog-body>{{ options.message }}</ui-dialog-body>
  <ui-dialog-footer>
    <ui-button raised dense compact
      class="mdc-dialog__footer__button"
      @click.native="handleConfirm(true)">{{ options.acceptText }}</ui-button>
    <ui-button raised dense compact
      class="mdc-dialog__footer__button"
      @click.native="handleConfirm(false)">{{ options.cancelText }}</ui-button>
  </ui-dialog-footer>
</ui-dialog>`;

export default {
  install(Vue) {
    let vm;

    const UiConfirm = (options = {}) => {
      return new Promise((resolve, reject) => {
        vm = new Vue({
          el: document.createElement('div'),
          components: {
            UiDialog,
            UiDialogHeader,
            UiDialogBody,
            UiDialogFooter,
            UiButton
          },
          data: {
            open: false,
            options: DEFAULT_OPTIONS
          },
          created() {
            if (getType(options) === 'string') {
              this.options.message = options;
            } else if (getType(options) === 'object') {
              this.options = Object.assign(DEFAULT_OPTIONS, options);
            }
          },
          methods: {
            handleClose() {
              this.open = false;
              document.body.removeChild(this.$el);
              document.body.classList.remove('mdc-dialog-scroll-lock');
              vm = null;
            },
            handleConfirm(result) {
              this.handleClose();
              if (getType(this.options.callback) === 'function') {
                this.options.callback(result);
              } else {
                if (result) {
                  resolve();
                } else {
                  reject();
                }
              }
            }
          },
          template
        });

        document.body.appendChild(vm.$el);
        vm.open = true;
      });
    };

    Vue.prototype.$confirm = UiConfirm;
  }
};
