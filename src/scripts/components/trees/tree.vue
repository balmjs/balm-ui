<template>
  <div class="mdc-tree">
    <slot></slot>
    <ui-tree-node :children="nodeList" :tree-data="treeData">
      <slot v-for="(_, name) in $slots" :slot="name" :name="name"></slot>
      <template
        v-for="(_, name) in $scopedSlots"
        :slot="name"
        slot-scope="slotData"
      >
        <slot :name="name" v-bind="slotData"></slot>
      </template>
    </ui-tree-node>
  </div>
</template>

<script>
import { MdcTree } from './mdc-tree';
import UiTreeNode from './tree-node';

const UI_TREE = {
  EVENT: {
    CHANGE: 'change'
  }
};

export default {
  name: 'UiTree',
  components: {
    UiTreeNode
  },
  model: {
    prop: 'selectedNodes',
    event: UI_TREE.EVENT.CHANGE
  },
  props: {
    // States
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    selectedNodes: {
      type: [String, Array],
      default: ''
    },
    // UI attributes
    maxLevel: {
      type: Number,
      default: 1
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      nodeList: [],
      treeData: {
        maxLevel: this.maxLevel,
        nodeMap: new Map(),
        selectedValue: this.selectedNodes,
        multiple: this.multiple
      }
    };
  },
  computed: {
    selectedValue() {
      return this.treeData.selectedValue;
    }
  },
  watch: {
    selectedValue(val) {
      this.$emit(UI_TREE.EVENT.CHANGE, val);
    }
  },
  created() {
    if (this.multiple && !Array.isArray(this.treeData.selectedValue)) {
      throw new Error(
        `[BalmUI tree]: multiple tree' selectedValue must be an array`
      );
    }
  },
  mounted() {
    this.$nextTick(() => {
      const $tree = new MdcTree(this.data, this.treeData);
      this.nodeList = $tree.data;
    });
  }
};
</script>
