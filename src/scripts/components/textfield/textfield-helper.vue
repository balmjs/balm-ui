<template>
  <!-- Assistive area (optional) -->
  <div class="mdc-text-field-helper-line">
    <!-- Helper text (optional) -->
    <div :id="id" :class="className" aria-hidden="true">
      <slot>{{ validationMsg }}</slot>
    </div>
    <!-- Character counter (optional) -->
    <mdc-textfield-counter v-if="withCounter"></mdc-textfield-counter>
  </div>
</template>

<script>
import MdcTextfieldCounter from './mdc-textfield-counter';
import helperTextMixin from '../../mixins/helper-text';

export default {
  name: 'UiTextfieldHelper',
  components: {
    MdcTextfieldCounter
  },
  mixins: [helperTextMixin],
  props: {
    withCounter: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-text-field-helper-text': true,
        'mdc-text-field-helper-text--persistent': this.visible,
        'mdc-text-field-helper-text--validation-msg': this.hasValidMsg
      };
    }
  },
  watch: {
    validMsg() {
      this.updatePrevEl('mdc-text-field');
    }
  },
  mounted() {
    const textfieldEl = this.$el.previousElementSibling;
    const hasTextfield =
      textfieldEl && textfieldEl.classList.contains('mdc-text-field');
    if (this.withCounter && !hasTextfield) {
      console.warn(
        '[UiTextfield]',
        `Do not insert any tags between '<ui-textfield>' and '<ui-textfield-helper>' with counter`
      );
    }
  }
};
</script>
