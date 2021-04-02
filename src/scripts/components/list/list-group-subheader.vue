<template>
  <h3 :class="deprecatedListClassNameMap['mdc-list-group__subheader']">
    <slot></slot>
  </h3>
</template>

<script>
import deprecatedListMixin from '../../mixins/deprecated-list';

export default {
  name: 'UiListGroupSubheader',
  mixins: [deprecatedListMixin]
};
</script>
