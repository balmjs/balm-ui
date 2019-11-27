<template>
  <a :class="className" :href="url">
    <slot></slot>
  </a>
</template>

<script>
import listItemMixin from '../../mixins/list-item';
import anchorMixin from '../../mixins/anchor';

export default {
  name: 'ui-item-a',
  mixins: [listItemMixin, anchorMixin]
};
</script>
