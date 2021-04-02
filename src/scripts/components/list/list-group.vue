<template>
  <div :class="deprecatedListClassNameMap['mdc-list-group']">
    <slot></slot>
  </div>
</template>

<script>
import deprecatedListMixin from '../../mixins/deprecated-list';

export default {
  name: 'UiListGroup',
  mixins: [deprecatedListMixin]
};
</script>
