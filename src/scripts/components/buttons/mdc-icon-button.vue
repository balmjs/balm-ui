<template>
  <button type="button" :class="className">
    <slot></slot>
  </button>
</template>

<script>
import materialIconMixin from '../../mixins/material-icon';

export default {
  name: 'MdcIconButton',
  mixins: [materialIconMixin],
  computed: {
    className() {
      return {
        'mdc-icon-button': true,
        'material-icons': this.materialIcon
      };
    }
  }
};
</script>
