<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-drawer-toolbar-spacer',
  data() {
    return {
      type: this.$parent.type
    };
  },
  computed: {
    className() {
      return `mdc-${this.type}-drawer__toolbar-spacer`;
    }
  }
};
</script>
