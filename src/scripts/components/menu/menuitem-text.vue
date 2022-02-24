<template>
  <span :class="deprecatedListClassNameMap['mdc-list-item__text']">
    <slot></slot>
  </span>
</template>

<script>
import { deprecatedListClassNameMap } from '../list/constants';

export default {
  name: 'UiMenuitemText',
  data() {
    return {
      deprecatedListClassNameMap
    };
  }
};
</script>
