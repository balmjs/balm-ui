<template>
  <ui-tab-bar
    :active="active"
    @change="handleChange">
    <ui-tab-scroller :align="align">
      <ui-tab v-for="(tabItem, tabIndex) in items"
        :key="tabIndex"
        :type="type"
        :text="tabItem[tabKeys.text] || null"
        :icon="tabItem[tabKeys.icon] || null"
        :stacked="stacked"
        :minWidth="minWidth"
        :contentIndicator="contentIndicator">
      </ui-tab>
    </ui-tab-scroller>
  </ui-tab-bar>
</template>

<script>
import UiTabBar from './tab-bar';
import UiTabScroller from './tab-scroller';
import UiTab from './tab';
import tabsMixin from '../../mixins/tabs';
import tabMixin from '../../mixins/tab';
import tabScrollerMixin from '../../mixins/tab-scroller';

// Define constants
const DEFAULT_TAB_KEYS = {
  text: 'text',
  icon: 'icon'
};
const TAB_ITEM_KEYS = Object.keys(DEFAULT_TAB_KEYS);

export default {
  name: 'ui-tabs',
  components: {
    UiTabBar,
    UiTabScroller,
    UiTab
  },
  mixins: [tabsMixin, tabMixin, tabScrollerMixin],
  props: {
    // States
    items: {
      type: Array,
      required: true
    },
    // UI attributes
    keys: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    tabKeys() {
      let currentTabKeys = DEFAULT_TAB_KEYS;

      Object.keys(this.keys).forEach(key => {
        if (TAB_ITEM_KEYS.includes(key)) {
          currentTabKeys[key] = this.keys[key];
        }
      });

      return currentTabKeys;
    }
  }
};
</script>
