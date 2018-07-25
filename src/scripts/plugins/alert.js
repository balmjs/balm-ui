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
  buttonText: 'OK',
  callback: false
};

const template = `<ui-dialog
  :open="open"
  :class="['mdc-alert', props.className]"
  @close="handleClose">
  <ui-dialog-header v-if="props.title">{{ props.title }}</ui-dialog-header>
  <ui-dialog-body>{{ props.message }}</ui-dialog-body>
  <ui-dialog-footer>
    <button type="button" class="mdc-button" @click="handleClick">
      {{ props.buttonText }}
    </button>
  </ui-dialog-footer>
</ui-dialog>`;

const BalmUI_AlertPlugin = {
  install(Vue, configs = {}) {
    let props = Object.assign({}, DEFAULT_PROPS, configs);

    const $alert = (customProps = {}) => {
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
            handleClick() {
              this.handleClose();
              if (getType(this.props.callback) === 'function') {
                this.props.callback();
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
