<template>
  <docs-page name="table" demo-count="2">
    <template #hero>
      <ui-table
        row-checkbox
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
          v-model="selectedRows"
          fullwidth
          row-checkbox
          :data="myData"
          :thead="thead2"
          :tbody="tbody2"
          :tfoot="tfoot"
          :selected-key="selectedKey"
          show-progress
        >
          <template #th-dessert>
            Dessert
            <ui-icon v-tooltip="'100g serving'" aria-describedby="th-cell-1">
              error_outline
            </ui-icon>
          </template>
          <template #dessert="{ data }">
            <div class="dessert">{{ data.dessert }}</div>
          </template>
          <template #actions="{ data }">
            <ui-icon @click="show(data)">description</ui-icon>
            <ui-icon @click="show(data)">edit</ui-icon>
            <ui-icon @click="show(data)">delete</ui-icon>
          </template>
        </ui-table>
        <ui-pagination
          v-model="page"
          :total="total"
          show-total
          @change="onPage"
        ></ui-pagination>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.3 Fixed Usage</h6>
      <div class="demo">
        <ui-table
          :data="data3"
          :thead="thead3"
          :tbody="tbody3"
          row-checkbox
          :default-col-width="200"
          :scroll="{ x: 1600, y: 300 }"
        ></ui-table>
      </div>
    </section>
  </docs-page>
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
      myData: [],
      thead1: [
        'ID',
        'Dessert (100g serving)',
        'Calories',
        'Fat (g)',
        'Carbs (g)',
        'Protein (g)'
      ],
      tbody1: ['id', 'dessert', 'calories', 'fat', 'carbs', 'protein'],
      // thead2: [
      //   [
      //     {
      //       value: 'ID',
      //       rowspan: 2,
      //       sort: 'asc',
      //       columnId: 'id'
      //     },
      //     {
      //       value: 'Type1',
      //       colspan: 2,
      //       align: 'center'
      //     },
      //     {
      //       value: 'Type2',
      //       colspan: 3,
      //       align: 'center'
      //     },
      //     {
      //       value: 'Actions',
      //       rowspan: 2
      //     }
      //   ],
      //   [
      //     {
      //       value: 'Dessert (100g serving)',
      //       class: 'gg'
      //     },
      //     {
      //       value: 'Calories',
      //       sort: 'desc',
      //       columnId: 'calories'
      //     },
      //     'Fat (g)',
      //     'Carbs (g)',
      //     'Protein (g)'
      //   ]
      // ],
      thead2: [
        {
          value: 'ID',
          sort: 'asc',
          columnId: 'id'
        },
        {
          // value: 'Dessert (100g serving)',
          slot: 'th-dessert',
          class: 'gg',
          sort: 'none',
          columnId: 'dessert'
        },
        'Calories',
        'Fat (g)',
        'Carbs (g)',
        'Protein (g)',
        'Actions'
      ],
      tbody2: [
        'id',
        {
          slot: 'dessert'
        },
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
      thead3: [
        'title1',
        'title2',
        'title3',
        'title4',
        'title5',
        'title6',
        'title7',
        'title8',
        'title9',
        'title10',
        'title11',
        'title12'
      ],
      tbody3: [
        {
          field: 'a',
          width: 80,
          fixed: 'left'
        },
        {
          field: 'b',
          width: 100,
          fixed: 'left'
        },
        {
          field: 'c',
          width: 100
        },
        {
          field: 'c',
          width: 100
        },
        {
          field: 'c',
          width: 100
        },
        {
          field: 'c'
        },
        {
          field: 'c'
        },
        {
          field: 'c'
        },
        {
          field: 'c'
        },
        {
          field: 'c',
          width: 100,
          fixed: 'right'
        },
        {
          field: 'b',
          width: 100,
          fixed: 'right'
        },
        {
          field: 'b',
          width: 80,
          fixed: 'right'
        }
      ],
      data3: [],
      selectedRows: [1, 2, 4],
      selectedKey: 'id',
      page: 1,
      total: 12
    };
  },
  async created() {
    let data = await this.$http.get('/data/table.json');
    this.heroData = data.slice(0, 3);
    setTimeout(() => {
      this.myData = data;
    }, 2e3);

    this.data3 = [
      { a: 'aaa', b: 'bbb', c: '内容内容内容内容内容', d: 3, key: '1' },
      { a: 'aaa', b: 'bbb', c: '内容内容内容内容内容', d: 3, key: '2' },
      { a: 'aaa', c: '内容内容内容内容内容', d: 2, key: '3' },
      { a: 'aaa', c: '内容内容内容内容内容', d: 2, key: '4' },
      { a: 'aaa', c: '内容内容内容内容内容', d: 2, key: '5' },
      { a: 'aaa', c: '内容内容内容内容内容', d: 2, key: '6' },
      { a: 'aaa', c: '内容内容内容内容内容', d: 2, key: '7' },
      { a: 'aaa', c: '内容内容内容内容内容', d: 2, key: '8' },
      { a: 'aaa', c: '内容内容内容内容内容', d: 2, key: '9' },
      { a: 'aaa', b: 'bbb', c: '内容内容内容内容内容', d: 3, key: '10' },
      { a: 'aaa', b: 'bbb', c: '内容内容内容内容内容', d: 3, key: '11' },
      { a: 'aaa', b: 'bbb', c: '内容内容内容内容内容', d: 3, key: '12' }
    ];
  },
  methods: {
    show(data) {
      console.log(data);
    },
    async onPage(page) {
      let url = `/data/table${page === 2 ? page : ''}.json`;
      this.myData = await this.$http.get(url);
    }
  }
};
</script>
