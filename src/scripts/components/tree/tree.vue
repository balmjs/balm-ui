<template>
  <div :class="className">
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

const haveSameContents = (a, b) => {
  for (const v of new Set([...a, ...b]))
    if (a.filter((e) => e === v).length !== b.filter((e) => e === v).length)
      return false;
  return true;
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
    },
    autoExpandParent: {
      type: Boolean,
      default: false
    },
    defaultExpandedKeys: {
      type: Array,
      default() {
        return [];
      }
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
    className() {
      return {
        'mdc-tree': true,
        'mdc-tree--multiple': this.multiple
      };
    },
    selectedValue() {
      return this.treeData.selectedValue;
    }
  },
  watch: {
    selectedNodes(val, oldVal) {
      if (Array.isArray(val)) {
        if (!haveSameContents(this.treeData.selectedValue, val)) {
          this.updateSelectedValue(val, oldVal);
        }
      } else {
        if (this.treeData.selectedValue !== val) {
          this.updateSelectedValue(val);
        }
      }
    },
    data(val) {
      this.init(val);
    },
    selectedValue(val) {
      this.$emit(UI_TREE.EVENT.CHANGE, val);
    }
  },
  created() {
    if (this.multiple && !Array.isArray(this.treeData.selectedValue)) {
      throw new Error(
        `[UiTree]: The 'selectedNodes' prop must be an array in the multiple tree`
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

      if (this.nodeList.length) {
        MdcTree.setExpanded(this.treeData, this.nodeList, {
          autoExpandParent: this.autoExpandParent,
          defaultExpandedKeys: this.defaultExpandedKeys
        });

        MdcTree.setSelected(this.treeData, this.selectedValue);
      }
    },
    updateSelectedValue(val, oldVal = []) {
      this.$nextTick(() => {
        if (oldVal.length) {
          MdcTree.resetSelected(this.treeData, oldVal);
        }

        this.treeData.selectedValue = val;
        MdcTree.setSelected(this.treeData, val);
      });
    },
    updateNode(type, parentKey, nodeData) {
      switch (type) {
        case 'create':
          MdcTree.createNode(this.treeData, parentKey, nodeData);
          break;
        case 'delete':
          MdcTree.deleteNode(this.treeData, parentKey, nodeData);
          break;
        default:
          MdcTree.updateNode(this.treeData, parentKey, nodeData);
      }
    }
  }
};
</script>
