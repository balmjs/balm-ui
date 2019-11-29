<template>
  <!-- Container -->
  <div class="mdc-tab-bar" role="tablist">
    <slot>
      <!-- Tab Scroller and Tab components -->
    </slot>
  </div>
</template>

<script>
import tabBarMixin from '../../mixins/tab-bar';
import { MDCTabBar } from '../../../material-components-web/tab-bar';

export default {
  name: 'ui-tab-bar',
  mixins: [tabBarMixin],
  data() {
    return {
      $tabBar: null
    };
  },
  mounted() {
    this.$tabBar = new MDCTabBar(this.$el);

    this.$tabBar.listen('MDCTabBar:activated', ({ detail }) => {
      this.handleChange(detail.index);
    });

    this.initActivateTab();
  },
  methods: {
    initActivateTab() {
      let tabList = this.$tabBar.tabList_;
      let activeTabIndex =
        this.active > -1 && this.active < tabList.length ? this.active : 0;

      this.$tabBar.activateTab(activeTabIndex);
    }
  }
};
</script>
