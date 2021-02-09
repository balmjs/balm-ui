<template>
  <ul>
    <li
      v-for="(nodeData, nodeIndex) in children"
      :key="nodeIndex"
      :class="[
        'mdc-tree-node',
        {
          'mdc-tree-node--selected': nodeData.selected
        }
      ]"
    >
      <div class="mdc-tree-node__content">
        <div
          v-if="!nodeData[dataFormat.isLeaf]"
          class="mdc-tree-node__icon"
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
        </div>

        <div
          v-if="treeData.multiple"
          class="mdc-tree-node__checkbox"
          @click="handleCheck(nodeData)"
        >
          <mdc-checkbox
            v-if="nodeData[dataFormat.isLeaf]"
            :checked="nodeData.checked"
          ></mdc-checkbox>
          <mdc-checkbox
            v-else
            :checked="nodeData.checked"
            :indeterminate="nodeData.indeterminate"
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

        <slot name="action" :data="getData(nodeData)"></slot>
      </div>

      <ui-tree-node
        v-if="!nodeData[dataFormat.isLeaf] && nodeData.expanded"
        class="mdc-tree-node__children"
        :children="nodeData[dataFormat.children]"
        :tree-data="treeData"
      >
        <slot v-for="(_, name) in $slots" :slot="name" :name="name"></slot>
        <template
          v-for="(_, name) in $scopedSlots"
          :slot="name"
          slot-scope="slotData"
        >
          <slot :name="name" v-bind="slotData"></slot>
        </template>
      </ui-tree-node>
    </li>
  </ul>
</template>

<script>
import { MdcTree } from './mdc-tree';
import MdcCheckbox from '../selection-controls/mdc-checkbox';
import UI_GLOBAL from '../../config/constants';

export default {
  name: 'UiTreeNode',
  components: {
    MdcCheckbox
  },
  props: {
    children: {
      type: Array,
      default() {
        return [];
      }
    },
    treeData: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      UI_GLOBAL,
      dataFormat: this.treeData.dataFormat
    };
  },
  methods: {
    async handleExpand(item) {
      if (this.treeData.loadData) {
        const hasChildren =
          item[this.dataFormat.children] &&
          item[this.dataFormat.children].length;

        if (hasChildren) {
          item.expanded = !item.expanded;
        } else {
          let nodes = await this.treeData.loadData(item[this.dataFormat.value]);
          MdcTree.addData(this.treeData, item, nodes);
        }
      } else {
        item.expanded = !item.expanded;
      }
    },
    handleSelect({ key }) {
      MdcTree.onSelect(this.treeData, key);
    },
    handleCheck(item) {
      MdcTree.onCheck(this.treeData, item);
    },
    getData(item) {
      const { children, ...newItem } = item;
      return item[this.dataFormat.isLeaf] ? item : newItem;
    }
  }
};
</script>
