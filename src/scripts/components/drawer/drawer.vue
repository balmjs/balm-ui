<template>
  <aside :class="className.outer">
    <nav :class="className.inner">
      <slot></slot>
    </nav>
  </aside>
</template>

<script>
const TYPES = ['temporary', 'persistent', 'permanent'];

export default {
  name: 'ui-drawer',
  props: {
    // ui attributes
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    className() {
      let type = this.type;

      return {
        outer: `mdc-${type}-drawer`,
        inner: `mdc-${type}-drawer__drawer`
      };
    }
  },
  created() {
    if (!this.type) {
      console.warn('Please set a drawer type: ' + JSON.stringify(TYPES));
    }
  }
};
</script>
