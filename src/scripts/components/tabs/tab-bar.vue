<template>
  <nav :class="className" role="tablist">
    <slot name="before"></slot>
    <slot></slot>
    <span class="mdc-tab-bar__indicator"></span>
    <slot name="after"></slot>
  </nav>
</template>

<script>
import {MDCTabBar} from '../../material-components-web/tabs';
import tabBarMixin from '../../mixins/tab-bar';

const CLASSNAME_TAB = 'mdc-tab';
const CLASSNAME_ACTIVE = 'mdc-tab--active';
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
      this.$tabBar.listen('MDCTabBar:change', ({detail: tabs}) => {
        this.$emit(UI_EVENT_CHANGE, tabs.activeTabIndex);
      });
      let activeIndex = this.activeIndex;
      if (activeIndex && activeIndex < this.$tabBar.tabs.length) {
        this.$tabBar.activeTab = this.$tabBar.tabs[activeIndex];
        this.$tabBar.activeTabIndex = activeIndex;
      } else {
        // NOTE: It has bug when index = 0.
        // this.$tabBar.activeTab = this.$tabBar.tabs[0];
        // this.$tabBar.activeTabIndex = 0;
        this.$el.querySelector(`.${CLASSNAME_TAB}`).classList.add(CLASSNAME_ACTIVE);
      }
    }
  }
};
</script>
