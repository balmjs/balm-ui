import getType from '../utilities/typeof';
import UiDialog from '../components/dialog/dialog';
import UiDialogHeader from '../components/dialog/dialog-header';
import UiDialogBody from '../components/dialog/dialog-body';
import UiDialogFooter from '../components/dialog/dialog-footer';
import UiButton from '../components/button/button';
import autoInstall from '../config/auto-install';

const DEFAULT_OPTIONS = {
  className: '',
  title: '',
  message: '',
  buttonText: 'OK',
  callback: false
};

const template = `<ui-dialog
  :class="['mdc-alert', options.className]"
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
      @click.native="handleClick">
      {{ options.buttonText }}
    </ui-button>
  </ui-dialog-footer>
</ui-dialog>`;

const BalmUI_AlertPlugin = {
  install(Vue, config) {
    let options = Object.assign({}, DEFAULT_OPTIONS, config);

    const $alert = (customOptions = {}) => {
      return new Promise(resolve => {
        let vm = new Vue({
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
            options
          },
          created() {
            if (getType(customOptions) === 'string') {
              this.options.message = customOptions;
            } else if (getType(customOptions) === 'object') {
              this.options = Object.assign({}, this.options, customOptions);
            }

            this.$nextTick(() => {
              document.body.appendChild(vm.$el);
              this.open = true;
            });
          },
          methods: {
            handleClose() {
              this.open = false;

              this.$nextTick(() => {
                document.body.removeChild(this.$el);
                document.body.classList.remove('mdc-dialog-scroll-lock');
                vm = null;
              });
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
        });
      });
    };

    Vue.prototype.$alert = $alert;
  }
};

autoInstall(BalmUI_AlertPlugin);

export default BalmUI_AlertPlugin;
