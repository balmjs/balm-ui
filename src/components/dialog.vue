<template>
  <div class="mdl-dialog">
    <h4 class="mdl-dialog__title" v-if="!noTitle">
      <slot name="title">{{ modal.title }}</slot>
    </h4>
    <div class="mdl-dialog__content">
      <slot name="content">
        <p>{{ modal.message }}</p>
      </slot>
    </div>
    <div :class="['mdl-dialog__actions', {'mdl-dialog__actions--full-width': actionsFullWidth}]">
      <slot name="actions">
        <ui-button primary @click.native="confirmHandler">OK</ui-button>
        <ui-button @click.native="cancelHandler">Cancel</ui-button>
      </slot>
    </div>
  </div>
</template>

<script>
import UiButton from './button';

const Dialog = {
  components: {
    UiButton
  },
  props: {
    noTitle: {
      type: Boolean,
      default: false
    },
    actionsFullWidth: {
      type: Boolean,
      default: false
    },
    callback: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      modal: {
        title: '',
        message: '',
        callback: () => {}
      }
    };
  },
  methods: {
    confirmHandler() {
      console.info('确定');
    },
    cancelHandler() {
      console.info('取消');
    }
  },
  close() {
    console.log('gg');
  },
  alert(options) {
    this.modal = Object.assign({}, this.modal, options);
  },
  confirm() {

  }
};

export default Dialog;

// class Dialog {
//   constructor() {
//     this.name = 'ui-dialog';
//     this.props = DIALOG_PROPS;
//   }
//   // to show the dialog without a backdrop
//   showModal() {

//   }
//   // to show the dialog with a backdrop
//   show() {

//   }
//   // to hide the dialog
//   close() {

//   }
// }

// class Alert extends Dialog {
//   constructor() {
//     super();
//     this.name = 'ui-alert';
//   }
// }

// class Confirm extends Dialog {
//   constructor() {
//     super();
//     this.name = 'ui-confirm';
//   }
// }

// class Prompt extends Dialog {
//   constructor() {
//     super();
//     this.name = 'ui-prompt';
//   }
// }

// let dialog = new Dialog();
// dialog.alert = new Alert();
// dialog.confirm = new Confirm();
// dialog.prompt = new Prompt();

// export default dialog;
// export dialog;
</script>
