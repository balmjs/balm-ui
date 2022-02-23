<template>
  <hr :class="className" />
</template>

<script>
export default {
  name: 'UiListDivider',
  inheritAttrs: false,
  customOptions: {}
};
</script>

<script setup>
import { listDividerProps, useListDivider } from '../../mixins/list-divider';

const props = defineProps(listDividerProps);

const { className } = useListDivider(props);
</script>
