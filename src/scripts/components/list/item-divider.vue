<template>
  <li :class="className" role="separator"></li>
</template>

<script>
import dividerMixin from '../../mixins/divider';

export default {
  name: 'ui-item-divider',
  mixins: [dividerMixin]
};
</script>
