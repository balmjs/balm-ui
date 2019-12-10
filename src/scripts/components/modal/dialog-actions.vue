<template>
  <!-- Buttons -->
  <footer class="mdc-dialog__actions">
    <slot :buttonClass="UI_DIALOG_ACTION.cssClasses.button">
      <button
        type="button"
        :class="['mdc-button', UI_DIALOG_ACTION.cssClasses.button]"
        data-mdc-dialog-action="close"
        @click="$parent.handleCancel"
      >
        <span class="mdc-button__label">{{ cancelText }}</span>
      </button>
      <button
        type="button"
        :class="['mdc-button', UI_DIALOG_ACTION.cssClasses.button]"
        data-mdc-dialog-action="accept"
        data-mdc-dialog-button-default
        @click="$parent.handleAccept"
      >
        <span class="mdc-button__label">{{ acceptText }}</span>
      </button>
    </slot>
  </footer>
</template>

<script>
// Define dialog action constants
const UI_DIALOG_ACTION = {
  cssClasses: {
    button: 'mdc-dialog__button'
  }
};

export default {
  name: 'ui-dialog-actions',
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
