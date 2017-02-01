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
  </div>
</template>

<script>
import dataList from '../../data/table';

export default {
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
          },
          {
            value: 'Name',
            align: 'left'
          },
          'Quantity',
          'Price']
        ],
        tbody: [
          {
            field: 'id',
            align: 'center'
          },
          {
            field: 'name',
            noNum: true,
            raw: true,
            fn: function(data, index) {
              return data.name + '!' + '<i class="material-icons">mood</i>';
            }
          },
          {
            field: 'quantity',
            class: data => {
              return data.quantity > 20 ? 'green' : 'red';
            }
          },
          {
            field: 'price',
            raw: true,
            fn: data => {
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
            fn: result => {
              let price = result.toFixed(3);
              return `<b style="color:gold">$</b>${price}`;
            }
          }
        ],
        action: [{
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
        }],
        selectable: 'left',
        checkboxList: [],
        tableDetail: 'Hello'
      },
      demoCount: 2,
      code: []
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
    for (let i = 1; i <= this.demoCount; i++) {
      let code = require(`../snippets/table/demo${i}.md`);
      this.code.push(code);
    }
  },
  mounted() {
    setTimeout(() => {
      this.table1.data = dataList;
      this.table2.data = dataList;
    }, 1000);
  }
};
</script>
