<template>
  <!-- Actions -->
  <footer class="mdc-dialog__actions">
    <slot :buttonClass="UI_DIALOG_ACTION.cssClasses.button">
      <mdc-button
        :class="UI_DIALOG_ACTION.cssClasses.button"
        :data-mdc-dialog-action="closable ? 'close' : null"
        @click="$parent.handleCancel"
      >
        {{ cancelText }}
      </mdc-button>
      <mdc-button
        :class="UI_DIALOG_ACTION.cssClasses.button"
        :data-mdc-dialog-action="closable ? 'accept' : null"
        data-mdc-dialog-button-default
        @click="$parent.handleAccept"
      >
        {{ acceptText }}
      </mdc-button>
    </slot>
  </footer>
</template>

<script>
// Define dialog action constants
const UI_DIALOG_ACTION = {
  cssClasses: {
    button: 'mdc-dialog__button'
  }
};

export default {
  name: 'UiDialogActions',
  customOptions: {
    UI_DIALOG_ACTION
  }
};
</script>

<script setup>
import { computed, getCurrentInstance } from 'vue';
import MdcButton from '../button/mdc-button.vue';

const props = defineProps({
  // UI attributes
  acceptText: {
    type: String,
    default: 'OK'
  },
  cancelText: {
    type: String,
    default: 'Cancel'
  }
});

const instance = getCurrentInstance();
const parent = instance.parent;

const closable = computed(() => parent.props.closable);
</script>
