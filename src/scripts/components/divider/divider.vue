<template>
  <hr :class="className">
</template>

<script>
import dividerMixin from '../../mixins/divider';

export default {
  name: 'ui-divider',
  mixins: [dividerMixin]
};
</script>
