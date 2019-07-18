<template>
  <div :class="[$tt('body1'), 'demo--table']">
    <section class="hero component">表格</section>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Table'
  },
  mixins: [snippets],
  data() {
    return {
      thead: ['Dessert', 'Carbs (g)', 'Protein (g)', 'Comments']
    };
  }
};
</script>
