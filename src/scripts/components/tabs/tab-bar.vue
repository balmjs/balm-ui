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
import domMixin from '../../mixins/dom';
import tabBarMixin from '../../mixins/tab-bar';
import tabScrollerMixin from '../../mixins/tab-scroller';
import { UI_TAB_BAR } from './constants';

export default {
  name: 'UiTabBar',
  components: {
    UiTabScroller
  },
  mixins: [domMixin, tabBarMixin, tabScrollerMixin],
  data() {
    return {
      $tabBar: null,
      tabList: []
    };
  },
  watch: {
    modelValue(val) {
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
    _activateTab(active = this.modelValue) {
      if (this.$tabBar) {
        const activeTabIndex =
          active > -1 && active < this.tabList.length ? active : 0;

        this.$tabBar.activateTab(activeTabIndex);
      }
    },
    init() {
      this.$tabBar = new MDCTabBar(this.el);

      this.tabList = this.$tabBar.tabList_;
      if (this.tabList.length) {
        this._activateTab();

        this.$tabBar.listen(strings.TAB_ACTIVATED_EVENT, ({ detail }) => {
          this.$emit(UI_TAB_BAR.EVENT.CHANGE, detail.index);
        });
      } else {
        this.$tabBar = null;
      }
    }
  }
};
</script>
