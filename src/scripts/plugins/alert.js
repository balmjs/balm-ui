import autoInstall from '../config/auto-install';
import UiDialog from '../components/modal/dialog';
import UiDialogTitle from '../components/modal/dialog-title';
import UiDialogContent from '../components/modal/dialog-content';
import UiDialogActions from '../components/modal/dialog-actions';
import stateTypeMixins from '../mixins/state-type';
import getType from '../utils/typeof';

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

const template = `<ui-dialog
  :open="open"
  :class="['mdc-alert-dialog', options.className]"
  @close="handleClose">
  <ui-dialog-title v-if="options.title">{{ options.title }}</ui-dialog-title>
  <ui-dialog-content v-if="options.raw" v-html="options.message"></ui-dialog-content>
  <ui-dialog-content v-else>
    <i v-if="materialIcon" :class="['material-icons mdc-alert-dialog__icon', stateClassName]">{{ materialIcon }}</i>
    <span class="mdc-alert-dialog__message">{{ options.message }}</span>
  </ui-dialog-content>
  <ui-dialog-actions>
    <button type="button"
      class="mdc-button mdc-button--raised mdc-alert-dialog__button"
      @click="handleClick">
      <span class="mdc-button__label">{{ options.buttonText }}</span>
    </button>
  </ui-dialog-actions>
</ui-dialog>`;

const BalmUI_AlertPlugin = {
  install(Vue, configs = {}) {
    let options = Object.assign({}, DEFAULT_OPTIONS, configs);

    const $alert = (customOptions = {}) => {
      return new Promise((resolve) => {
        let vm = new Vue({
          el: document.createElement('div'),
          components: {
            UiDialog,
            UiDialogTitle,
            UiDialogContent,
            UiDialogActions
          },
          mixins: [stateTypeMixins],
          data: {
            open: false,
            options,
            state: '',
            stateOutlined: false
          },
          created() {
            if (getType(customOptions) === 'string') {
              this.options.message = `${customOptions}`; // To string
            } else if (getType(customOptions) === 'object') {
              this.options = Object.assign({}, this.options, customOptions);
            }

            if (this.options.state) {
              this.state = this.options.state;
              this.stateOutlined = this.options.stateOutlined;
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
