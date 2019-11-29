<template>
  <nav :class="className">
    <slot
      :itemClass="UI_LIST.cssClasses.item"
      :selectedClass="UI_LIST.cssClasses.selected"
      :activatedClass="UI_LIST.cssClasses.activated"
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
