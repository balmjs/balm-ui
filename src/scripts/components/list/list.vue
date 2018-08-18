<template>
  <ul :class="className" aria-orientation="vertical">
    <slot
      :itemClass="UI_LIST.SLOT_CLASS.item"
      :selectedClass="UI_LIST.SLOT_CLASS.selected"
      :activeClass="UI_LIST.SLOT_CLASS.activated"></slot>
  </ul>
</template>

<script>
import listMixin from '../../mixins/list';
import UI_LIST from './constants';

export default {
  name: 'ui-list',
  mixins: [listMixin],
  data() {
    return {
      UI_LIST
    };
  }
};
</script>
