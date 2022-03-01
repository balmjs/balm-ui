<template>
  <!-- Active tab indicator -->
  <span ref="tabIndicator" :class="className">
    <span :class="innerClassName">
      <template v-if="type === UI_TAB_INDICATOR.ICON">
        <slot></slot>
      </template>
    </span>
  </span>
</template>

<script>
import UI_GLOBAL from '../../config/constants';
import { UI_TAB_INDICATOR } from './constants';

const name = 'UiTabIndicator';

export default {
  name,
  customOptions: {
    name,
    UI_GLOBAL,
    UI_TAB_INDICATOR
  }
};
</script>

<script setup>
import { ref, computed, onBeforeMount, getCurrentInstance } from 'vue';

const props = defineProps({
  // UI attributes
  type: {
    type: String,
    default: UI_TAB_INDICATOR.UNDERLINE
  },
  fade: {
    type: Boolean,
    default: false
  }
});

const instance = getCurrentInstance();
const parent = instance.parent;
const tabIndicator = ref(null);

const isActive = computed(() => parent && parent.props.modelValue);
const className = computed(() => ({
  'mdc-tab-indicator': true,
  'mdc-tab-indicator--active': isActive.value,
  'mdc-tab-indicator--fade': props.fade
}));
const innerClassName = computed(() => {
  let result = [
    'mdc-tab-indicator__content',
    `mdc-tab-indicator__content--${props.type}`
  ];
  if (props.type === UI_TAB_INDICATOR.ICON) {
    result.push(UI_GLOBAL.cssClasses.icon);
  }
  return result.join(' ');
});

onBeforeMount(() => {
  if (!Object.values(UI_TAB_INDICATOR).includes(props.type)) {
    console.warn(`[${name}]: Invalid tab indicator type`);
  }
});
</script>
