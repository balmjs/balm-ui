<template>
  <!-- Container -->
  <div ref="tabBar" class="mdc-tab-bar" role="tablist">
    <ui-tab-scroller :align="align">
      <slot>
        <!-- Tab components -->
      </slot>
    </ui-tab-scroller>
  </div>
</template>

<script>
import { UI_TAB_BAR } from './constants';

export default {
  name: 'UiTabBar',
  inheritAttrs: false,
  customOptions: {
    UI_TAB_BAR
  }
};
</script>

<script setup>
import { watch, onMounted, useSlots, getTransitionRawChildren } from 'vue';
import { MDCTabBar } from '../../../material-components-web/tab-bar';
import { strings } from '../../../material-components-web/tab-bar/constants';
import UiTabScroller from './tab-scroller.vue';
import { tabBarProps } from '../../mixins/tab-bar';
import { tabScrollerProps } from '../../mixins/tab-scroller';
import { UI_TAB_BAR } from './constants';

const props = defineProps({
  ...tabBarProps,
  ...tabScrollerProps
});

const emit = defineEmits([UI_TAB_BAR.EVENTS.CHANGE]);

const tabBar = ref(null);
let $tabBar = null;

function activateTab(active = props.modelValue) {
  const activeTabIndex =
    active > -1 && active < $tabBar.tabList.length ? active : 0;

  $tabBar.activateTab(activeTabIndex);
}

function init() {
  $tabBar = new MDCTabBar(tabBar.value);

  $tabBar.listen(strings.TAB_ACTIVATED_EVENT, ({ detail }) => {
    emit(UI_TAB_BAR.EVENTS.CHANGE, detail.index);
  });

  if ($tabBar.tabList.length) {
    activateTab();
  }
}

onMounted(() => {
  init();

  watch(
    () => props.modelValue,
    (val) => activateTab(val)
  );
});

function updated() {
  const slots = useSlots();
  const defaultSlotChildren = getTransitionRawChildren(slots.default());

  if (defaultSlotChildren.length !== $tabBar.tabList.length) {
    if ($tabBar) {
      $tabBar.destroy();
    }

    init();
  }
}

defineExpose({
  updated
});
</script>
