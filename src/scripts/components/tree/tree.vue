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
  customOptions: {
    UI_TREE
  }
};
</script>

<script setup>
import {
  reactive,
  toRefs,
  computed,
  watch,
  onBeforeMount,
  onMounted,
  nextTick
} from 'vue';
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

const emit = defineEmits([UI_TREE.EVENTS.CHANGE, UI_TREE.EVENTS.SELECTED]);

const state = reactive({
  $tree: null,
  nodeList: [],
  treeData: {
    dataFormat: Object.assign(UI_TREE.dataFormat, props.dataFormat),
    maxLevel: props.maxLevel,
    nodeMap: new Map(),
    selectedValue: props.modelValue,
    multiple: props.multiple,
    singleChecked: props.singleChecked,
    loadData: props.loadData,
    selectedEvent: {}
  }
});
const { nodeList, treeData } = toRefs(state);

const className = computed(() => ({
  'mdc-tree': true,
  'mdc-tree--multiple': props.multiple
}));

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
      if (!haveSameContents(state.treeData.selectedValue, val)) {
        updateSelectedValue(val, oldVal);
      }
    } else {
      if (state.treeData.selectedValue !== val) {
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
  () => state.treeData.selectedValue,
  (val) => {
    emit(UI_TREE.EVENTS.CHANGE, val, state.treeData.selectedEvent);
    emit(
      UI_TREE.EVENTS.SELECTED,
      Array.isArray(val) ? val.map((nodeKey) => getNode(nodeKey)) : getNode(val)
    );
  }
);

onBeforeMount(() => {
  if (props.multiple && !Array.isArray(state.treeData.selectedValue)) {
    throw new Error(
      `[UiTree]: The 'modelValue' prop must be an array in the multiple tree`
    );
  }
});

onMounted(() => {
  state.$tree = new MdcTree(state.treeData);
  init();
});

function init(originData = props.data) {
  state.nodeList = state.$tree.getData(originData);

  if (state.nodeList.length) {
    MdcTree.setExpanded(state.treeData, state.nodeList, {
      autoExpandParent: props.autoExpandParent,
      defaultExpandedKeys: props.defaultExpandedKeys
    });

    MdcTree.setSelected(state.treeData, state.treeData.selectedValue);
  }
}

function updateSelectedValue(val, oldVal = []) {
  nextTick(() => {
    if (oldVal.length) {
      MdcTree.resetSelected(state.treeData, oldVal);
    }

    state.treeData.selectedValue = val;
    MdcTree.setSelected(state.treeData, val);
  });
}

function updateNode(type, parentKey, nodeData) {
  switch (type) {
    case 'create':
      MdcTree.createNode(state.treeData, parentKey, nodeData);
      break;
    case 'delete':
      MdcTree.deleteNode(state.treeData, parentKey, nodeData);
      break;
    default:
      MdcTree.updateNode(state.treeData, parentKey, nodeData);
  }
}

const getNode = (nodeKey) => state.treeData.nodeMap.get(nodeKey);

defineExpose({
  updateNode,
  getNode
});
</script>
