import UiDialog from '../components/dialog/dialog';
import UiButton from '../components/button';

// TODO
export default {
  install(Vue) {
    let instance;

    const alert = message => {
      instance = new Vue({
        components: {
          UiDialog,
          UiButton
        },
        data: {
          open: false,
          message,
          acceptText: 'OK'
        },
        el: document.createElement('div'),
        template: `<ui-dialog class="mdc-alert" :open="open" @close="handleClose">
    <template slot="title:after">
      <slot name="title:after">
        <i class="material-icons close" @click="handleClose">close</i>
      </slot>
    </template>
    {{ message }}
    <template slot="footer">
      <ui-button class="mdc-dialog__footer__button" @click.native="handleClose">{{ acceptText }}</ui-button>
    </template>
  </ui-dialog>`,
        methods: {
          handleClose() {
            instance.open = false;

            setTimeout(() => {
              document.body.removeChild(instance.$el);
            }, 1);
          }
        }
      });

      document.body.appendChild(instance.$el);

      instance.open = true;
    };

    Vue.prototype.alert = alert;
  }
};
