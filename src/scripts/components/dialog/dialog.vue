<template>
  <aside class="mdc-dialog" role="alertdialog">
    <div ref="dialog" class="mdc-dialog__surface">
      <slot></slot>
    </div>
    <template v-if="!noBackdrop">
      <div v-if="maskClosable" class="mdc-dialog__backdrop" @click="handleClose"></div>
      <div v-else class="mdc-dialog__backdrop" @click.stop></div>
    </template>
  </aside>
</template>

<script>
import { MDCDialog } from '../../../material-components-web/dialog';

// Define constants
const UI_DIALOG = {
  BODY_CLASS: 'mdc-dialog__body--scrollable',
  EVENT: {
    CHANGE: 'change',
    CLOSE: 'close',
    CONFIRM: 'confirm',
    ACCEPT: 'accept',
    CANCEL: 'cancel'
  }
};

export default {
  name: 'ui-dialog',
  model: {
    prop: 'open',
    event: UI_DIALOG.EVENT.CHANGE
  },
  props: {
    // States
    open: {
      type: Boolean,
      default: false
    },
    // UI attributes
    closable: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: false
    },
    noBackdrop: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      $dialog: null,
      $dialogBody: null
    };
  },
  watch: {
    open(val) {
      if (val) {
        this.$dialog.show();
      } else {
        this.$dialog.close();
        if (this.$dialogBody) {
          this.$dialogBody.scrollTop = 0;
        }
      }
    }
  },
  mounted() {
    this.$dialog = new MDCDialog(this.$el);
    this.$nextTick(() => {
      this.$dialogBody = this.$refs.dialog.querySelector(
        `.${UI_DIALOG.BODY_CLASS}`
      );
    });
  },
  methods: {
    handleClose() {
      if (this.closable) {
        this.$emit(UI_DIALOG.EVENT.CHANGE, false);
      } else {
        this.$emit(UI_DIALOG.EVENT.CLOSE);
      }
    },
    handleAccept() {
      this.$emit(UI_DIALOG.EVENT.ACCEPT);
      this.$emit(UI_DIALOG.EVENT.CONFIRM, true);
      this.handleClose();
    },
    handleCancel() {
      this.$emit(UI_DIALOG.EVENT.CANCEL);
      this.$emit(UI_DIALOG.EVENT.CONFIRM, false);
      this.handleClose();
    }
  }
};
</script>
