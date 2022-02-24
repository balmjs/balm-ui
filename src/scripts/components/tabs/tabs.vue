<template>
  <ui-tab-bar
    :model-value="modelValue"
    :align="align"
    @update:modelValue="handleChange"
  >
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
import { UI_TAB_BAR } from './constants';

export default {
  name: 'UiTabs',
  customOptions: {
    UI_TAB_BAR
  }
};
</script>

<script setup>
import UiTabBar from './tab-bar.vue';
import UiTab from './tab.vue';
import { tabBarProps, useTabBar } from '../../mixins/tab-bar';
import { tabScrollerProps } from '../../mixins/tab-scroller';
import { tabProps } from '../../mixins/tab';

const props = defineProps({
  ...tabBarProps,
  ...tabScrollerProps,
  ...tabProps,
  items: {
    type: Array,
    default: () => [] // Data: { text: string, icon: string }
  }
});

const emit = defineEmits([UI_TAB_BAR.EVENTS.CHANGE]);

const { handleChange } = useTabBar({ emit });
</script>
