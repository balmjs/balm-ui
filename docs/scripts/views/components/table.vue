<template>
  <div :class="[$tt('body1'), 'demo--table']">
    <section class="hero component">
      <ui-table rowCheckbox :data="heroData" :thead="thead1" :tbody="tbody1"></ui-table>
    </section>

    <ui-table :data="heroData" :thead="thead1" :tbody="tbody1"></ui-table>

    <p>Selected row ids: {{ selectedRows }}</p>
    <ui-table
      fullwidth
      rowCheckbox
      :data="data"
      :thead="thead2"
      :tbody="tbody2"
      :tfoot="tfoot"
      v-model="selectedRows"
      selectedRowId="id"
    >
      <template #actions="{ data }">
        <ui-icon @click="show(data)">description</ui-icon>
        <ui-icon @click="show(data)">edit</ui-icon>
        <ui-icon @click="show(data)">delete</ui-icon>
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
      thead1: [
        'ID',
        {
          value: 'Dessert (100g serving)',
          class: 'gg'
        },
        'Calories',
        'Fat (g)',
        'Carbs (g)',
        'Protein (g)'
      ],
      tbody1: ['id', 'dessert', 'calories', 'fat', 'carbs', 'protein'],
      thead2: [
        [
          {
            value: 'ID',
            rowspan: 2
          },
          {
            value: 'Type1',
            colspan: 2,
            align: 'center'
          },
          {
            value: 'Type2',
            colspan: 3,
            align: 'center'
          },
          {
            value: 'Actions',
            rowspan: 2
          }
        ],
        [
          {
            value: 'Dessert (100g serving)',
            class: 'gg'
          },
          'Calories',
          'Fat (g)',
          'Carbs (g)',
          'Protein (g)'
        ]
      ],
      tbody2: [
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
      tfoot: [
        {
          field: 'id',
          fnName: 'count'
        },
        null,
        {
          field: 'calories',
          fnName: 'sum',
          align: 'right',
          class: 'test'
        },
        {
          field: 'fat',
          fnName: 'avg'
        },
        {
          field: 'carbs',
          fnName: 'max'
        },
        {
          field: 'protein',
          fnName: 'min'
        }
      ],
      selectedRows: [1, 2, 4]
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
