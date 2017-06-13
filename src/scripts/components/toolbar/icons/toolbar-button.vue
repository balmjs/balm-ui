<template>
  <button type="button" :class="className">
    <slot>{{ isMenu ? 'menu' : '' }}</slot>
  </button>
</template>

<script>
import toolbarIconMixin from '../../../mixins/toolbar-icon';

export default {
  name: 'ui-toolbar-button',
  mixins: [toolbarIconMixin]
};
</script>
