import UiDialog from '../components/dialog/dialog';
import UiDialogHeader from '../components/dialog/dialog-header';
import UiDialogBody from '../components/dialog/dialog-body';
import UiDialogFooter from '../components/dialog/dialog-footer';
import UiButton from '../components/button/button';
import {isString, isObject, isFunction} from '../helpers';

const DEFAULT_OPTIONS = {
  className: '',
  title: '',
  message: '',
  buttonText: 'OK',
  callback: false
};

const template =
`<ui-dialog
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

export default {
  install(Vue) {
    let vm;

    const UiAlert = (options = {}) => {
      return new Promise((resolve, reject) => {
        vm = new Vue({
          components: {
            UiDialog,
            UiDialogHeader,
            UiDialogBody,
            UiDialogFooter,
            UiButton
          },
          el: document.createElement('div'),
          template,
          data: {
            open: false,
            options: DEFAULT_OPTIONS
          },
          methods: {
            handleClose() {
              this.open = false;
              document.body.removeChild(this.$el);
              document.body.classList.remove('mdc-dialog-scroll-lock');
              vm = null;
            },
            handleClick() {
              this.handleClose();
              if (isFunction(this.options.callback)) {
                this.options.callback();
              } else {
                resolve();
              }
            }
          },
          created() {
            if (isString(options)) {
              this.options.message = options;
            } else if (isObject(options)) {
              this.options = Object.assign(DEFAULT_OPTIONS, options);
            }
          }
        });

        document.body.appendChild(vm.$el);
        vm.open = true;
      });
    };

    Vue.prototype.$alert = UiAlert;
  }
};
