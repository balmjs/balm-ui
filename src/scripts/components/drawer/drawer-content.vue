<template>
  <div :class="className">
    <slot :className="navClassName"></slot>
  </div>
</template>

<script>
export default {
  name: 'ui-drawer-content',
  data() {
    return {
      type: this.$parent.type
    };
  },
  computed: {
    className() {
      return `mdc-${this.type}-drawer__content`;
    },
    navClassName() {
      return {
        item: 'mdc-list-item',
        active: `mdc-${this.type}-drawer--selected`
      };
    }
  }
};
</script>
