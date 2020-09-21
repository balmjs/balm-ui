<template>
  <!-- Buttons -->
  <footer class="mdc-dialog__actions">
    <slot :buttonClass="UI_DIALOG_ACTION.cssClasses.button">
      <mdc-button
        :class="UI_DIALOG_ACTION.cssClasses.button"
        data-mdc-dialog-action="close"
        @click="$parent.handleCancel"
      >{{ cancelText }}</mdc-button>
      <mdc-button
        :class="UI_DIALOG_ACTION.cssClasses.button"
        data-mdc-dialog-action="accept"
        data-mdc-dialog-button-default
        @click="$parent.handleAccept"
      >{{ acceptText }}</mdc-button>
    </slot>
  </footer>
</template>

<script>
import MdcButton from '../buttons/mdc-button';

// Define dialog action constants
const UI_DIALOG_ACTION = {
  cssClasses: {
    button: 'mdc-dialog__button'
  }
};

export default {
  name: 'UiDialogActions',
  components: {
    MdcButton
  },
  props: {
    // UI attributes
    acceptText: {
      type: String,
      default: 'OK'
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    }
  },
  data() {
    return {
      UI_DIALOG_ACTION
    };
  }
};
</script>
