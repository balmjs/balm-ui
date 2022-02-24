<template>
  <!-- Primary text -->
  <span :class="deprecatedListClassNameMap['mdc-list-item__text']">
    <slot></slot>
  </span>
</template>

<script>
import { deprecatedListClassNameMap } from './constants';

export default {
  name: 'UiItemTextContent',
  data() {
    return {
      deprecatedListClassNameMap
    };
  }
};
</script>
