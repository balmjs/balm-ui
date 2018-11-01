<template>
  <!-- Container -->
  <div class="mdc-tab-bar" role="tablist">
    <ui-tab-scroller :align="align">
      <slot><!-- Tab components --></slot>
    </ui-tab-scroller>
  </div>
</template>

<script>
import { MDCTabBar } from '../../../material-components-web/tab-bar';
import UiTabScroller from './tab-scroller';
import tabsMixin from '../../mixins/tabs';
import tabScrollerMixin from '../../mixins/tab-scroller';

export default {
  name: 'ui-tab-bar',
  components: {
    UiTabScroller
  },
  mixins: [tabsMixin, tabScrollerMixin],
  data() {
    return {
      $tabBar: null
    };
  },
  mounted() {
    this.$tabBar = new MDCTabBar(this.$el);

    this.initActivateTab();

    this.$tabBar.listen('MDCTabBar:activated', ({ detail: tab }) => {
      this.handleChange(tab.index);
    });
  },
  methods: {
    initActivateTab() {
      let tabList = this.$tabBar.tabList_;
      let activeTabIndex =
        this.active > -1 && this.active < tabList.length ? this.active : 0;

      // this.$tabBar.activateTab(activeTabIndex); // TODO: mdc's bug?
      if (this.$tabBar.tabList_.length) {
        let $tab = this.$tabBar.tabList_[activeTabIndex];
        $tab.activate($tab.computeIndicatorClientRect());
      }
    }
  }
};
</script>
