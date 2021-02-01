<template>
  <!-- Title (optional) -->
  <h2 :class="className">
    <slot></slot>
    <mdc-icon-button
      v-if="closable"
      tabindex="-1"
      @click="$parent.handleClose(true)"
    >
      close
    </mdc-icon-button>
  </h2>
</template>

<script>
import MdcIconButton from '../buttons/mdc-icon-button';

export default {
  name: 'UiDialogTitle',
  components: {
    MdcIconButton
  },
  props: {
    closable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-dialog__title': true,
        'mdc-dialog__title--closable': this.closable
      };
    }
  }
};
</script>
