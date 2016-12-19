<template>
  <div class="demo-table">
    <ui-table
      :col="table.col"
      :data="table.data"
      :thead="table.thead"
      :tbody="table.tbody"
      :tfoot="table.tfoot"
      :action="table.action"
      :selectable="table.selectable"
      :checkList="table.checkList"
      @edit="onEdit"
      @delete="onDelete"
      @on-selected="onSelected">
    </ui-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      table: {
        selectable: 'left',
        checkList: [],
        thead: [{
          value: 'ID',
          sort: 'asc',
          by: 'id'
        }, {
          value: 'Name',
          sort: 'asc',
          by: 'name'
        }, 'Email', 'OP'],
        tbody: ['id', 'name', 'email'],
        tfoot: [{
          name: 'avg',
          value: 'id'
        }, null, null],
        data: [
        {
          id: 30,
          name: 'b',
          email: 'make@123.com'
        },
        {
          id: 10,
          name: 'w',
          email: 'air@123.com'
        },
        {
          id: 60,
          name: 'c',
          email: 'fun@123.com'
        }
        ],
        action: [
        {
          type: 'link',
          name: 'view',
          value: '查看详情'
        },
        {
          type: 'icon',
          name: 'edit',
          value: '<i class="material-icons">mood</i>'
        },
        {
          type: 'button',
          name: 'delete',
          value: '删除'
        }
        ]
      }
    }
  },
  methods: {
    onEdit(data) {
      console.log('edit', data);
    },
    onDelete(data) {
      console.log('delete', data);
    },
    onSelected(data) {
      this.table.checkList = data;
    }
  }
};
</script>
