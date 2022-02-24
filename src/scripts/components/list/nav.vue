<template>
  <nav ref="list" :class="className">
    <slot></slot>
  </nav>
</template>

<script>
export default {
  name: 'UiNav',
  customOptions: {}
};
</script>

<script setup>
import { ref } from 'vue';
import { listProps, useList } from '../../mixins/list';

const props = defineProps({
  ...listProps
});

const list = ref(null);

const { className } = useList(list, props, {});
</script>
