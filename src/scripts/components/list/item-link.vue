<template>
  <a :class="UI_LIST.SLOT_CLASS.item" :href="url">
    <slot :className="UI_LIST.SLOT_CLASS"></slot>
  </a>
</template>

<script>
import linkMixin from '../../mixins/link';
import UI_LIST from './constants';

export default {
  name: 'ui-item-link',
  mixins: [linkMixin],
  data() {
    return {
      UI_LIST
    };
  }
};
</script>
