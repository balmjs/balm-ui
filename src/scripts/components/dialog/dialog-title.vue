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
export default {
  name: 'UiDialogTitle',
  customOptions: {}
};
</script>

<script setup>
import { computed, getCurrentInstance } from 'vue';
import MdcIconButton from '../icon-button/mdc-icon-button.vue';

const props = defineProps({
  // UI attributes
  closable: {
    type: Boolean,
    default: false
  }
});

const instance = getCurrentInstance();
const parent = instance.parent;

const className = computed(() => ({
  'mdc-dialog__header': true,
  'mdc-dialog__title--closable': props.closable
}));
const hasCloseAction = computed(
  () => parent.props.fullscreen || props.closable
);
</script>
