<template>
  <div :class="className">
    <slot>
      <!-- Form item: checkbox or radio + label -->
    </slot>
  </div>
</template>

<script>
import { MDCFormField } from '@material/form-field';

export default {
  name: 'ui-form-field',
  props: {
    // UI attributes
    alignEnd: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      $formField: null
    };
  },
  computed: {
    className() {
      return {
        'mdc-form-field': true,
        'mdc-form-field--align-end': this.alignEnd,
        'mdc-form-field--block': this.block
      };
    }
  },
  mounted() {
    this.$formField = new MDCFormField(this.$el);
  }
};
</script>
