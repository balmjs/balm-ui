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
  customOptions: {
    UI_TAB_BAR
  }
};
</script>

<script setup>
import {
  ref,
  reactive,
  watch,
  onMounted,
  useSlots,
  getTransitionRawChildren
} from 'vue';
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
const slots = useSlots();

const tabBar = ref(null);
const state = reactive({
  $tabBar: null
});

function activateTab(active = props.modelValue) {
  const activeTabIndex =
    active > -1 && active < state.$tabBar.tabList.length ? active : 0;

  state.$tabBar.activateTab(activeTabIndex);
}

function init() {
  state.$tabBar = new MDCTabBar(tabBar.value);

  state.$tabBar.listen(strings.TAB_ACTIVATED_EVENT, ({ detail }) => {
    emit(UI_TAB_BAR.EVENTS.CHANGE, detail.index);
  });

  if (state.$tabBar.tabList.length) {
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
  const defaultSlotChildren = getTransitionRawChildren(slots.default());

  if (defaultSlotChildren.length !== state.$tabBar.tabList.length) {
    if (state.$tabBar) {
      state.$tabBar.destroy();
    }

    init();
  }
}

defineExpose({
  updated
});
</script>
