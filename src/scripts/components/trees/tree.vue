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
  dataFormat: {
    label: 'label',
    value: 'value',
    children: 'children',
    hasChildren: 'hasChildren',
    isLeaf: 'isLeaf'
  },
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
    selectedNodes: {
      type: [String, Array],
      default: ''
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    dataFormat: {
      type: Object,
      default() {
        return {};
      }
    },
    // UI attributes
    maxLevel: {
      type: Number,
      default: 0
    },
    multiple: {
      type: Boolean,
      default: false
    },
    loadData: {
      type: [Function, null],
      default: null
    }
  },
  data() {
    return {
      $tree: null,
      nodeList: [],
      treeData: {
        dataFormat: Object.assign(UI_TREE.dataFormat, this.dataFormat),
        maxLevel: this.maxLevel,
        nodeMap: new Map(),
        selectedValue: this.selectedNodes,
        multiple: this.multiple,
        loadData: this.loadData
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
    },
    data(val) {
      this.init(val);
    }
  },
  created() {
    if (this.multiple && !Array.isArray(this.treeData.selectedValue)) {
      throw new Error(
        `[BalmUI tree]: The prop selectedNodes must be an array in the multiple tree`
      );
    }
  },
  mounted() {
    this.$tree = new MdcTree(this.treeData);
    this.init();
  },
  methods: {
    init(originData = this.data) {
      if (!this.nodeList.length) {
        this.nodeList = this.$tree.getData(originData);
      }
    }
  }
};
</script>
