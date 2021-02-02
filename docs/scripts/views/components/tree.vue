<template>
  <docs-page name="tree" demo-count="1" without-css>
    <template #hero>
      <ui-tree :data="treeData"></ui-tree>

      <!-- <ui-tree :data="treeData2"></ui-tree> -->
    </template>

    <!-- Content -->
  </docs-page>
</template>

<script>
function dig(path = '0', level = 1) {
  const list = [];

  for (let i = 0; i < 9; i += 1) {
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
      treeData,
      treeData2: dig(1)
    };
  }
};
</script>
