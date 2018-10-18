<template>
  <a :class="className" :href="url">
    <slot>{{ isMenu ? 'menu' : '' }}</slot>
  </a>
</template>

<script>
import toolbarIconMixin from '../../../mixins/toolbar-icon';
import anchorMixin from '../../../mixins/anchor';

export default {
  name: 'ui-toolbar-anchor',
  mixins: [toolbarIconMixin, anchorMixin]
};
</script>
