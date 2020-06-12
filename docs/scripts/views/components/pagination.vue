<template>
  <ui-page name="pagination" demo-count="3">
    <template #hero>
      <ui-pagination v-model="page" :total="total"></ui-pagination>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 Default Usage</h6>
      <div class="demo">
        <ui-pagination
          v-model="page1"
          :page-size="pageSize1"
          :total="total1"
          show-jumper
          jumper-before-text="Goto"
          jumper-after-text="page"
          jumper-button-text="Go"
        ></ui-pagination>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 Custom Record</h6>
      <div class="demo">
        <ui-pagination v-model="page2" :page-size="pageSize2" :total="total2" position="right">
          <template #before="{ recordClass, pageCount, currentMinRow, currentMaxRow }">
            <ui-form-field :class="recordClass">
              <label for="per-page-rows">Rows per page:</label>
              <ui-select
                id="per-page-rows"
                v-model="pageSize2"
                outlined
                no-label
                fullwidth
                :options="pageSizeOptions"
              ></ui-select>
              <span>{{ currentMinRow }}-{{ currentMaxRow }} of {{ total2 }}</span>
            </ui-form-field>
          </template>
        </ui-pagination>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.3 Mini Mode</h6>
      <div class="demo">
        <ui-pagination v-model="page3" mini :total="total" prev="Prev" next="Next">
          <span>Page {{ page3 }}</span>
        </ui-pagination>
      </div>
      <ui-snippet :code="$store.demos[3]"></ui-snippet>
    </section>
  </ui-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Pagination'
  },
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
  }
};
</script>
