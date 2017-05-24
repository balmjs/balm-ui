import UiDialog from '../components/dialog/dialog';
import UiButton from '../components/button';

const UI_EVENT_SELECTED = 'selected';

// TODO
export default {
  install(Vue) {
    let instance;

    const confirm = message => {
      console.log(message);
      instance = new Vue({
        components: {
          UiDialog,
          UiButton
        },
        data: {
          open: false,
          message,
          acceptText: 'OK',
          cancelText: 'Cancel'
        },
        el: document.createElement('div'),
        template: `<ui-dialog class="mdc-confirm" :open="open" @close="handleClose">
    <template slot="title:after">
      <slot name="title:after">
        <i class="material-icons close" @click="handleClose">close</i>
      </slot>
    </template>
    {{ message }}
    <template slot="footer">
      <ui-button class="mdc-dialog__footer__button" @click.native="handleAccept">{{ acceptText }}</ui-button>
      <ui-button class="mdc-dialog__footer__button" @click.native="handleCancel">{{ cancelText }}</ui-button>
    </template>
  </ui-dialog>`,
        methods: {
          handleClose() {
            instance.open = false;

            setTimeout(() => {
              document.body.removeChild(instance.$el);
            }, 1);
          },
          handleAccept() {
            instance.handleClose();
            this.$emit(UI_EVENT_SELECTED, true);
          },
          handleCancel() {
            instance.handleClose();
            this.$emit(UI_EVENT_SELECTED, false);
          }
        }
      });

      document.body.appendChild(instance.$el);

      instance.open = true;
    };

    Vue.prototype.confirm = confirm;
  }
};
