<template>
  <footer class="mdc-dialog__actions">
    <slot :buttonClass="UI_DIALOG.SLOT_CLASS.button">
      <button type="button"
        :class="`mdc-button ${UI_DIALOG.SLOT_CLASS.button}`"
        @click="$parent.handleCancel">
        {{ cancelText }}
      </button>
      <button type="button"
        :class="`mdc-button ${UI_DIALOG.SLOT_CLASS.button}`"
        @click="$parent.handleAccept">
        {{ acceptText }}
      </button>
    </slot>
  </footer>
</template>

<script>
// Define constants
const UI_DIALOG = {
  SLOT_CLASS: {
    button: 'mdc-dialog__button'
  }
};

export default {
  name: 'ui-dialog-footer',
  props: {
    // UI attributes
    acceptText: {
      type: String,
      default: 'Accept'
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    }
  },
  data() {
    return {
      UI_DIALOG
    };
  }
};
</script>
