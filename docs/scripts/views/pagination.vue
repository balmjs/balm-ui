<template>
  <div class="docs-pagination">
    <div class="component-title">
      <h3>Pagination</h3>
    </div>

    <h4>Full paging</h4>
    <div class="snippet-demo">
      <ui-pagination
        :recordCount="recordCount"
        :pageSize="pageSize"
        :page="page"
        showRecord
        showJumper
        jumperBefore="Goto"
        jumperAfter="page"
        @change="onPage">
        <template scope="props">
          Showing {{ props.recordCount }} records,
          <ui-select :options="pageSizeList" :model="pageSize" @change="onChangePageSize">{{ props.pageSize }}</ui-select> records / page, {{ props.pageCount }} total pages
        </template>
      </ui-pagination>
    </div>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>Mini paging</h4>
    <div class="snippet-demo">
      <ui-pagination
        :recordCount="recordCount"
        :pageSize="pageSize"
        :page="page"
        mini
        prev="Prev"
        next="Next"
        @change="onPage"></ui-pagination>
    </div>
    <ui-markdown :text="code[1]"></ui-markdown>

    <ui-apidoc name="pagination"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      recordCount: 100,
      pageSize: 5,
      page: 1,
      pageSizeList: [{
        key: 5,
        value: 5
      }, {
        key: 10,
        value: 10
      }, {
        key: 15,
        value: 15
      }, {
        key: 20,
        value: 20
      }]
    };
  },
  methods: {
    onPage(page) {
      this.page = page;
    },
    onChangePageSize(option) {
      this.pageSize = option.key;
    }
  },
  created() {
    this.showCode('pagination', 2);
  }
};
</script>

<style>
.mdl-pagination--record .mdl-select {
  width: 64px;
  min-width: 64px;
}

</style>
