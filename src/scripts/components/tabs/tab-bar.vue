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
import { getTransitionRawChildren } from 'vue';
import { MDCTabBar } from '../../../material-components-web/tab-bar';
import { strings } from '../../../material-components-web/tab-bar/constants';
import UiTabScroller from './tab-scroller.vue';
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
  methods: {
    _activateTab(active = this.modelValue) {
      const activeTabIndex =
        active > -1 && active < this.$tabBar.tabList.length ? active : 0;

      this.$tabBar.activateTab(activeTabIndex);
    },
    init() {
      this.$tabBar = new MDCTabBar(this.el);

      this.$tabBar.listen(strings.TAB_ACTIVATED_EVENT, ({ detail }) => {
        this.$emit(UI_TAB_BAR.EVENT.CHANGE, detail.index);
      });

      if (this.$tabBar.tabList.length) {
        this._activateTab();
      }
    },
    updated() {
      const defaultSlotChildren = getTransitionRawChildren(
        this.$slots.default()
      );

      if (defaultSlotChildren.length !== this.$tabBar.tabList.length) {
        if (this.$tabBar) {
          this.$tabBar.destroy();
        }

        this.init();
      }
    }
  }
};
</script>
