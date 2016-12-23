<template>
  <div class="docs-table">
    <h4>Data Table</h4>

    <h5>Simple</h5>
    <ui-table
      :data="table1.data"
      :thead="table1.thead"
      :tbody="table1.tbody"
      :action="table1.action"
      @view="onView"
      @edit="onEdit"
      @delete="onDelete">
    </ui-table>
    <pre><code class="language-html" v-html="code1.html"></code></pre>
    <pre><code class="language-js" v-html="code1.js"></code></pre>

    <h5>Advanced</h5>
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
      @view="onView"
      @edit="onEdit"
      @delete="onDelete"
      @selected="onSelected"
      @view-detail="viewDetail">
      <div slot="detailView">
        1111
        <ui-button>{{ hello }}</ui-button>
        2222
      </div>
    </ui-table>
    <pre><code class="language-html" v-html="code2.html"></code></pre>
    <pre><code class="language-js" v-html="code2.js"></code></pre>
  </div>
</template>

<script>
import dataList from '../../data/table';
import codeTemplate1 from '../usages/table/template1.html';
import codeScript1 from '../usages/table/script1.html';
import codeTemplate2 from '../usages/table/template2.html';
import codeScript2 from '../usages/table/script2.html';

export default {
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
        checkboxList: []
      },
      hello: 'Hello'
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
      console.log('viewDetail', data); // TODO
      this.hello += data.name;
    }
  },
  created() {
    this.code1.html = this.$prism.highlight(codeTemplate1, this.$prism.languages.html);
    this.code1.js = this.$prism.highlight(codeScript1, this.$prism.languages.javascript);
    this.code2.html = this.$prism.highlight(codeTemplate2, this.$prism.languages.html);
    this.code2.js = this.$prism.highlight(codeScript2, this.$prism.languages.javascript);
  },
  mounted() {
    setTimeout(() => {
      this.table1.data = dataList;
      this.table2.data = dataList;
    }, 1000);
  }
};
</script>
