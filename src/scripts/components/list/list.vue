<template>
  <ul :class="className">
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
