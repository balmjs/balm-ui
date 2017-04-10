<template>
  <div class="docs-table">
    <div class="component-title">
      <h3>Table</h3>
      <p>Organize data.</p>
    </div>

    <h4>{{ $t('table.basic') }}</h4>
    <ui-table
      :data="table1.data"
      :thead="table1.thead"
      :tbody="table1.tbody"
      :action="table1.action"
      @view="onView"
      @edit="onEdit"
      @delete="onDelete">
    </ui-table>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>{{ $t('table.advanced') }}</h4>
    <ui-table
      :data="table2.data"
      :caption="table2.caption"
      :thead="table2.thead"
      :tbody="table2.tbody"
      :tfoot="table2.tfoot"
      :action="table2.action"
      :selectable="table2.selectable"
      :checkboxList="table2.checkboxList"
      @view="onView"
      @edit="onEdit"
      @delete="onDelete"
      @selected="onSelected"
      hasDetailView
      @view-detail="onViewDetail">
      <div slot="detail">
        {{ table2.tableDetail }}
      </div>
    </ui-table>
    <ui-markdown :text="code[1]"></ui-markdown>

    <h4>Custom</h4>
    <ui-table :data="table3.data"
      :tfoot="table3.tfoot">
      <template slot="thead">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </template>
      <template slot="tbody" scope="props">
        <tr v-for="item in props.data">
          <td>{{ item.id }}</td>
          <td><a :href="`#${item.id}`">{{ item.name }}</a></td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.price }}</td>
        </tr>
      </template>
    </ui-table>
    <ui-markdown :text="code[2]"></ui-markdown>

    <ui-apidoc name="table"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      table1: {
        data: [],
        thead: ['ID', 'Name', 'Quantity', 'Price', 'Operate'],
        tbody: ['id', 'name', 'quantity', 'price'],
        action: [{
          type: 'link',
          name: 'view',
          value: 'View'
        }, {
          type: 'icon',
          name: 'edit',
          icon: 'edit',
        }, {
          type: 'button',
          name: 'delete',
          value: 'Delete'
        }]
      },
      table2: {
        data: [],
        caption: 'Table Caption',
        thead: [
          [{
            value: 'Base Info',
            col: 2,
            class: 'base-info'
          }, {
            value: 'Data Info',
            col: 2,
            class: 'data-info'
          }, {
            value: 'Operate',
            row: 2,
            align: 'center'
          }],
          [{
            value: 'ID',
            sort: 'asc',
            by: 'id',
            align: 'center'
          }, {
            value: 'Name',
            align: 'left'
          }, {
            value: 'Quantity',
            align: 'center'
          }, {
            value: 'Price',
            align: 'right'
          }]
        ],
        tbody: [
          'id',
          {
            field: 'name',
            noNum: true,
            url(data, index) {
              return `#/detail/${data.id}`;
            }
          },
          {
            field: 'quantity',
            align: 'center',
            class(data) {
              return data.quantity > 20 ? 'green' : 'red';
            }
          },
          {
            field: 'price',
            align: 'right',
            raw: true,
            fn(data) {
              let price = data.price.toFixed(2);
              return `<b style="color:gold">$</b>${price}`;
            }
          }
        ],
        tfoot: [
          null,
          null,
          {
            name: 'sum',
            field: 'quantity'
          },
          {
            name: 'avg',
            field: 'price',
            raw: true,
            fn(result) {
              let price = result.toFixed(3);
              return `<b style="color:gold">$</b>${price}`;
            }
          }
        ],
        action: {
          class: 'button-test',
          align: 'center',
          value: [{
            type: 'link',
            name: 'view',
            value: 'View'
          }, {
            type: 'icon',
            name: 'edit',
            value: '<i class="material-icons">mood</i>'
          }, {
            type: 'button',
            name: 'delete',
            value: 'Delete'
          }]
        },
        selectable: 'left',
        checkboxList: [],
        tableDetail: 'Hello'
      },
      table3: {
        data: []
      }
    }
  },
  methods: {
    onView(data) {
      console.log('view', data);
    },
    onEdit(data) {
      console.log('edit', data);
    },
    onDelete(data) {
      console.log('delete', data);
    },
    onSelected(data) {
      this.table2.checkboxList = data;
    },
    onViewDetail(data) {
      // console.log('detail', data);
      this.table2.tableDetail +=  ('-' + data.id);
    }
  },
  created() {
    this.showCode('table', 3);
  },
  async mounted() {
    let response = await this.$http.get(`${this.$domain}/data/table.json`);
    let dataList = response.data;
    this.table1.data = dataList;
    this.table2.data = dataList;
    this.table3.data = dataList;
  }
};
</script>
