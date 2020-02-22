<template>
  <!-- Container -->
  <div class="mdc-tab-bar" role="tablist">
    <ui-tab-scroller :align="align">
      <slot>
        <!-- Tab components -->
      </slot>
    </ui-tab-scroller>
  </div>
</template>

<script>
import { MDCTabBar } from '@material/tab-bar';
import UiTabScroller from './tab-scroller';
import tabBarMixin from '../../mixins/tab-bar';
import tabScrollerMixin from '../../mixins/tab-scroller';

export default {
  name: 'ui-tab-bar',
  components: {
    UiTabScroller
  },
  mixins: [tabBarMixin, tabScrollerMixin],
  data() {
    return {
      $tabBar: null,
      nextTabId: 0 // For async tab
    };
  },
  mounted() {
    this.init();
  },
  updated() {
    if (!this.$tabBar) {
      this.init();
    }
  },
  methods: {
    init() {
      this.$tabBar = new MDCTabBar(this.$el);

      const tabList = this.$tabBar.tabList_;

      if (tabList.length) {
        const activeTabIndex =
          this.active > -1 && this.active < tabList.length ? this.active : 0;
        this.$tabBar.activateTab(activeTabIndex);

        this.$tabBar.listen('MDCTabBar:activated', ({ detail }) => {
          this.handleChange(detail.index);
        });
      } else {
        this.$tabBar = null;
      }
    }
  }
};
</script>
