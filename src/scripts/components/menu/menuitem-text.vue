<template>
  <span :class="deprecatedListClassNameMap['mdc-list-item__text']">
    <slot></slot>
  </span>
</template>

<script>
import deprecatedListMixin from '../../mixins/deprecated-list';

export default {
  name: 'UiMenuitemText',
  mixins: [deprecatedListMixin]
};
</script>
