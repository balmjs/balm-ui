<template>
  <span :class="deprecatedListClassNameMap['mdc-list-item__primary-text']">
    <slot></slot>
  </span>
</template>

<script>
import { deprecatedListClassNameMap } from './constants';

export default {
  name: 'UiItemText1',
  data() {
    return {
      deprecatedListClassNameMap
    };
  }
};
</script>
