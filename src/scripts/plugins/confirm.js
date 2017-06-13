import UiDialog from '../components/dialog';
import UiButton from '../components/button/button';
import {isString, isObject, isFunction} from '../helpers';

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
  <template slot="title">{{ options.title }}</template>
  <template slot="title:after">
    <i class="material-icons close" @click="handleClose">close</i>
  </template>
  {{ options.message }}
  <template slot="footer">
    <ui-button raised primary dense compact
      class="mdc-dialog__footer__button"
      @click.native="handleAccept">{{ options.acceptText }}</ui-button>
    <ui-button raised accent dense compact
      class="mdc-dialog__footer__button"
      @click.native="handleCancel">{{ options.cancelText }}</ui-button>
  </template>
</ui-dialog>`;

export default {
  install(Vue) {
    let vm;

    const confirm = (options = {}) => {
      return new Promise((resolve, reject) => {
        vm = new Vue({
          components: {
            UiDialog,
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
              vm = null;
            },
            handleAccept() {
              if (isFunction(this.options.callback)) {
                this.options.callback(true);
              } else {
                resolve();
              }
              this.handleClose();
            },
            handleCancel() {
              if (isFunction(this.options.callback)) {
                this.options.callback(false);
              } else {
                reject();
              }
              this.handleClose();
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

    Vue.prototype.$confirm = confirm;
  }
};
