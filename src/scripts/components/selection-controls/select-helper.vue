<template>
  <!-- Helper text (optional) -->
  <p :id="id" :class="className" aria-hidden="true">
    <slot></slot>
  </p>
</template>

<script>
import helperTextMixin from '../../mixins/helper-text';

export default {
  name: 'ui-select-helper',
  mixins: [helperTextMixin],
  computed: {
    className() {
      return {
        'mdc-select-helper-text': true,
        'mdc-select-helper-text--persistent': this.validMsg || this.visible,
        'mdc-select-helper-text--validation-msg': this.validMsg
      };
    }
  }
};
</script>
