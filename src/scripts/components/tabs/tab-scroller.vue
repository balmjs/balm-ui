<template>
  <div ref="tabScroller" :class="className">
    <div class="mdc-tab-scroller__scroll-area">
      <div class="mdc-tab-scroller__scroll-content">
        <slot>
          <!-- Tab components -->
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { UI_TAB_SCROLLER } from './constants';

export default {
  name: 'UiTabScroller',
  customOptions: {
    UI_TAB_SCROLLER
  }
};
</script>

<script setup>
import { ref, reactive, computed, watch, onMounted } from 'vue';
import { MDCTabScroller } from '../../../material-components-web/tab-scroller';
import { tabScrollerProps } from '../../mixins/tab-scroller';

const props = defineProps({
  ...tabScrollerProps,
  // States
  scrollX: {
    type: Number,
    default: 0
  }
});

const emit = defineEmits([UI_TAB_SCROLLER.EVENTS.CHANGE]);

const className = computed(() => {
  let result = ['mdc-tab-scroller'];

  if (UI_TAB_SCROLLER.ALIGN.includes(props.align)) {
    result.push(`mdc-tab-scroller--align-${props.align}`);
  }

  return result.join(' ');
});

const tabScroller = ref(null);
const state = reactive({
  $tabScroller: null,
  scrollValue: props.scrollX
});

onMounted(() => {
  state.$tabScroller = new MDCTabScroller(tabScroller.value);

  watch(
    () => props.scrollX,
    (val) => {
      let newScrollValue = +val;
      state.$tabScroller.scrollTo(newScrollValue);

      state.scrollValue = newScrollValue;
    }
  );
});

function increment(scrollX = 0) {
  let offsetScrollX = +scrollX;
  state.$tabScroller.incrementScroll(offsetScrollX);

  state.scrollValue += offsetScrollX;
  if (state.scrollValue < 0) {
    state.scrollValue = 0;
  }

  emit(UI_TAB_SCROLLER.EVENTS.CHANGE, state.scrollValue);
}

defineExpose({
  increment
});
</script>
