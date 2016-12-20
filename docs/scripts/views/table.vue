<template>
  <div class="docs-table">
    <h4>Data Table</h4>
    <ui-table
      :data="table1.data"
      :col="table1.col"
      :thead="table1.thead"
      :tbody="table1.tbody"
      :action="table1.action"
      :selectable="table1.selectable"
      :checkboxList="table1.checkboxList"
      @view="onView"
      @edit="onEdit"
      @delete="onDelete"
      @selected="onSelected1">
    </ui-table>

    <ui-table
      :data="table2.data"
      :caption="table2.caption"
      :col="table2.col"
      :thead="table2.thead"
      :tbody="table2.tbody"
      :tfoot="table2.tfoot"
      :action="table2.action"
      :selectable="table2.selectable"
      :checkboxList="table2.checkboxList"
      @view="onView"
      @edit="onEdit"
      @delete="onDelete"
      @selected="onSelected2">
    </ui-table>
  </div>
</template>

<script>
import dataList from '../../data/table';

export default {
  data() {
    return {
      table1: {
        data: [],
        col: 5,
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
        }],
        selectable: true,
        checkboxList: [],
      },
      table2: {
        caption: 'Table Caption',
        col: 5,
        data: [],
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
          }, {
            value: 'Name',
            sort: 'asc',
            by: 'name'
          },
          'Quantity',
          'Price']
        ],
        tbody: [
          'id',
          {
            field: 'name',
            class: 'test',
            noNum: true,
            fn: function(data) {
              return data + '!';
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
    onSelected1(data) {
      this.table1.checkboxList = data;
    },
    onSelected2(data) {
      this.table2.checkboxList = data;
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
