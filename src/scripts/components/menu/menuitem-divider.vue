<template>
  <!-- Divider (optional) -->
  <li :class="className" role="separator"></li>
</template>

<script>
export default {
  name: 'UiMenuitemDivider',
  customOptions: {}
};
</script>

<script setup>
import { useListDivider } from '../../mixins/list-divider';

const { className } = useListDivider({});
</script>
