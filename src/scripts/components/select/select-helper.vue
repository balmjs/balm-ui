<template>
  <!-- Helper text (optional) -->
  <p :id="id" :class="className" aria-hidden="true">
    <slot>{{ validationMsg }}</slot>
  </p>
</template>

<script>
import helperTextMixin from '../../mixins/helper-text';

export default {
  name: 'UiSelectHelper',
  mixins: [helperTextMixin],
  computed: {
    className() {
      return {
        'mdc-select-helper-text': true,
        'mdc-select-helper-text--validation-msg-persistent': this.hasValidMsg,
        'mdc-select-helper-text--validation-msg': this.isVisible
      };
    },
    isVisible() {
      return !this.visible || this.hasValidMsg; // For css name bug
    }
  },
  watch: {
    validMsg() {
      this.updatePrevEl('mdc-select');
    }
  }
};
</script>
