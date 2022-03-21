<template>
  <!-- (M3) Container -->
  <button ref="fab" type="button" :class="className" @click="handleClick">
    <div class="mdc-fab__ripple"></div>
    <div class="mdc-fab__focus-ring"></div>
    <template v-if="isExtended">
      <!-- Leading icon (optional) -->
      <slot name="before" :iconClass="UI_FAB.cssClasses.icon">
        <i
          v-if="materialIcon"
          :class="UI_GLOBAL.getMaterialIconClass(UI_FAB.cssClasses.icon)"
          v-text="materialIcon"
        ></i>
      </slot>
      <!-- Label text -->
      <span class="mdc-fab__label">
        <slot></slot>
      </span>
      <!-- Trailing icon (optional) -->
      <slot name="after" :iconClass="UI_FAB.cssClasses.icon"></slot>
    </template>
    <template v-else>
      <!-- Icon -->
      <slot :iconClass="UI_FAB.cssClasses.icon">
        <i
          v-if="materialIcon"
          :class="UI_GLOBAL.getMaterialIconClass(UI_FAB.cssClasses.icon)"
          v-text="materialIcon"
        ></i>
      </slot>
    </template>
  </button>
</template>

<script>
import UI_GLOBAL from '../../config/constants';
import UI_FAB from './constants';

export default {
  name: 'UiFab',
  customOptions: {
    UI_GLOBAL,
    UI_FAB
  }
};
</script>

<script setup>
import { ref, computed } from 'vue';
import { useGlobal } from '../../config/constants';
import { useButton } from '../../mixins/button';
import { iconProps, useMaterialIcon } from '../../mixins/material-icon';
import checkType from '../../mixins/type';

const props = defineProps({
  // UI variants
  type: {
    type: [String, Number],
    default: 0
  },
  extended: {
    type: Boolean,
    default: false
  },
  // UI attributes
  ...iconProps,
  mini: {
    type: Boolean,
    default: false
  },
  exited: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits([UI_GLOBAL.EVENTS.CLICK]);

const fab = ref(null);

const { handleClick } = useGlobal({ emit });
useButton(fab, props);
const { materialIcon } = useMaterialIcon(props);

const isExtended = computed(() => checkType(props, UI_FAB.TYPES, 'extended'));
const isAccessible = computed(
  () => fab.value && fab.value.classList.contains(UI_FAB.cssClasses.touch)
);
const className = computed(() => ({
  'mdc-fab': true,
  'mdc-fab--extended': isExtended.value,
  'mdc-fab--mini': props.mini,
  'mdc-fab--exited': props.exited,
  // Accessibility
  'mdc-fab--touch': isAccessible.value
}));
</script>
