<template>
  <!-- Assistive area (optional) -->
  <div ref="textfieldHelper" class="mdc-text-field-helper-line">
    <!-- Helper text (optional) -->
    <div :id="id" :class="className" aria-hidden="true">
      <slot>{{ validMessage }}</slot>
    </div>
    <!-- Character counter (optional) -->
    <mdc-textfield-counter v-if="withCounter"></mdc-textfield-counter>
  </div>
</template>

<script>
const name = 'UiTextfieldHelper';

export default {
  name,
  customOptions: {
    name
  }
};
</script>

<script setup>
import { ref, computed, onBeforeMount, onMounted } from 'vue';
import MdcTextfieldCounter from './mdc-textfield-counter.vue';
import { helperTextProps, useHelperText } from '../../mixins/helper-text';

const props = defineProps({
  ...helperTextProps,
  withCounter: {
    type: Boolean,
    default: false
  }
});

const textfieldHelper = ref(null);

const { hasValidMsg, validMessage } = useHelperText(props);

const className = computed(() => ({
  'mdc-text-field-helper-text': true,
  'mdc-text-field-helper-text--persistent': props.visible,
  'mdc-text-field-helper-text--validation-msg': hasValidMsg.value
}));

onBeforeMount(() => {
  if (!props.id && props.withCounter) {
    console.warn(
      `[${name}]: The 'helperTextId' prop is required for <ui-textfield> with outer counter`
    );
  }
});

onMounted(() => {
  const textfieldEl = textfieldHelper.value.previousElementSibling;
  const hasTextfield =
    textfieldEl && textfieldEl.classList.contains('mdc-text-field');
  if (props.withCounter && !hasTextfield) {
    console.warn(
      `[${name}]: Do not insert any tags between '<ui-textfield>' and '<ui-textfield-helper>' with counter`
    );
  }
});
</script>
