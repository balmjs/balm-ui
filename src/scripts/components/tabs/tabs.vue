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
      :icon="(iconOnly || textWithIcon) ? tab[tabIcon] : false"
      :text="textWithIcon ? tab[tabText] : false"
      :href="tab[tabUrl]">
      {{ textOnly && tab[tabName] ? tab[tabName] : '' }}
    </ui-tab>
  </ui-tab-bar>
</template>

<script>
import tabBarMixin from '../../mixins/tab-bar';

const UI_EVENT_CHANGE = 'change';

export default {
  name: 'ui-tabs',
  mixins: [tabBarMixin],
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      }
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
    },
    tabName: {
      type: String,
      default: 'name'
    }
  },
  methods: {
    handleChange(activeTabIndex) {
      this.$emit(UI_EVENT_CHANGE, activeTabIndex);
    }
  }
};
</script>
