<template>
  <ui-tab-bar
    :type="type"
    :active="active"
    :primary="primary"
    :accent="accent"
    :dark="dark"
    @change="handleChange">
    <ui-tab v-for="(tab, index) in data"
      :key="index"
      :icon="(iconOnly || textWithIcon) ? tab.icon : false"
      :text="textWithIcon ? tab.text : false"
      :href="tab.url">
      {{ textOnly && tab.name ? tab.name : '' }}
    </ui-tab>
  </ui-tab-bar>
</template>

<script>
import tabBarMixin from '../../mixins/tab-bar';
import tabMixin from '../../mixins/tab';

const UI_EVENT_CHANGE = 'change';

export default {
  name: 'ui-tabs',
  mixins: [
    tabBarMixin,
    tabMixin
  ],
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  methods: {
    handleChange(activeTabIndex) {
      this.$emit(UI_EVENT_CHANGE, activeTabIndex);
    }
  }
};
</script>
