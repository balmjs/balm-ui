<template>
  <label class="mdl-fileupload">
    <input type="file"
      class="mdl-fileupload__input"
      ref="input"
      :name="name"
      :accept="accept"
      :multiple="multiple"
      :disabled="disabled"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur">
    <slot>Upload</slot>
  </label>
</template>

<script>
const EVENT_CHANGE = 'change';

export default {
  name: 'ui-fileupload',
  props: {
    name: String,
    label: String,
    accept: String,
    multiple: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleChange(event) {
      let displayText;
      const input = this.$refs.input;
      // input.files (IE10+)
      if (input.files && input.files.length > 1) {
        displayText = `${input.files.length} files selected`;
      } else {
        displayText = event.target.value.split('\\').pop();
      }
      this.$emit(EVENT_CHANGE, input.files, event);
    },
    handleFocus() {

    },
    handleBlur() {

    }
  }
};
</script>
