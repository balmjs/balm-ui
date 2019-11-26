<template>
  <a :class="className" :href="url">
    <slot></slot>
  </a>
</template>

<script>
import itemMixin from '../../mixins/item';
import anchorMixin from '../../mixins/anchor';

export default {
  name: 'ui-item-a',
  mixins: [itemMixin, anchorMixin]
};
</script>
