<template>
  <div :class="className">
    <!-- Title (optional) -->
    <h2 class="mdc-dialog__title">
      <slot></slot>
    </h2>
    <mdc-icon-button
      v-if="hasCloseAction"
      class="mdc-dialog__close"
      data-mdc-dialog-action="close"
    >
      close
    </mdc-icon-button>
  </div>
</template>

<script>
import MdcIconButton from '../icon-button/mdc-icon-button.vue';

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
        'mdc-dialog__header': true,
        'mdc-dialog__title--closable': this.closable
      };
    },
    hasCloseAction() {
      return this.$parent.fullscreen || this.closable;
    }
  }
};
</script>
