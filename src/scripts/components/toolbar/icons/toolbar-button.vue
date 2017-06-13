<template>
  <ui-button :class="className">
    <slot></slot>
  </ui-button>
</template>

<script>
import UiButton from '../../button/button';
import toolbarIconMixin from '../../../mixins/toolbar-icon';

export default {
  name: 'ui-toolbar-button',
  components: {
    UiButton
  },
  mixins: [toolbarIconMixin]
};
</script>
