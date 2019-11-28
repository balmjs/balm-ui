<template>
  <ui-tab-bar :active="active" @change="handleChange">
    <ui-tab-scroller :align="align">
      <slot>
        <ui-tab
          v-for="(tabItem, tabIndex) in items"
          :key="tabIndex"
          :type="type"
          :text="tabItem.text || null"
          :icon="tabItem.icon || null"
          :stacked="stacked"
          :minWidth="minWidth"
          :contentIndicator="contentIndicator"
        >
        </ui-tab>
      </slot>
    </ui-tab-scroller>
  </ui-tab-bar>
</template>

<script>
import UiTabBar from './tab-bar';
import UiTabScroller from './tab-scroller';
import UiTab from './tab';
import tabBarMixin from '../../mixins/tab-bar';
import tabScrollerMixin from '../../mixins/tab-scroller';
import tabMixin from '../../mixins/tab';

export default {
  name: 'ui-tabs',
  components: {
    UiTabBar,
    UiTabScroller,
    UiTab
  },
  mixins: [tabBarMixin, tabScrollerMixin, tabMixin],
  props: {
    // Data: { text: string, icon: string }
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
