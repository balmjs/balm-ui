<template>
  <div class="mdc-tree">
    <slot></slot>
    <ui-tree-node :children="treeData"></ui-tree-node>
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
    selectedRows: {
      type: Array,
      default() {
        return [];
      }
    },
    // UI attributes
    rowCheckbox: {
      type: Boolean,
      default: false
    },
    selectedKey: {
      type: [Boolean, String],
      default: false
    },
    level: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      treeData: []
    };
  },
  created() {
    const $tree = new MdcTree(this.data, this.level);
    this.treeData = $tree.data;
    window.treeData = $tree.data;
  }
};
</script>
