<template>
  <ul :class="className" :role="role">
    <slot></slot>
  </ul>
</template>

<script>
import listMixin from '../../mixins/list';

export default {
  name: 'UiList',
  mixins: [listMixin]
};
</script>
