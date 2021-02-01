<template>
  <ul>
    <li
      v-for="(nodeData, nodeIndex) in children"
      :key="nodeIndex"
      :class="className"
    >
      <div class="mdc-tree-node__content">
        <div
          v-if="!nodeData.isLeaf"
          class="mdc-tree-node__icon"
          @click="onExpand(nodeData)"
        >
          <template v-if="nodeData.isExpanded">
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

        <div class="mdc-tree-node__checkbox">
          <slot name="checkbox">
            <!-- TODO -->
          </slot>
        </div>

        <span class="mdc-tree-node__label" @click="onSelect(nodeData)">
          <slot>{{ nodeData.title }} ({{ nodeData.level }})</slot>
        </span>
      </div>

      <ui-tree-node
        v-if="!nodeData.isLeaf && nodeData.isExpanded"
        class="mdc-tree-node__children"
        :children="nodeData.children"
      ></ui-tree-node>
    </li>
  </ul>
</template>

<script>
import { MdcTree } from './mdc-tree';
import UI_GLOBAL from '../../config/constants';

export default {
  name: 'UiTreeNode',
  props: {
    children: {
      type: Array,
      default() {
        return [];
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
  computed: {
    className() {
      return {
        'mdc-tree-node': true
        // 'mdc-tree-node--root': this.isRoot,
        // 'mdc-tree-node--leaf': this.data.isLeaf
      };
    }
  },
  methods: {
    onExpand({ key }) {
      console.log('onExpand', key);
    },
    onCheck() {},
    onSelect({ key }) {
      console.log('onSelect', key);
    }
  }
};
</script>
