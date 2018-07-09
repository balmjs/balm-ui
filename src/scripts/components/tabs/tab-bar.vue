<template>
  <nav :class="className" role="tablist">
    <slot></slot>
    <span class="mdc-tab-bar__indicator"></span>
  </nav>
</template>

<script>
import { MDCTabBar } from '../../../material-components-web/tabs';
import tabsMixin from '../../mixins/tabs';
import UI_TABS from './constants';

export default {
  name: 'ui-tab-bar',
  mixins: [tabsMixin],
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
        'mdc-tab-bar--icons-with-text': this.textWithIcon
      };
    }
  },
  mounted() {
    if (!this.$tabBar) {
      this.$tabBar = new MDCTabBar(this.$el);

      this.$tabBar.listen(
        `MDCTabBar:${UI_TABS.EVENT.CHANGE}`,
        ({ detail: tabs }) => {
          this.handleChange(tabs.activeTabIndex);
        }
      );

      this.$tabBar.activeTabIndex = this.active;
    }
  }
};
</script>
