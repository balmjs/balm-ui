<template>
  <ui-dialog class="mdc-alert" :open="open" @close="handleClose">
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
      <ui-button class="mdc-dialog__footer__button" @click.native="handleClose">{{ acceptText }}</ui-button>
    </template>
  </ui-dialog>
</template>

<script>
import UiDialog from './dialog';
import UiButton from '../button';

const UI_EVENT_CLOSE = 'close';

export default {
  name: 'ui-alert',
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
    }
  },
  methods: {
    handleClose() {
      this.$emit(UI_EVENT_CLOSE);
    }
  }
};
</script>
