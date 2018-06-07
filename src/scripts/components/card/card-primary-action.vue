<template>
  <a class="mdc-card__primary-action" :href="url">
    <slot></slot>
  </a>
</template>

<script>
import linkMixin from '../../mixins/link';

export default {
  name: 'ui-card-primary-action',
  mixins: [linkMixin]
};
</script>
