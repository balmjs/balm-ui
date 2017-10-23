<template>
  <footer class="mdc-dialog__footer">
    <slot>
      <ui-button :class="[
        'mdc-dialog__footer__button',
        {'mdc-dialog__footer__button--cancel': notifyCancel}
      ]" @click.native="$parent.handleCancel">{{ cancelText }}</ui-button>
      <ui-button :class="[
        'mdc-dialog__footer__button',
        {'mdc-dialog__footer__button--accept': notifyAccept}
      ]" @click.native="$parent.handleAccept">{{ acceptText }}</ui-button>
    </slot>
  </footer>
</template>

<script>
import UiButton from '../button/button';

export default {
  name: 'ui-dialog-footer',
  components: {
    UiButton
  },
  props: {
    // ui attributes
    notifyAccept: {
      type: Boolean,
      default: false
    },
    notifyCancel: {
      type: Boolean,
      default: false
    },
    acceptText: {
      type: String,
      default: 'Accept'
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    }
  }
};
</script>
