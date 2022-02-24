<template>
  <ul>
    <li
      v-for="(nodeData, nodeIndex) in children"
      :key="nodeIndex"
      :class="[
        'mdc-tree-node',
        {
          'mdc-tree-node--root': nodeData.isRoot,
          'mdc-tree-node--leaf': nodeData.isLeaf
        }
      ]"
    >
      <div
        :class="[
          'mdc-tree-node__content',
          {
            'mdc-tree-node--selected': nodeData.selected || nodeData.checked
          }
        ]"
      >
        <slot name="before" :data="getData(nodeData)"></slot>

        <div v-if="nodeData.level" class="mdc-tree-node__indent">
          <span
            v-for="level in nodeData.level"
            :key="level"
            class="mdc-tree-node__indent-unit"
          ></span>
        </div>

        <div class="mdc-tree-node__icon">
          <span
            v-if="!nodeData[dataFormat.isLeaf]"
            @click="handleExpand(nodeData)"
          >
            <template v-if="nodeData.expanded">
              <slot name="expand-more-icon">
                <i :class="UI_GLOBAL.cssClasses.icon" aria-hidden="true">
                  expand_more
                </i>
              </slot>
            </template>
            <template v-else>
              <slot name="expand-less-icon">
                <i :class="UI_GLOBAL.cssClasses.icon" aria-hidden="true">
                  chevron_right
                </i>
              </slot>
            </template>
          </span>
        </div>

        <div
          v-if="treeData.multiple"
          class="mdc-tree-node__checkbox"
          @click="handleCheck(nodeData)"
        >
          <mdc-checkbox
            v-if="nodeData[dataFormat.isLeaf]"
            :checked="nodeData.checked"
            :disabled="nodeData.disabled"
          ></mdc-checkbox>
          <mdc-checkbox
            v-else
            :checked="nodeData.checked"
            :indeterminate="nodeData.indeterminate"
            :disabled="nodeData.disabled"
          ></mdc-checkbox>
        </div>

        <label
          class="mdc-tree-node__label"
          @click="
            treeData.multiple ? handleCheck(nodeData) : handleSelect(nodeData)
          "
        >
          <slot name="title" :data="getData(nodeData)">{{
            nodeData[dataFormat.label]
          }}</slot>
        </label>

        <slot name="after" :data="getData(nodeData)"></slot>
      </div>

      <ui-tree-node
        v-if="!nodeData[dataFormat.isLeaf] && nodeData.expanded"
        class="mdc-tree-node__children"
        :children="nodeData[dataFormat.children]"
        :tree-data="treeData"
      >
        <template v-for="(_, name) in $slots" #[name]="slotData">
          <slot :name="name" v-bind="slotData"></slot>
        </template>
      </ui-tree-node>
    </li>
  </ul>
</template>

<script>
import UI_GLOBAL from '../../config/constants';

export default {
  name: 'UiTreeNode',
  customOptions: {
    UI_GLOBAL
  }
};
</script>

<script setup>
import { MdcTree } from './mdc-tree';
import MdcCheckbox from '../checkbox/mdc-checkbox.vue';

const props = defineProps({
  children: {
    type: Array,
    default: () => []
  },
  treeData: {
    type: Object,
    default: () => ({})
  }
});

const dataFormat = props.treeData.dataFormat;

function handleExpand(item) {
  MdcTree.onExpand(props.treeData, item);
}
function handleSelect(item) {
  MdcTree.onSelect(props.treeData, item);
}
function handleCheck(item) {
  if (!item.disabled) {
    MdcTree.onCheck(props.treeData, item);
  }
}
function getData(item) {
  const { children, ...newItem } = item;
  return item[dataFormat.isLeaf] ? item : newItem;
}
</script>
