<template>
  <nav :class="className">
    <slot :className="UI_LIST.SLOT_CLASS"></slot>
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
