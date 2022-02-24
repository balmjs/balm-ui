<template>
  <h3 :class="deprecatedListClassNameMap['mdc-list-group__subheader']">
    <slot></slot>
  </h3>
</template>

<script>
import { deprecatedListClassNameMap } from './constants';

export default {
  name: 'UiListGroupSubheader',
  data() {
    return {
      deprecatedListClassNameMap
    };
  }
};
</script>
