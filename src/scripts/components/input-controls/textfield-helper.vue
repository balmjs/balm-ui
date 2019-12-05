<template>
  <!-- Assistive area (optional) -->
  <div class="mdc-text-field-helper-line">
    <ui-textfield-helper-text :id="id" :visible="visible" :validMsg="validMsg">
      <slot></slot>
    </ui-textfield-helper-text>
    <slot name="counter">
      <ui-textfield-counter v-if="counter"></ui-textfield-counter>
    </slot>
  </div>
</template>

<script>
import UiTextfieldHelperText from './textfield-helper-text';
import UiTextfieldCounter from './textfield-counter';
import textfieldHelperTextMixin from '../../mixins/textfield-helper-text';

export default {
  name: 'ui-textfield-helper',
  components: {
    UiTextfieldHelperText,
    UiTextfieldCounter
  },
  mixins: [textfieldHelperTextMixin],
  props: {
    counter: {
      type: Boolean,
      default: false
    }
  }
};
</script>
