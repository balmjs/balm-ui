<template>
  <!-- Helper text (optional) -->
  <div :id="id" :class="className" aria-hidden="true">
    <slot>{{ getType(validMsg) === 'string' ? validMsg : '' }}</slot>
  </div>
</template>

<script>
import helperTextMixin from '../../mixins/helper-text';
import getType from '../../utils/typeof';

export default {
  name: 'ui-textfield-helper-text',
  mixins: [helperTextMixin],
  data() {
    return {
      getType
    };
  },
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
