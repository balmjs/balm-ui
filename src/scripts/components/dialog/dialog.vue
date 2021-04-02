<template>
  <div :class="className">
    <!-- Container -->
    <div class="mdc-dialog__container">
      <div
        ref="dialog"
        class="mdc-dialog__surface"
        role="alertdialog"
        aria-modal="true"
      >
        <slot></slot>
      </div>
    </div>
    <!-- Scrim -->
    <template v-if="!noBackdrop">
      <div
        v-if="maskClosable"
        class="mdc-dialog__scrim"
        @click="handleClose"
      ></div>
      <div v-else class="mdc-dialog__scrim" @click.stop></div>
    </template>
  </div>
</template>

<script>
import { MDCDialog } from '../../../material-components-web/dialog';
import {
  strings,
  cssClasses
} from '../../../material-components-web/dialog/constants';
import domMixin from '../../mixins/dom';

// Define dialog constants
const UI_DIALOG = {
  cssClasses: {
    content: 'mdc-dialog__content'
  },
  EVENT: {
    CHANGE: 'update:modelValue',
    CLOSE: 'close',
    CONFIRM: 'confirm'
  }
};
export default {
  name: 'UiDialog',
  mixins: [domMixin],
  props: {
    // States
    modelValue: {
      type: Boolean,
      default: false
    },
    // UI attributes
    escapeKey: {
      type: Boolean,
      default: true
    },
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
    },
    fullscreen: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    UI_DIALOG.EVENT.CHANGE,
    UI_DIALOG.EVENT.CLOSE,
    UI_DIALOG.EVENT.CONFIRM
  ],
  data() {
    return {
      $dialog: null,
      dialogBody: null
    };
  },
  computed: {
    className() {
      return {
        'mdc-dialog': true,
        'mdc-dialog--scrollable': this.scrollable,
        'mdc-dialog--stacked': this.stacked,
        'mdc-dialog--fullscreen': this.fullscreen
      };
    }
  },
  watch: {
    modelValue(val) {
      if (val) {
        this.$dialog.open();
      } else {
        this.$dialog.close();
        if (this.resetScroll) {
          this.dialogBody.scrollTop = 0;
        }
      }
    }
  },
  mounted() {
    this.$dialog = new MDCDialog(this.el);
    this.$nextTick(() => {
      this.dialogBody = this.$refs.dialog.querySelector(
        `.${UI_DIALOG.cssClasses.content}`
      );

      // Accessibility: Using `aria-hidden` as a fallback for `aria-modal`
      this.$dialog.listen(strings.OPENED_EVENT, () => {
        this.dialogBody.setAttribute('aria-hidden', 'true');
      });
      this.$dialog.listen(strings.CLOSING_EVENT, ({ detail }) => {
        this.dialogBody.removeAttribute('aria-hidden');

        // fix: the escape key
        if (this.$dialog.escapeKeyAction) {
          this.handleClose();
        }
      });

      if (
        !(
          this.el.querySelector('.mdc-button') ||
          this.el.querySelector('.mdc-icon-button')
        )
      ) {
        console.warn(
          '[UiDialog]',
          `At least one <ui-button> or <ui-icon-button> needs to be added to the <ui-dialog>`
        );
      }

      if (!(this.escapeKey && this.closable)) {
        this.$dialog.escapeKeyAction = '';
      }
    });
  },
  beforeUnmount() {
    // NOTE: for conditional rendering
    document.querySelector('body').classList.remove(cssClasses.SCROLL_LOCK);
  },
  methods: {
    handleClose(forceQuit = false) {
      if (forceQuit || this.closable) {
        this.$emit(UI_DIALOG.EVENT.CHANGE, false);
      }
      this.$emit(UI_DIALOG.EVENT.CLOSE);
    },
    handleAccept() {
      this.$emit(UI_DIALOG.EVENT.CONFIRM, true);
      this.handleClose();
    },
    handleCancel() {
      this.$emit(UI_DIALOG.EVENT.CONFIRM, false);
      this.handleClose();
    }
  }
};
</script>
