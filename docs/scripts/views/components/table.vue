<template>
  <ui-page name="table" demoCount="2">
    <template #hero>
      <ui-table
        rowCheckbox
        :data="heroData"
        :thead="thead1"
        :tbody="tbody1"
      ></ui-table>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 Default Usage</h6>
      <div class="demo">
        <ui-table :data="heroData" :thead="thead1" :tbody="tbody1"></ui-table>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 Advanced Usage</h6>
      <p>
        Selected rows: {{ selectedRows }} ( Selected key: {{ selectedKey }})
      </p>
      <div class="demo">
        <ui-table
          fullwidth
          rowCheckbox
          :data="data"
          :thead="thead2"
          :tbody="tbody2"
          :tfoot="tfoot"
          v-model="selectedRows"
          :selectedKey="selectedKey"
        >
          <template #actions="{ data }">
            <ui-icon @click="show(data)">description</ui-icon>
            <ui-icon @click="show(data)">edit</ui-icon>
            <ui-icon @click="show(data)">delete</ui-icon>
          </template>
        </ui-table>

        <!-- <br /><br />
      <ui-pagination
        v-model="page"
        :pageSize="8"
        :total="12"
        @change="onPage"
      ></ui-pagination> -->
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>
  </ui-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Table'
  },
  data() {
    return {
      // hero
      heroData: [],
      // demo
      data: [],
      thead1: [
        'ID',
        'Dessert (100g serving)',
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
            rowspan: 2,
            sort: 'asc',
            by: 'id'
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
          numeric: true
        },
        {
          field: 'fat',
          fn: (data) => {
            return data.fat.toFixed(1);
          }
        },
        'carbs',
        {
          field: 'protein',
          class: (data) => {
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
      selectedRows: [1, 2, 4],
      selectedKey: 'id',
      page: 1
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
    },
    async onPage(page) {
      let url = `/data/table${page === 2 ? page : ''}.json`;
      let { data } = await this.$http.get(url);
      this.data = data;
    }
  }
};
</script>
