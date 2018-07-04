<template>
  <div :class="className" @click="$parent.handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-chip',
  props: {
    selected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-chip': true,
        'mdc-chip--selected': this.selected
      };
    }
  }
};
</script>
