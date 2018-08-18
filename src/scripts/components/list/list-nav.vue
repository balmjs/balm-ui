<template>
  <nav :class="className">
    <slot
      :itemClass="UI_LIST.SLOT_CLASS.item"
      :selectedClass="UI_LIST.SLOT_CLASS.selected"
      :activeClass="UI_LIST.SLOT_CLASS.activated"></slot>
  </nav>
</template>

<script>
import listMixin from '../../mixins/list';
import UI_LIST from './constants';

export default {
  name: 'ui-list-nav',
  mixins: [listMixin],
  data() {
    return {
      UI_LIST
    };
  }
};
</script>
