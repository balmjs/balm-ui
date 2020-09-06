import autoInstall from '../config/auto-install';
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

const template = `<div
  :class="['mdc-dialog', 'mdc-alert-dialog', options.className, {'mdc-dialog--open': open}]">
  <div class="mdc-dialog__container">
    <div class="mdc-dialog__surface">
      <h2 v-if="options.title" class="mdc-dialog__title">{{ options.title }}</h2>
      <div v-if="options.raw" class="mdc-dialog__content" v-html="options.message"></div>
      <div v-else class="mdc-dialog__content">
        <i v-if="materialIcon" :class="['material-icons mdc-alert-dialog__icon', stateClassName]">{{ materialIcon }}</i>
        <span class="mdc-alert-dialog__message">{{ options.message }}</span>
      </div>
      <footer class="mdc-dialog__actions">
        <button type="button"
          class="mdc-button mdc-button--raised mdc-alert-dialog__button"
          data-mdc-dialog-button-default
          @click="handleClick">
          <span class="mdc-button__label">{{ options.buttonText }}</span>
        </button>
      </footer>
    </div>
  </div>
  <div class="mdc-dialog__scrim"></div>
</div>`;

const BalmUI_AlertPlugin = {
  install(Vue, configs = {}) {
    let options = Object.assign({}, DEFAULT_OPTIONS, configs);

    const $alert = (customOptions = {}) => {
      return new Promise((resolve) => {
        let vm = new Vue({
          el: document.createElement('div'),
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
          },
          mounted() {
            document.body.appendChild(this.$el);

            setTimeout(() => {
              this.open = true;
            }, 1);
          },
          methods: {
            handleClose() {
              this.open = false;

              document.body.removeChild(this.$el);
              vm = null;
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
