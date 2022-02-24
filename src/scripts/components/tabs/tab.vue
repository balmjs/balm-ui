<template>
  <!-- Tab item -->
  <button
    ref="tab"
    :class="className"
    role="tab"
    aria-selected="false"
    tabindex="-1"
    @click="handleClick"
  >
    <span class="mdc-tab__content">
      <template v-if="isTextWithIcon">
        <!-- Icon -->
        <slot name="icon" :iconClass="UI_TAB.cssClasses.icon">
          <i
            v-if="materialIcon"
            :class="UI_GLOBAL.getMaterialIconClass(UI_TAB.cssClasses.icon)"
            aria-hidden="true"
            v-text="materialIcon"
          ></i>
        </slot>
        <!-- Text label -->
        <span class="mdc-tab__text-label">
          <slot>{{ text }}</slot>
        </span>
      </template>
      <template v-else-if="isIconOnly">
        <slot name="icon" :iconClass="UI_TAB.cssClasses.icon">
          <i
            v-if="materialIcon"
            :class="UI_GLOBAL.getMaterialIconClass(UI_TAB.cssClasses.icon)"
            aria-hidden="true"
            v-text="materialIcon"
          ></i>
        </slot>
      </template>
      <span v-else class="mdc-tab__text-label">
        <slot>{{ text }}</slot>
      </span>

      <!-- Active tab indicator - content inner -->
      <template v-if="contentIndicator">
        <slot name="indicator">
          <ui-tab-indicator></ui-tab-indicator>
        </slot>
      </template>
    </span>

    <!-- Active tab indicator - content outer -->
    <template v-if="!contentIndicator">
      <slot name="indicator">
        <ui-tab-indicator></ui-tab-indicator>
      </slot>
    </template>

    <span class="mdc-tab__ripple"></span>
  </button>
</template>

<script>
import UI_GLOBAL from '../../config/constants';
import { UI_TAB } from './constants';

export default {
  name: 'UiTab',
  customOptions: {
    UI_GLOBAL,
    UI_TAB
  }
};
</script>

<script setup>
import { ref, computed, onUpdated } from 'vue';
import UiTabIndicator from './tab-indicator.vue';
import { tabProps, useTab } from '../../mixins/tab';
import { icon, useMaterialIcon } from '../../mixins/material-icon';

const props = defineProps({
  ...tabProps,
  // UI attributes
  icon,
  text: {
    type: String,
    default: ''
  }
});

const emit = defineEmits([UI_GLOBAL.EVENTS.CLICK]);

const tab = ref(null);
let $tab = ref(null);

const { isTextWithIcon, isIconOnly } = useTab(props);
const { materialIcon } = useMaterialIcon(props);

const isActive = computed(
  () => tab.value && tab.value.classList.contains(UI_TAB.cssClasses.active)
).value;

const className = computed(() => ({
  'mdc-tab': true,
  'mdc-tab--stacked': props.stacked,
  'mdc-tab--min-width': props.minWidth,
  'mdc-tab--active': isActive
}));

onUpdated(() => {
  try {
    tab.$parent.$parent.updated();
  } catch (e) {}
});

function handleClick(event) {
  emit(UI_GLOBAL.EVENTS.CLICK, event);
}
</script>
