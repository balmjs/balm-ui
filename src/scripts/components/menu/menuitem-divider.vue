<template>
  <li
    :class="deprecatedListClassNameMap['mdc-list-divider']"
    role="separator"
  ></li>
</template>

<script>
import deprecatedListMixin from '../../mixins/deprecated-list';

export default {
  name: 'UiMenuitemDivider',
  mixins: [deprecatedListMixin]
};
</script>
