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
const UI_TREE = {
  dataFormat: {
    label: 'label',
    value: 'value',
    children: 'children',
    hasChildren: 'hasChildren',
    isLeaf: 'isLeaf',
    disabled: 'disabled'
  },
  EVENTS: {
    CHANGE: 'update:modelValue',
    SELECTED: 'selected'
  }
};

export default {
  name: 'UiTree',
  inheritAttrs: false,
  customOptions: {
    UI_TREE
  }
};
</script>

<script setup>
import { computed, watch, onBeforeMount, onMounted, nextTick } from 'vue';
import { MdcTree } from './mdc-tree';
import UiTreeNode from './tree-node.vue';

const props = defineProps({
  // States
  modelValue: {
    type: [String, Array],
    default: ''
  },
  data: {
    type: Array,
    default: () => []
  },
  dataFormat: {
    type: Object,
    default: () => ({})
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
  singleChecked: {
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
    default: () => []
  }
});

const emit = defineEmits([UI_TREE.EVENTS.CHANGE]);

let $tree = null;
let nodeList = [];
let treeData = {
  dataFormat: Object.assign(UI_TREE.dataFormat, props.dataFormat),
  maxLevel: props.maxLevel,
  nodeMap: new Map(),
  selectedValue: props.modelValue,
  multiple: props.multiple,
  singleChecked: props.singleChecked,
  loadData: props.loadData,
  selectedEvent: {}
};

const className = computed(() => ({
  'mdc-tree': true,
  'mdc-tree--multiple': props.multiple
}));

const selectedValue = computed(() => treeData.selectedValue).value;

const haveSameContents = (a, b) => {
  for (const v of new Set([...a, ...b]))
    if (a.filter((e) => e === v).length !== b.filter((e) => e === v).length)
      return false;
  return true;
};

watch(
  () => props.modelValue,
  (val, oldVal) => {
    if (Array.isArray(val)) {
      if (!haveSameContents(treeData.selectedValue, val)) {
        updateSelectedValue(val, oldVal);
      }
    } else {
      if (treeData.selectedValue !== val) {
        updateSelectedValue(val);
      }
    }
  }
);
watch(
  () => props.data,
  (val) => init(val)
);
watch(
  () => selectedValue,
  (val) => {
    emit(UI_TREE.EVENTS.CHANGE, val, treeData.selectedEvent);
    emit(
      UI_TREE.EVENTS.SELECTED,
      Array.isArray(val) ? val.map((nodeKey) => getNode(nodeKey)) : getNode(val)
    );
  }
);

onBeforeMount(() => {
  if (props.multiple && !Array.isArray(treeData.selectedValue)) {
    throw new Error(
      `[UiTree]: The 'modelValue' prop must be an array in the multiple tree`
    );
  }
});

onMounted(() => {
  $tree = new MdcTree(treeData);
  init();
});

function init(originData = props.data) {
  nodeList = $tree.getData(originData);

  if (nodeList.length) {
    MdcTree.setExpanded(treeData, nodeList, {
      autoExpandParent: props.autoExpandParent,
      defaultExpandedKeys: props.defaultExpandedKeys
    });

    MdcTree.setSelected(treeData, selectedValue);
  }
}

function updateSelectedValue(val, oldVal = []) {
  nextTick(() => {
    if (oldVal.length) {
      MdcTree.resetSelected(treeData, oldVal);
    }

    treeData.selectedValue = val;
    MdcTree.setSelected(treeData, val);
  });
}

function updateNode(type, parentKey, nodeData) {
  switch (type) {
    case 'create':
      MdcTree.createNode(treeData, parentKey, nodeData);
      break;
    case 'delete':
      MdcTree.deleteNode(treeData, parentKey, nodeData);
      break;
    default:
      MdcTree.updateNode(treeData, parentKey, nodeData);
  }
}

const getNode = (nodeKey) => treeData.nodeMap.get(nodeKey);

defineExpose({
  updateNode,
  getNode
});
</script>
