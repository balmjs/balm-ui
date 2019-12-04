<template>
  <hr :class="className" />
</template>

<script>
import listDividerMixin from '../../mixins/list-divider';

export default {
  name: 'ui-list-divider',
  mixins: [listDividerMixin]
};
</script>
