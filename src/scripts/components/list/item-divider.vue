<template>
  <li :class="className" role="separator"></li>
</template>

<script>
import listDividerMixin from '../../mixins/list-divider';

export default {
  name: 'ui-item-divider',
  mixins: [listDividerMixin]
};
</script>
