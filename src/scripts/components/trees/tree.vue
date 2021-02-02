<template>
  <div class="mdc-tree">
    <slot></slot>
    <ui-tree-node :children="nodeList" :data="currentTreeData"></ui-tree-node>
  </div>
</template>

<script>
import { MdcTree } from './mdc-tree';
import UiTreeNode from './tree-node';

export default {
  name: 'UiTree',
  components: {
    UiTreeNode
  },
  props: {
    // States
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    // UI attributes
    maxLevel: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      nodeList: [],
      treeData: {
        maxLevel: this.maxLevel,
        nodeMap: new Map(),
        selectedValue: '',
        checkedValues: []
      }
    };
  },
  computed: {
    currentTreeData() {
      return this.treeData;
    }
  },
  created() {
    const $tree = new MdcTree(this.data, this.treeData);
    this.nodeList = $tree.data;
  }
};
</script>
