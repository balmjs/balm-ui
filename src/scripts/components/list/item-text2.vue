<template>
  <span :class="deprecatedListClassNameMap['mdc-list-item__secondary-text']">
    <slot></slot>
  </span>
</template>

<script>
import deprecatedListMixin from '../../mixins/deprecated-list';

export default {
  name: 'UiItemText2',
  mixins: [deprecatedListMixin]
};
</script>
