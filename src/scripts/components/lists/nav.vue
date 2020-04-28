<template>
  <nav :class="className">
    <slot
      :itemClass="UI_LIST.cssClasses.item"
      :activeClass="UI_LIST.cssClasses.active"
    >
      <!-- <ui-a> -->
    </slot>
  </nav>
</template>

<script>
import listMixin from '../../mixins/list';
import UI_LIST from './constants';

export default {
  name: 'ui-nav',
  mixins: [listMixin],
  data() {
    return {
      UI_LIST
    };
  }
};
</script>
