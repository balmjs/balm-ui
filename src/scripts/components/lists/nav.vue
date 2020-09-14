<template>
  <nav :class="className">
    <slot></slot>
  </nav>
</template>

<script>
import listMixin from '../../mixins/list';
import UI_LIST from './constants';

export default {
  name: 'UiNav',
  mixins: [listMixin],
  data() {
    return {
      UI_LIST
    };
  }
};
</script>
