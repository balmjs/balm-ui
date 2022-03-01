<template>
  <div ref="mdcCheckbox" class="mdc-checkbox">
    <slot>
      <input
        ref="checkbox"
        type="checkbox"
        class="mdc-checkbox__native-control"
        :checked="checked"
        :disabled="disabled"
      />
    </slot>
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
        <path
          class="mdc-checkbox__checkmark-path"
          fill="none"
          d="M1.73,12.91 8.1,19.28 22.79,4.59"
        />
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
    <div class="mdc-checkbox__ripple"></div>
    <div class="mdc-checkbox__focus-ring"></div>
  </div>
</template>

<script>
export default {
  name: 'MdcCheckbox',
  customOptions: {}
};
</script>

<script setup>
import { ref, watch, onMounted } from 'vue';

const props = defineProps({
  checked: {
    type: [Boolean, null],
    default: null
  },
  indeterminate: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const mdcCheckbox = ref(null);
const checkbox = ref(null);

onMounted(() => {
  if (props.indeterminate) {
    checkbox.value.indeterminate = props.indeterminate;
  }
  if (props.disabled) {
    checkbox.value.disabled = props.disabled;
  }

  watch(
    () => props.indeterminate,
    (val) => (checkbox.value.indeterminate = val)
  );
  watch(
    () => props.disabled,
    (val) => (checkbox.value.disabled = val)
  );
});

// For the row checkbox of `<mdc-table-header>`
function reset() {
  if (checkbox.value.indeterminate) {
    checkbox.value.indeterminate = false;
  } else {
    checkbox.value.checked = false;
  }
}

defineExpose({
  mdcCheckbox,
  reset
});
</script>
