<template>
  <button type="button" :class="className" @click="handleClick">
    <slot>{{ isMenu ? 'menu' : '' }}</slot>
  </button>
</template>

<script>
import toolbarIconMixin from '../../../mixins/toolbar-icon';

export default {
  name: 'ui-toolbar-button',
  mixins: [toolbarIconMixin],
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    }
  }
};
</script>
