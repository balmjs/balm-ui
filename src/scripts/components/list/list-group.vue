<template>
  <div class="mdc-list-group">
    <slot :className="UI_LIST.SLOT_CLASS"></slot>
  </div>
</template>

<script>
import UI_LIST from './constants';

export default {
  name: 'ui-list-group',
  data() {
    return {
      UI_LIST
    };
  }
};
</script>
