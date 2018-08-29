<template>
  <aside :class="className">
    <slot></slot>
  </aside>
</template>

<script>
// Define drawer constants
const TYPES = ['dismissible', 'modal']; // default: 'permanent'

export default {
  name: 'ui-drawer',
  props: {
    // UI attributes
    type: String
  },
  computed: {
    className() {
      let result = ['mdc-drawer'];

      if (TYPES.includes(this.type)) {
        result.push(`mdc-drawer--${this.type}`);
      }

      return result.join(' ');
    }
  }
};
</script>
