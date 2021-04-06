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
import { strings } from '../../../material-components-web/tab-bar/constants';
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
    if (
      this.$slots.default &&
      this.$slots.default.length !== this.tabList.length
    ) {
      if (this.$tabBar) {
        this.$tabBar.unlisten(
          strings.TAB_ACTIVATED_EVENT,
          this._tabActivatedEvent
        );
      }

      this.init();
    }
  },
  methods: {
    _activateTab(active = this.active) {
      const activeTabIndex =
        active > -1 && active < this.tabList.length ? active : 0;
      this.$tabBar.activateTab(activeTabIndex);
    },
    _tabActivatedEvent({ detail }) {
      this.handleChange(detail.index);
    },
    init() {
      this.$tabBar = new MDCTabBar(this.$el);

      this.$tabBar.listen(strings.TAB_ACTIVATED_EVENT, this._tabActivatedEvent);

      this.tabList = this.$tabBar.tabList_;
      if (this.tabList.length) {
        this._activateTab();
      }
    }
  }
};
</script>
