<template>
  <ui-tab-bar :active="active" :align="align" @change="handleChange">
    <slot>
      <ui-tab
        v-for="(tabItem, tabIndex) in items"
        :key="tabIndex"
        :type="type"
        :text="tabItem.text || null"
        :icon="tabItem.icon || null"
        :stacked="stacked"
        :min-width="minWidth"
        :content-indicator="contentIndicator"
      ></ui-tab>
    </slot>
  </ui-tab-bar>
</template>

<script>
import UiTabBar from './tab-bar';
import UiTab from './tab';
import tabBarMixin from '../../mixins/tab-bar';
import tabScrollerMixin from '../../mixins/tab-scroller';
import tabMixin from '../../mixins/tab';

export default {
  name: 'UiTabs',
  components: {
    UiTabBar,
    UiTab
  },
  mixins: [tabBarMixin, tabScrollerMixin, tabMixin],
  props: {
    items: {
      type: Array,
      default() {
        return []; // Data: { text: string, icon: string }
      }
    }
  }
};
</script>
