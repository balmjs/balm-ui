<template>
  <li :class="className" role="separator"></li>
</template>

<script>
export default {
  name: 'UiItemDivider',
  customOptions: {}
};
</script>

<script setup>
import { listDividerProps, useListDivider } from '../../mixins/list-divider';

const props = defineProps(listDividerProps);

const { className } = useListDivider(props);
</script>
