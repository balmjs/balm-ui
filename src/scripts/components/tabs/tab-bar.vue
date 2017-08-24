<template>
  <nav :class="className" role="tablist">
    <slot></slot>
    <span class="mdc-tab-bar__indicator"></span>
  </nav>
</template>

<script>
import {MDCTabBar} from '../../../material-components-web/tabs';
import tabBarMixin from '../../mixins/tab-bar';

const MDC_EVENT_CHANGE = 'MDCTabBar:change';
const UI_EVENT_CHANGE = 'change';

export default {
  name: 'ui-tab-bar',
  mixins: [tabBarMixin],
  data() {
    return {
      $tabBar: null
    };
  },
  computed: {
    className() {
      return {
        'mdc-tab-bar': true,
        'mdc-tab-bar--icon-tab-bar': this.iconOnly,
        'mdc-tab-bar--icons-with-text': this.textWithIcon,
        'mdc-tab-bar--indicator-primary': this.primary,
        'mdc-tab-bar--indicator-accent': this.accent,
        'mdc-tab-bar--theme-dark': this.dark
      }
    }
  },
  mounted() {
    if (!this.$tabBar) {
      this.$tabBar = new MDCTabBar(this.$el);
      this.$tabBar.listen(MDC_EVENT_CHANGE, ({detail: tabs}) => {
        this.$emit(UI_EVENT_CHANGE, +tabs.activeTabIndex); // activeTabIndex: number
      });

      let activeIndex = this.active;
      if (activeIndex && activeIndex < this.$tabBar.tabs.length) {
        this.$tabBar.activeTab = this.$tabBar.tabs[activeIndex];
        this.$tabBar.activeTabIndex = activeIndex;
      }
    }
  }
};
</script>
