<template>
  <!-- Helper text (optional) -->
  <p :id="id" :class="className" aria-hidden="true">
    <slot></slot>
  </p>
</template>

<script>
import { helperTextMixin } from '../../mixins/helper-text';

export default {
  name: 'MdcSelectHelper',
  mixins: [helperTextMixin],
  computed: {
    className() {
      return {
        'mdc-select-helper-text': true,
        'mdc-select-helper-text--validation-msg-persistent': this.validMsg,
        'mdc-select-helper-text--validation-msg': this.isVisible
      };
    },
    isVisible() {
      return !this.visible || this.validMsg; // For css name bug
    }
  }
};
</script>
