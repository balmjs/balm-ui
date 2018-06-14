<template>
  <p :id="id" :class="className" aria-hidden="true">
    <slot></slot>
  </p>
</template>

<script>
// import { MDCTextFieldHelperText } from '../../../material-components-web/textfield/helper-text';

export default {
  name: 'ui-textfield-helptext',
  props: {
    // Element attributes
    id: {
      type: String,
      required: true
    },
    // UI attributes
    visible: {
      type: Boolean,
      default: false
    },
    validMsg: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-text-field-helper-text': true,
        'mdc-text-field-helper-text--persistent': this.visible,
        'mdc-text-field-helper-text--validation-msg': this.validMsg
      };
    }
  }
  // mounted() {
  //   new MDCTextFieldHelperText(this.$el);
  // }
};
</script>
