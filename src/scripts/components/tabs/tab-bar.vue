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
import { MDCTabBar } from '../../../material-components-web/tab-bar';
import UiTabScroller from './tab-scroller';
import tabBarMixin from '../../mixins/tab-bar';
import tabScrollerMixin from '../../mixins/tab-scroller';

export default {
  name: 'UiTabBar',
  components: {
    UiTabScroller
  },
  mixins: [tabBarMixin, tabScrollerMixin],
  data() {
    return {
      $tabBar: null,
      tabList: []
    };
  },
  watch: {
    active(val) {
      this._activateTab(val);
    }
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
    _activateTab(active = this.active) {
      if (this.$tabBar) {
        const activeTabIndex =
          active > -1 && active < this.tabList.length ? active : 0;
        this.$tabBar.activateTab(activeTabIndex);
      }
    },
    init() {
      this.$tabBar = new MDCTabBar(this.$el);

      this.tabList = this.$tabBar.tabList_;
      if (this.tabList.length) {
        this._activateTab();

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
