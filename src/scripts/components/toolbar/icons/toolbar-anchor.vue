<template>
  <a :class="className" :href="url">
    <slot>{{ isMenu ? 'menu' : '' }}</slot>
  </a>
</template>

<script>
import toolbarIconMixin from '../../../mixins/toolbar-icon';
import linkMixin from '../../../mixins/link';

export default {
  name: 'ui-toolbar-anchor',
  mixins: [toolbarIconMixin, linkMixin]
};
</script>
