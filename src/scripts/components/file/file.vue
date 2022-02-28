<template>
  <div :class="className" @click="handleClick">
    <input
      v-show="false"
      :id="inputId"
      ref="file"
      type="file"
      :accept="accept"
      :multiple="multiple"
      :disabled="disabled"
      v-bind="attrs"
      @change="handleChange"
    />
    <slot>
      <mdc-button
        :outlined="outlined"
        :unelevated="!outlined"
        icon="file_upload"
        :disabled="disabled"
      >
        {{ text }}
      </mdc-button>
    </slot>
  </div>
</template>

<script>
// Define file constants
const UI_FILE = {
  EVENTS: {
    CHANGE: 'change'
  }
};

export default {
  name: 'UiFile',
  customOptions: {
    UI_FILE
  }
};
</script>

<script setup>
import { ref, computed } from 'vue';
import MdcButton from '../button/mdc-button.vue';
import { inputProps } from '../../mixins/input';
import handleFileChange from '../../utils/file';

const props = defineProps({
  ...inputProps,
  // <input type="file"> attributes
  accept: {
    type: String,
    default: ''
  },
  multiple: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  // <ui-button> props
  outlined: {
    type: Boolean,
    default: false
  },
  text: {
    type: String,
    default: 'Upload'
  },
  // UI attributes
  preview: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits([UI_FILE.EVENTS.CHANGE]);

const className = computed(() => ({
  'mdc-file': true,
  'mdc-file--single': !props.multiple,
  'mdc-file--multiple': props.multiple
}));

const file = ref(null);

function handleClick() {
  if (!props.disabled) {
    const inputEl = file.value;
    inputEl && inputEl.click();
  }
}

function handleChange(event) {
  handleFileChange(props, event, (result) =>
    emit(UI_FILE.EVENTS.CHANGE, result)
  );
}
</script>
