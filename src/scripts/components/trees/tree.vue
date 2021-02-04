<template>
  <div class="mdc-tree">
    <slot></slot>
    <ui-tree-node :children="nodeList" :tree-data="treeData">
      <template v-for="(_, name) in $slots" #[name]="slotData">
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
    isLeaf: 'isLeaf'
  },
  EVENT: {
    CHANGE: 'update:modelValue'
  }
};

export default {
  name: 'UiTree',
  components: {
    UiTreeNode
  },
  props: {
    // States
    modelValue: {
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
  emits: [UI_TREE.EVENT.CHANGE],
  data() {
    return {
      nodeList: [],
      treeData: {
        dataFormat: Object.assign(UI_TREE.dataFormat, this.dataFormat),
        maxLevel: this.maxLevel,
        nodeMap: new Map(),
        selectedValue: this.modelValue,
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
    }
  },
  created() {
    if (this.multiple && !Array.isArray(this.treeData.selectedValue)) {
      throw new Error(
        `[BalmUI tree]: The prop modelValue must be an array in the multiple tree`
      );
    }
  },
  mounted() {
    this.nodeList = new MdcTree(this.data, this.treeData);
  }
};
</script>
