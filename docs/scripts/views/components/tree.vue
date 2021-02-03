<template>
  <docs-page name="tree" demo-count="1" without-css>
    <template #hero>
      selectedValue: {{ selectedValue }}
      <ui-tree
        v-model="selectedValue"
        :data="treeData"
        :max-level="2"
        multiple
        @change="onChange"
      >
        <!-- <ui-form>
          <ui-form-field>
            <label>Search</label>
            <ui-textfield v-model="keywords"></ui-textfield>
          </ui-form-field>
        </ui-form> -->
      </ui-tree>

      <!-- <ui-tree :data="treeData2"></ui-tree> -->
    </template>

    <!-- Content -->
  </docs-page>
</template>

<script>
function dig(path = '0', level = 2) {
  const list = [];

  for (let i = 0; i < 3; i += 1) {
    const key = `${path}-${i}`;
    const treeNode = {
      title: key,
      key
    };

    if (level > 0) {
      treeNode.children = dig(key, level - 1);
    }

    list.push(treeNode);
  }

  return list;
}

const treeData = dig();

console.log('treeData', treeData);

export default {
  data() {
    return {
      selectedValue: [],
      treeData,
      treeData2: dig(1),
      keywords: ''
    };
  },
  methods: {
    onChange(value) {
      console.log('onChange', value);
    }
  }
};
</script>
