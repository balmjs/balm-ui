<template>
  <ui-dialog class="mdc-confirm" :open="open" @close="handleClose">
    <template slot="title">
      <slot name="title"></slot>
    </template>
    <template slot="title:after">
      <slot name="title:after">
        <i class="material-icons close" @click="handleClose">close</i>
      </slot>
    </template>
    <slot></slot>
    <template slot="footer">
      <ui-button class="mdc-dialog__footer__button" @click.native="handleAccept">{{ acceptText }}</ui-button>
      <ui-button class="mdc-dialog__footer__button" @click.native="handleCancel">{{ cancelText }}</ui-button>
    </template>
  </ui-dialog>
</template>

<script>
import UiDialog from './dialog';
import UiButton from '../button';

const UI_EVENT_CLOSE = 'close';
const UI_EVENT_RESULT = 'result';

export default {
  name: 'ui-confirm',
  components: {
    UiDialog,
    UiButton
  },
  props: {
    // state
    open: {
      type: Boolean,
      default: false
    },
    // button
    acceptText: {
      type: String,
      default: 'OK'
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    }
  },
  methods: {
    handleClose() {
      this.$emit(UI_EVENT_CLOSE);
    },
    handleAccept() {
      this.handleClose();
      this.$emit(UI_EVENT_RESULT, true);
    },
    handleCancel() {
      this.handleClose();
      this.$emit(UI_EVENT_RESULT, false);
    }
  }
};
</script>
