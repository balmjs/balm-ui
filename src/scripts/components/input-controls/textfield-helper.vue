<template>
  <!-- Assistive area (optional) -->
  <div class="mdc-text-field-helper-line">
    <!-- Helper text (optional) -->
    <div :id="id" :class="className" aria-hidden="true">
      <slot>{{ getType(validMsg) === 'string' ? validMsg : '' }}</slot>
    </div>
    <!-- Character counter (optional) -->
    <ui-textfield-counter v-if="withCounter"></ui-textfield-counter>
  </div>
</template>

<script>
import UiTextfieldCounter from './textfield-counter';
import helperTextMixin from '../../mixins/helper-text';
import getType from '../../utils/typeof';

export default {
  name: 'ui-textfield-helper',
  components: {
    UiTextfieldCounter
  },
  mixins: [helperTextMixin],
  props: {
    withCounter: {
      type: Boolean,
      default: false
    }
  },
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
