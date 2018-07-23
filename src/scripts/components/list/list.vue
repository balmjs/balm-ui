<template>
  <ul :class="className" aria-orientation="vertical">
    <slot></slot>
  </ul>
</template>

<script>
import listMixin from '../../mixins/list';

export default {
  name: 'ui-list',
  mixins: [listMixin],
  props: {
    // TODO: States
    // selected: {
    //   type: Array,
    //   default() {
    //     return [];
    //   }
    // },
    // activated: {
    //   type: Number,
    //   default: -1
    // }
  }
};
</script>
