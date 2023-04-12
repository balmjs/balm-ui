<template>
  <docs-page name="tree" demo-count="3">
    <template #hero>
      <h1 :class="$tt('headline1')">Tree</h1>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 Default Tree</h6>
      <div class="demo">
        <ui-tree
          v-model="selectedValue1"
          :data="treeData1"
          :data-format="dataFormat"
          :max-level="2"
        >
          <p>selectedValue: {{ selectedValue1 }}</p>
        </ui-tree>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 Tree with Checkbox</h6>
      <div class="demo">
        <ui-tree
          v-model="selectedValue2"
          :data="treeData2"
          :data-format="dataFormat"
          :max-level="2"
          multiple
        >
          <p>selectedValue: {{ selectedValue2 }}</p>
        </ui-tree>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.3 Tree with async data</h6>
      <div class="demo">
        <ui-tree
          v-model="selectedValue3"
          :data="treeData3"
          :data-format="dataFormat"
          multiple
          :load-data="loadData"
        >
          <p>selectedValue: {{ selectedValue3 }}</p>
          <template #title="{ data }">
            {{ data.title }}
          </template>
        </ui-tree>
      </div>
      <ui-snippet :code="$store.demos[3]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
function dig(path = '0', level = 0) {
  const list = [];

  for (let i = 0; i < 3; i += 1) {
    const key = `${path}-${i}`;
    const treeNode = {
      title: key,
      key
    };

    // For test
    if (level > 0) {
      treeNode.children = dig(key, level - 1);
    }

    // For async data test
    if (level === -1) {
      // treeNode.children = [];
      treeNode.hasChildren = 3;
    }

    list.push(treeNode);
  }

  return list;
}

export default {
  data() {
    return {
      dataFormat: { label: 'title', value: 'key' },
      treeData1: [], // dig('0', 2),
      selectedValue1: '',
      treeData2: [], // dig('1', 2),
      selectedValue2: [],
      treeData3: [], // dig('0', -1),
      selectedValue3: ['0-0'],
      keywords: ''
    };
  },
  mounted() {
    setTimeout(() => {
      this.treeData1 = dig('0', 2);
      this.treeData2 = dig('1', 2);
      this.treeData3 = dig('0', -1);

      this.selectedValue2 = ['1-1-0', '1-1-0-0', '1-1-0-1', '1-1-0-2'];
    }, 1);
  },
  methods: {
    async loadData(nodeKey) {
      return await dig(nodeKey, -1);
    }
  }
};
</script>
