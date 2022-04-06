<template>
  <div :class="[$tt('body1'), 'page--utils']">
    <div :class="[$tt('body2'), 'pure-docs']">
      <ui-markdown :text="docs"></ui-markdown>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'balm-ui';

export default {
  metaInfo() {
    return {
      subtitle: 'Utilities'
    };
  },
  async setup() {
    const store = useStore();

    const docs = computed(() => {
      const filename = `${store.lang}/utils/intro.md`;
      return require(`@/docs/${filename}`).default;
    });

    return {
      docs
    };
  }
};
</script>
