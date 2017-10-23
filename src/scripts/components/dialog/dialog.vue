<template>
  <aside :class="className">
    <div class="mdc-dialog__surface">
      <slot></slot>
    </div>
    <div v-if="!noMask" class="mdc-dialog__backdrop" @click="handleClose"></div>
  </aside>
</template>

<script>
// NOTE: remove 'focus-trap' in MDC Dialog
import {MDCDialog} from '../../../material-components-web/dialog';

const UI_EVENT_CLOSE = 'close';
const UI_EVENT_CONFIRM = 'confirm';

export default {
  name: 'ui-dialog',
  props: {
    // state
    open: {
      type: Boolean,
      default: false
    },
    // ui attributes
    cssOnly: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: true
    },
    // layout
    noMask: {
      type: Boolean,
      default: false
    },
    // theme
    dark: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      $dialog: null
    }
  },
  computed: {
    className() {
      return {
        'mdc-dialog': true,
        'mdc-dialog--theme-dark': this.dark
      };
    }
  },
  watch: {
    open(val) {
      if (val) {
        this.$dialog.show();
      } else {
        this.$dialog.close();
      }
    }
  },
  methods: {
    handleClose() {
      this.$emit(UI_EVENT_CLOSE);
    },
    handleAccept() {
      this.$emit(UI_EVENT_CONFIRM, true);
      if (this.closable) {
        this.handleClose();
      }
    },
    handleCancel() {
      this.$emit(UI_EVENT_CONFIRM, false);
      if (this.closable) {
        this.handleClose();
      }
    }
  },
  mounted() {
    if (!this.$dialog && !this.cssOnly) {
      this.$dialog = new MDCDialog(this.$el);
    }
  }
};
</script>
