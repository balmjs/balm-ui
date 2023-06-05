<template>
  <docs-page name="tree" demo-count="6">
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

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.4 Use defaultExpandedKeys</h6>
      <div class="demo">
        <ui-tree
          v-model="selectedValue4"
          :data="treeData4"
          :data-format="dataFormat"
          :max-level="3"
          auto-expand-parent
          :default-expanded-keys="defaultKeys"
        >
          <p>selectedValue: {{ selectedValue4 }}</p>
          <template #title="{ data }">
            {{ data.title }}
          </template>
        </ui-tree>
      </div>
      <ui-snippet :code="$store.demos[4]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.5 Automatic expansion of tree node</h6>
      <ui-button raised @click="selectedValue5 = '1-1-1'">
        Select node 1-1-1
      </ui-button>
      <ui-button style="margin: 0 8px" raised @click="selectedValue5 = '1-2-1'">
        Select node 1-2-1
      </ui-button>
      <div class="demo">
        <ui-tree
          v-model="selectedValue5"
          :data="treeData4"
          :data-format="dataFormat"
          :max-level="3"
          auto-expand-selected
        >
          <p>selectedValue: {{ selectedValue5 }}</p>
          <template #title="{ data }">
            {{ data.title }}
          </template>
        </ui-tree>
      </div>
      <ui-snippet :code="$store.demos[5]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">
        1.6 Automatic expansion of all tree nodes
      </h6>
      <div class="demo">
        <ui-tree
          v-model="selectedValue5"
          :data="treeData4"
          :data-format="dataFormat"
          :max-level="3"
          auto-expand-all
        >
          <p>selectedValue: {{ selectedValue5 }}</p>
          <template #title="{ data }">
            {{ data.title }}
          </template>
        </ui-tree>
      </div>
      <ui-snippet :code="$store.demos[6]"></ui-snippet>
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
      keywords: '',
      defaultKeys: ['1', '1-2', '1-2-1'],
      selectedValue4: '1',
      selectedValue5: '1-1-1',
      treeData4: [
        {
          title: 'node1',
          key: '1',
          children: [
            {
              title: 'node1-1',
              key: '1-1',
              children: [
                {
                  title: 'node1-1-1',
                  key: '1-1-1',
                  children: [
                    {
                      title: 'node1-1-1-1',
                      key: '1-1-1-1'
                    }
                  ]
                }
              ]
            },
            {
              title: 'node1-2',
              key: '1-2',
              children: [
                {
                  title: 'node1-2-1',
                  key: '1-2-1'
                }
              ]
            }
          ]
        }
      ]
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
