<template>
  <!-- Helper text (optional) -->
  <p :id="id" :class="className" aria-hidden="true">
    <slot>{{ getType(validMsg) === 'string' ? validMsg : '' }}</slot>
  </p>
</template>

<script>
import helperTextMixin from '../../mixins/helper-text';
import getType from '../../utils/typeof';

export default {
  name: 'UiSelectHelper',
  mixins: [helperTextMixin],
  data() {
    return {
      getType
    };
  },
  computed: {
    className() {
      return {
        'mdc-select-helper-text': true,
        'mdc-select-helper-text--validation-msg': this.validMsg,
        'mdc-select-helper-text--validation-msg-persistent':
          this.validMsg || this.visible
      };
    }
  }
};
</script>
