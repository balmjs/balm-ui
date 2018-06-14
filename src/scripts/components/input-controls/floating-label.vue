<template>
  <label :class="className">
    <slot></slot>
  </label>
</template>

<script>
import floatingLabelMixin from '../../mixins/floating-label';

export default {
  name: 'ui-floating-label',
  mixins: [floatingLabelMixin],
  computed: {
    className() {
      return {
        'mdc-floating-label': true,
        'mdc-floating-label--float-above': this.floatAbove,
        'mdc-floating-label--shake': this.shake
      };
    }
  }
};
</script>
