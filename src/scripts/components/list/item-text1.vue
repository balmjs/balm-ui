<template>
  <span :class="deprecatedListClassNameMap['mdc-list-item__primary-text']">
    <slot></slot>
  </span>
</template>

<script>
import deprecatedListMixin from '../../mixins/deprecated-list';

export default {
  name: 'UiItemText1',
  mixins: [deprecatedListMixin]
};
</script>
