<template>
  <li :class="className" @click="$parent.onChange || null">
    <slot></slot>
  </li>
</template>

<script>
import listItemMixin from '../../mixins/list-item';

export default {
  name: 'ui-item',
  mixins: [listItemMixin]
};
</script>
