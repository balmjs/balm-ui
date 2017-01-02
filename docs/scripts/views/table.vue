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
    <ui-code language="html" :code="code1.html"></ui-code>
    <ui-code language="js" :code="code1.js"></ui-code>

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
      detailView
      :detailViewData="table2.tableDetail"
      @view-detail="viewDetail">
    </ui-table>
    <ui-code language="html" :code="code2.html"></ui-code>
    <ui-code language="js" :code="code2.js"></ui-code>
  </div>
</template>

<script>
import dataList from '../../data/table';

export default {
  data() {
    return {
      code1: {
        html: require('../snippets/table/demo1-template.html'),
        js: require('../snippets/table/demo1-script.html')
      },
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
      code2: {
        html: require('../snippets/table/demo2-template.html'),
        js: require('../snippets/table/demo2-script.html')
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
            row: 2
          }],
          [{
            value: 'ID',
            sort: 'asc',
            by: 'id'
          },
          'Name',
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
            class: 'test',
            noNum: true,
            raw: true,
            fn: function(data, index) {
              return data.name + '!' + '<i class="material-icons">mood</i>';
            }
          },
          'quantity',
          'price'
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
            field: 'price'
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
    viewDetail(data) {
      console.log('detail', data);
      this.table2.tableDetail +=  ('-' + data.name);
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
