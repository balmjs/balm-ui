<template>
  <li :class="className" @click="$parent.onChange || null">
    <slot></slot>
  </li>
</template>

<script>
import itemMixin from '../../mixins/item';

export default {
  name: 'ui-item',
  mixins: [itemMixin]
};
</script>
