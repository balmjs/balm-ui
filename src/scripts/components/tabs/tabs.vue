<template>
  <ui-tab-bar
    :type="type"
    :active="active"
    @change="handleChange">
    <ui-tab v-for="(tabItem, tabIndex) in items"
      :key="tabIndex"
      :icon="iconOnly || textWithIcon ? tabItem[tabIcon] : false"
      :text="textWithIcon ? tabItem[tabText] : false"
      :href="tabItem[tabUrl]">
      {{ textOnly && tabItem[tabLabel] ? tabItem[tabLabel] : '' }}
    </ui-tab>
  </ui-tab-bar>
</template>

<script>
import UiTabBar from './tab-bar';
import UiTab from './tab';
import tabsMixin from '../../mixins/tabs';

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
    tabLabel: {
      type: String,
      default: 'label'
    },
    tabIcon: {
      type: String,
      default: 'icon'
    },
    tabText: {
      type: String,
      default: 'text'
    },
    tabUrl: {
      type: String,
      default: 'url'
    }
  }
};
</script>
