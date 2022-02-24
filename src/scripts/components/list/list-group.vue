<template>
  <div :class="deprecatedListClassNameMap['mdc-list-group']">
    <slot></slot>
  </div>
</template>

<script>
import { deprecatedListClassNameMap } from './constants';

export default {
  name: 'UiListGroup',
  data() {
    return {
      deprecatedListClassNameMap
    };
  }
};
</script>
