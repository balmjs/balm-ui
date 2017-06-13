<template>
  <a :class="className">
    <slot>{{ isMenu ? 'menu' : '' }}</slot>
  </a>
</template>

<script>
import toolbarIconMixin from '../../../mixins/toolbar-icon';

export default {
  name: 'ui-toolbar-anchor',
  mixins: [toolbarIconMixin]
};
</script>
