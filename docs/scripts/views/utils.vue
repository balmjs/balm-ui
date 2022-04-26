<template>
  <div :class="$tt('body1')">
    <div :class="[$tt('body2'), 'pure-docs']">
      <ui-markdown :text="docs"></ui-markdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageUtils',
  customOptions: {},
  metaInfo() {
    return {
      subtitle: 'Utilities'
    };
  }
};
</script>

<script setup>
import { computed } from 'vue';
import { useStore } from 'balm-ui';

const store = useStore();

const docs = computed(() => {
  const filename = `${store.lang}/utils/intro.md`;
  return require(`@/docs/${filename}`).default;
});
</script>
