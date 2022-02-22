<template>
  <span :class="deprecatedListClassNameMap['mdc-list-item__text']">
    <slot></slot>
  </span>
</template>

<script>
import { deprecatedClassNameMap } from '../../../material-components-web/list/constants';

export default {
  name: 'UiMenuitemText',
  inheritAttrs: false,
  customOptions: {
    deprecatedClassNameMap
  }
};
</script>
