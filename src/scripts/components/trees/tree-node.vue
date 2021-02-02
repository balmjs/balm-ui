<template>
  <ul>
    <li
      v-for="(nodeData, nodeIndex) in children"
      :key="nodeIndex"
      class="mdc-tree-node"
    >
      <div class="mdc-tree-node__content">
        <div
          v-if="!nodeData.isLeaf"
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

        <div class="mdc-tree-node__checkbox" @click="handleCheck(nodeData)">
          <slot name="checkbox">
            <mdc-checkbox
              v-if="nodeData.isLeaf"
              :checked="nodeData.checked"
            ></mdc-checkbox>
            <mdc-checkbox
              v-else
              :checked="nodeData.checked"
              :indeterminate="nodeData.indeterminate"
            ></mdc-checkbox>
          </slot>
        </div>

        <span class="mdc-tree-node__label" @click="handleSelect(nodeData)">
          <slot>
            {{ nodeData.title }} ({{ nodeData.level }}) selected:
            {{ nodeData.selected }} | checked:
            <span style="color: red">{{ nodeData.checked }}</span> |
            indeterminate:
            <span style="color: blue">{{ nodeData.indeterminate }}</span>
          </slot>
        </span>
      </div>

      <ui-tree-node
        v-if="!nodeData.isLeaf && nodeData.expanded"
        class="mdc-tree-node__children"
        :children="nodeData.children"
        :data="data"
      ></ui-tree-node>
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
    data: {
      type: Object,
      default() {
        return {};
      }
    },
    isRoot: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      UI_GLOBAL
    };
  },
  methods: {
    handleExpand(data) {
      data.expanded = !data.expanded;
    },
    handleSelect({ key }) {
      MdcTree.setSelected(this.data, key);
    },
    handleCheck(data) {
      MdcTree.setCheckedValue(this.data, data);
    }
  }
};
</script>
