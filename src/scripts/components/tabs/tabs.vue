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
        :minWidth="minWidth"
        :contentIndicator="contentIndicator"
      >
      </ui-tab>
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
  name: 'ui-tabs',
  components: {
    UiTabBar,
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
