<template>
  <footer class="mdc-dialog__footer">
    <slot :buttonClass="UI_DIALOG.SLOT_CLASS.button">
      <template v-if="$parent.closable">
        <button type="button"
          :class="`mdc-button ${UI_DIALOG.SLOT_CLASS.button} mdc-dialog__footer__button--cancel`">
          {{ cancelText }}
        </button>
        <button type="button"
          :class="`mdc-button ${UI_DIALOG.SLOT_CLASS.button} mdc-dialog__footer__button--accept`">
          {{ acceptText }}
        </button>
      </template>
      <template v-else>
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
      </template>
    </slot>
  </footer>
</template>

<script>
// Define constants
const UI_DIALOG = {
  SLOT_CLASS: {
    button: 'mdc-dialog__footer__button'
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
  },
  mounted() {
    let $this = this.$parent;

    if ($this.closable) {
      $this.$nextTick(() => {
        $this.$dialog.listen('MDCDialog:accept', () => {
          $this.handleAccept();
        });

        $this.$dialog.listen('MDCDialog:cancel', () => {
          $this.handleCancel();
        });
      });
    }
  }
};
</script>
