<template>
  <div :class="[$tt('body1'), 'demo--table']">
    <section class="hero component">表格</section>

    <ui-table :data="data" :thead="thead" :tbody="tbody"></ui-table>
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
      data: [],
      thead: [
        'ID',
        'Dessert',
        'Calories',
        'Fat',
        {
          value: 'Carbs (g)',
          slot: 'test'
        },
        'Protein (g)'
      ],
      tbody: [
        'id',
        'dessert',
        {
          field: 'calories',
          numeric: true
        },
        'fat',
        'carbs',
        'protein'
      ]
    };
  },
  async created() {
    let { data } = await this.$http.get('/data/table.json');
    this.data = data;
  }
};
</script>
