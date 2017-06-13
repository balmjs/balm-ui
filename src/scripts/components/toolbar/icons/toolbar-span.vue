<template>
  <span :class="className">
    <slot>{{ isMenu ? 'menu' : '' }}</slot>
  </span>
</template>

<script>
import toolbarIconMixin from '../../../mixins/toolbar-icon';

export default {
  name: 'ui-toolbar-span',
  mixins: [toolbarIconMixin]
};
</script>
