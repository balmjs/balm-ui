import UiDialog from '../components/dialog';
import UiButton from '../components/button';
import {isString, isObject} from '../helpers';

const DEFAULT_OPTIONS = {
  className: '',
  title: '',
  message: '',
  buttonText: 'OK'
};

const template =
`<ui-dialog
  :class="['mdc-alert', options.className]"
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
      @click.native="handleClose">
      {{ options.buttonText }}
    </ui-button>
  </template>
</ui-dialog>`;

export default {
  install(Vue) {
    let vm;

    const alert = (options = {}) => {
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
    };

    Vue.prototype.$alert = alert;
  }
};
