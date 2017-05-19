<template>
  <div :class="CLASSNAME_PANEL" role="tabpanel">
    <slot></slot>
  </div>
</template>

<script>
import {CLASSNAME_PANEL} from './constants';

export default {
  name: 'ui-panel',
  data() {
    return {
      CLASSNAME_PANEL
    };
  }
};
</script>
