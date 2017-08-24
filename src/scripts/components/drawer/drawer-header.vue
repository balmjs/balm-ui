<template>
  <header :class="className.outer">
    <div :class="[className.inner, contentClass]">
      <slot></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: 'ui-drawer-header',
  props: {
    // ui attributes
    contentClass: [String, Array]
  },
  data() {
    return {
      type: this.$parent.type
    };
  },
  computed: {
    className() {
      return {
        outer: `mdc-${this.type}-drawer__header`,
        inner: `mdc-${this.type}-drawer__header-content`
      };
    }
  }
};
</script>
