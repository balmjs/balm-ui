<template>
  <div :class="className">
    <slot>
      <!-- Form item: checkbox or radio + label -->
    </slot>
  </div>
</template>

<script>
import { MDCFormField } from '../../../material-components-web/form-field';

export default {
  name: 'ui-form-field',
  props: {
    // UI attributes
    nowrap: {
      type: Boolean,
      default: false
    },
    alignEnd: {
      type: Boolean,
      default: false
    },
    spaceBetween: {
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
        'mdc-form-field--nowrap': this.nowrap,
        'mdc-form-field--align-end': this.alignEnd,
        'mdc-form-field--space-between': this.spaceBetween
      };
    }
  },
  mounted() {
    this.$formField = new MDCFormField(this.$el);
  }
};
</script>
