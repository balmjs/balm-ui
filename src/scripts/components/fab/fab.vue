<template>
  <!-- Container -->
  <button ref="fab" type="button" :class="className" @click="handleClick">
    <div class="mdc-fab__ripple"></div>
    <template v-if="isExtended">
      <!-- Icon (optional) -->
      <slot name="before" :iconClass="UI_FAB.cssClasses.icon">
        <i
          v-if="materialIcon"
          :class="getMaterialIconClass(UI_FAB.cssClasses.icon)"
          v-text="materialIcon"
        ></i>
      </slot>
      <!-- Text label -->
      <span class="mdc-fab__label">
        <slot></slot>
      </span>
      <!-- Icon (optional) -->
      <slot name="after" :iconClass="UI_FAB.cssClasses.icon"></slot>
    </template>
    <template v-else>
      <!-- Icon -->
      <slot :iconClass="UI_FAB.cssClasses.icon">
        <i
          v-if="materialIcon"
          :class="getMaterialIconClass(UI_FAB.cssClasses.icon)"
          v-text="materialIcon"
        ></i>
      </slot>
    </template>
  </button>
</template>

<script>
import { getMaterialIconClass } from '../../mixins/material-icon';
import UI_FAB from './constants';

export default {
  name: 'UiFab',
  inheritAttrs: false,
  customOptions: {
    UI_FAB,
    getMaterialIconClass
  }
};
</script>

<script setup>
import { ref, computed } from 'vue';
import { useButton } from '../../mixins/button';
import { icon, useMaterialIcon } from '../../mixins/material-icon';
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
  icon,
  mini: {
    type: Boolean,
    default: false
  },
  exited: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits([UI_FAB.EVENTS.CLICK]);

const fab = ref(null);

const { handleClick } = useButton(fab, props, { emit });
const { materialIcon } = useMaterialIcon(props);

const isExtended = computed(() => checkType(UI_FAB.TYPES, 'extended')).value;
const isAccessible = computed(
  () => fab.value && fab.value.classList.contains(UI_FAB.cssClasses.touch)
).value;

const className = computed(() => ({
  'mdc-fab': true,
  'mdc-fab--extended': isExtended,
  'mdc-fab--mini': props.mini,
  'mdc-fab--exited': props.exited,
  // Accessibility
  'mdc-fab--touch': isAccessible
}));
</script>
