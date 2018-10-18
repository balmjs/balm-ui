<template>
  <a class="mdc-card__primary-action" :href="url">
    <slot></slot>
  </a>
</template>

<script>
import anchorMixin from '../../mixins/anchor';

export default {
  name: 'ui-card-content',
  mixins: [anchorMixin]
};
</script>
