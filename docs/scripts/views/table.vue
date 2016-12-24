<template>
  <div class="docs-table">
    <h4>{{ $t('table.dataTable') }}</h4>

    <h5>{{ $t('table.basic') }}</h5>
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

    <h5>{{ $t('table.advanced') }}</h5>
    <ui-table
      :data="table2.data"
      :caption="table2.caption"
      :thead="table2.thead"
      :tbody="table2.tbody"
      :tfoot="table2.tfoot"
      :action="table2.action"
      :selectable="table2.selectable"
      :checkboxList="table2.checkboxList"
      detailView
      :detailViewData="table2.tableDetail"
      @view="onView"
      @edit="onEdit"
      @delete="onDelete"
      @selected="onSelected"
      @view-detail="viewDetail">
    </ui-table>
    <ui-code language="html" :code="code2.html"></ui-code>
    <ui-code language="js" :code="code2.js"></ui-code>
  </div>
</template>

<script>
import dataList from '../../data/table';
import UiCode from '../components/code';
import codeTemplate1 from '../usages/table/template1.html';
import codeScript1 from '../usages/table/script1.html';
import codeTemplate2 from '../usages/table/template2.html';
import codeScript2 from '../usages/table/script2.html';

export default {
  components: {
    UiCode
  },
  data() {
    return {
      code1: {},
      code2: {},
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
            fn: function(data) {
              return data + '!' + '<i class="material-icons">mood</i>';
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
    viewDetail() {
      this.table2.tableDetail +=  ('-' + new Date().getTime());
    }
  },
  created() {
    this.code1.html = this.renderHTML(codeTemplate1);
    this.code1.js = this.renderJS(codeScript1);
    this.code2.html = this.renderHTML(codeTemplate2);
    this.code2.js = this.renderJS(codeScript2);
  },
  mounted() {
    setTimeout(() => {
      this.table1.data = dataList;
      this.table2.data = dataList;
    }, 1000);
  }
};
</script>
