<template>
  <div :class="className" role="alertdialog">
    <!-- Container -->
    <div class="mdc-dialog__container">
      <div ref="dialog" class="mdc-dialog__surface">
        <slot></slot>
      </div>
    </div>
    <!-- Scrim -->
    <template v-if="!noBackdrop">
      <div v-if="maskClosable" class="mdc-dialog__scrim" @click="handleClose"></div>
      <div v-else class="mdc-dialog__scrim" @click.stop></div>
    </template>
  </div>
</template>

<script>
import { MDCDialog } from '../../../material-components-web/dialog';

// Define constants
const UI_DIALOG = {
  BODY_CLASS: 'mdc-dialog__content',
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
    },
    resetScroll: {
      type: Boolean,
      default: false
    },
    scrollable: {
      type: Boolean,
      default: false
    },
    stacked: {
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
  computed: {
    className() {
      return {
        'mdc-dialog': true,
        'mdc-dialog--scrollable': this.scrollable,
        'mdc-dialog--stacked': this.stacked
      };
    }
  },
  watch: {
    open(val) {
      if (val) {
        this.$dialog.open();
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
      if (this.resetScroll) {
        this.$dialogBody = this.$refs.dialog.querySelector(
          `.${UI_DIALOG.BODY_CLASS}`
        );
      }

      if (!this.$el.querySelector('.mdc-button')) {
        console.warn('`<ui-button>` is required in the dialog');
      }
    });
  },
  methods: {
    handleClose() {
      if (this.closable) {
        this.$emit(UI_DIALOG.EVENT.CHANGE, false);
      }
      this.$emit(UI_DIALOG.EVENT.CLOSE);
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
