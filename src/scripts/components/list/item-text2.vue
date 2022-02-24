<template>
  <span :class="deprecatedListClassNameMap['mdc-list-item__secondary-text']">
    <slot></slot>
  </span>
</template>

<script>
import { deprecatedListClassNameMap } from './constants';

export default {
  name: 'UiItemText2',
  data() {
    return {
      deprecatedListClassNameMap
    };
  }
};
</script>
