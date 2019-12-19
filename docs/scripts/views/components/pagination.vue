<template>
  <div :class="[$tt('body1'), 'demo--pagination']">
    <header class="hero component">
      <ui-pagination v-model="page" :total="total"></ui-pagination>
    </header>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-demo'" :class="$tt('headline4')">1. Demo</h4>
      <section class="example">
        <h6 :class="$tt('headline6')">1.1 Default Usage</h6>
        <ui-pagination
          v-model="page1"
          :pageSize="pageSize1"
          :total="total1"
          showJumper
          jumperBeforeText="Goto"
          jumperAfterText="page"
          jumperButtonText="Go"
        ></ui-pagination>
      </section>
      <ui-snippet :code="code[1]"></ui-snippet>

      <section class="example">
        <h6 :class="$tt('headline6')">1.2 Custom Record</h6>
        <ui-pagination
          v-model="page2"
          :pageSize="pageSize2"
          :total="total2"
          position="right"
        >
          <template
            #before="{ recordClass, pageCount, currentMinRow, currentMaxRow }"
          >
            <ui-form-field :class="recordClass">
              <label for="per-page-rows">Rows per page:</label>
              <ui-select
                outlined
                noLabel
                id="per-page-rows"
                v-model="pageSize2"
                :options="pageSizeOptions"
              ></ui-select>
              <span>
                {{ currentMinRow }}-{{ currentMaxRow }} of {{ total2 }}
              </span>
            </ui-form-field>
          </template>
        </ui-pagination>
      </section>
      <ui-snippet :code="code[2]"></ui-snippet>

      <section class="example">
        <h6 :class="$tt('headline6')">1.3 Mini Mode</h6>
        <ui-pagination
          mini
          v-model="page3"
          :total="total"
          prev="Prev"
          next="Next"
        >
          <span>Page {{ page3 }}</span>
        </ui-pagination>
      </section>
      <ui-snippet :code="code[3]"></ui-snippet>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-markdown :text="docs.pagination"></ui-markdown>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">
        3. Sass Variables
      </h4>
      <ui-markdown :text="docs.css"></ui-markdown>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Pagination'
  },
  mixins: [snippets],
  data() {
    return {
      // hero
      page: 1,
      total: 100,
      // demo
      page1: 1,
      pageSize1: 5,
      total1: 100,
      page2: 1,
      pageSize2: 10,
      total2: 500,
      page3: 1,
      pageSizeOptions: [
        {
          label: 10,
          value: 10
        },
        {
          label: 20,
          value: 20
        },
        {
          label: 30,
          value: 30
        },
        {
          label: 40,
          value: 40
        }
      ]
    };
  },
  created() {
    this.initDocs('pagination', {
      code: 3,
      apis: ['pagination'],
      css: true
    });
  }
};
</script>
