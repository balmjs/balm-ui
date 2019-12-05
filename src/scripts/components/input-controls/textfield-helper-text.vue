<template>
  <!-- Helper text (optional) -->
  <div :id="id" :class="className" aria-hidden="true">
    <slot>{{ validMsg }}</slot>
  </div>
</template>

<script>
import textfieldHelperTextMixin from '../../mixins/textfield-helper-text';

export default {
  name: 'ui-textfield-helper-text',
  mixins: [textfieldHelperTextMixin],
  computed: {
    className() {
      return {
        'mdc-text-field-helper-text': true,
        'mdc-text-field-helper-text--persistent': this.validMsg || this.visible,
        'mdc-text-field-helper-text--validation-msg': this.validMsg
      };
    }
  }
};
</script>
