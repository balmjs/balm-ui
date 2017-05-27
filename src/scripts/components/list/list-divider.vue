<template>
  <hr :class="className">
</template>

<script>
import dividerMixin from '../../mixins/divider';

export default {
  name: 'ui-list-divider',
  mixins: [dividerMixin]
};
</script>
