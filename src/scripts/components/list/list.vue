<template>
  <ul :class="className" aria-orientation="vertical">
    <slot :className="UI_LIST.SLOT_CLASS"></slot>
  </ul>
</template>

<script>
import listMixin from '../../mixins/list';
import UI_LIST from './constants';

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
  },
  data() {
    return {
      UI_LIST
    };
  }
};
</script>
