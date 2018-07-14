<template>
  <ui-tab-bar
    :type="type"
    :active="active"
    @change="handleChange">
    <ui-tab v-for="(tabItem, tabIndex) in items"
      :key="tabIndex"
      :icon="iconOnly || textWithIcon ? tabItem[tabKeys.icon] : null"
      :text="textWithIcon ? tabItem[tabKeys.text] : null"
      :href="tabItem[tabKeys.url]">
      {{ textOnly && tabItem[tabKeys.label] ? tabItem[tabKeys.label] : '' }}
    </ui-tab>
  </ui-tab-bar>
</template>

<script>
import UiTabBar from './tab-bar';
import UiTab from './tab';
import tabsMixin from '../../mixins/tabs';

// Define constants
const DEFAULT_TAB_KEYS = {
  label: 'label',
  icon: 'icon',
  text: 'text',
  url: 'url'
};
const TAB_ITEM_KEYS = Object.keys(DEFAULT_TAB_KEYS);

export default {
  name: 'ui-tabs',
  components: {
    UiTabBar,
    UiTab
  },
  mixins: [tabsMixin],
  props: {
    // States
    items: {
      type: Array,
      default() {
        return [];
      }
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
        if (TAB_ITEM_KEYS.includes(key) && this.keys[key]) {
          currentTabKeys[key] = this.keys[key];
        }
      });

      return currentTabKeys;
    }
  }
};
</script>
