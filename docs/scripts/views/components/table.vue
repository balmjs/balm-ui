<template>
  <div :class="[$tt('body1'), 'demo--table']">
    <section class="hero component">
      <ui-table rowCheckbox :data="heroData" :thead="thead" :tbody="tbody"></ui-table>
    </section>

    <!-- <ui-table :data="data" :thead="thead" :tbody="tbody"></ui-table> -->

    <ui-table
      rowCheckbox
      :data="data"
      :thead="thead"
      :tbody="tbody"
      v-model="selectedRows"
      selectedRowId="id"
    >
      <template #actions="{ data }">
        <ui-button @click="show(data)">View</ui-button>
      </template>
    </ui-table>
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
      heroData: [],
      data: [],
      thead: [
        // [
        //   {
        //     value: 'Type1',
        //     colspan: 2
        //   },
        //   {
        //     value: 'Type2',
        //     colspan: 3
        //   }
        // ],
        'ID',
        {
          value: 'Dessert (100g serving)'
        },
        'Calories',
        'Fat (g)',
        'Carbs (g)',
        'Protein (g)',
        'Actions'
      ],
      tbody: [
        'id',
        'dessert',
        {
          field: 'calories',
          numeric: true,
          class: 'test'
        },
        {
          field: 'fat',
          fn: data => {
            return data.fat.toFixed(1);
          }
        },
        'carbs',
        {
          field: 'protein',
          class: data => {
            return data.protein > 5 ? 'red' : 'green';
          }
        },
        {
          slot: 'actions'
        }
      ],
      selectedRows: [2, 3]
    };
  },
  async created() {
    let { data } = await this.$http.get('/data/table.json');
    this.data = data;
    this.heroData = data.slice(0, 3);
  },
  methods: {
    show(data) {
      console.log(data);
    }
  }
};
</script>
