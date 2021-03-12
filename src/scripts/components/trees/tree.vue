<template>
  <div :class="className">
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
import UiTreeNode from './tree-node.vue';

const UI_TREE = {
  dataFormat: {
    label: 'label',
    value: 'value',
    children: 'children',
    hasChildren: 'hasChildren',
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
    },
    defaultSelectedKeys: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  emits: [UI_TREE.EVENT.CHANGE],
  data() {
    return {
      $tree: null,
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
        `[BalmUI tree]: The prop modelValue must be an array in the multiple tree`
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
          defaultExpandedKeys: this.defaultExpandedKeys,
          defaultSelectedKeys: this.defaultSelectedKeys
        });
      }
    }
  }
};
</script>
