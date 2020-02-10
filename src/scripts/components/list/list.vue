<template>
  <ul :class="className" :role="singleSelection ? 'listbox' : 'list'">
    <slot>
      <!-- <ui-item> -->
    </slot>
  </ul>
</template>

<script>
import listMixin from '../../mixins/list';

export default {
  name: 'ui-list',
  mixins: [listMixin]
};
</script>
