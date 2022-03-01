<template>
  <div :class="className" :aria-expanded="isExpanded" @click="handleClick">
    <div v-ripple="ripple" class="mdc-collapse__header" @click="handleToggle">
      <template v-if="isExpanded">
        <slot name="expand-more-icon" :iconClass="UI_COLLAPSE.cssClasses.icon">
          <i
            v-if="withIcon"
            :class="UI_GLOBAL.getMaterialIconClass(UI_COLLAPSE.cssClasses.icon)"
            aria-hidden="true"
          >
            expand_more
          </i>
        </slot>
      </template>
      <template v-else>
        <slot name="expand-less-icon" :iconClass="UI_COLLAPSE.cssClasses.icon">
          <i
            v-if="withIcon"
            :class="UI_GLOBAL.getMaterialIconClass(UI_COLLAPSE.cssClasses.icon)"
            aria-hidden="true"
          >
            chevron_right
          </i>
        </slot>
      </template>
      <div class="mdc-collapse__title">
        <slot name="toggle"></slot>
      </div>
    </div>
    <div v-show="isExpanded" class="mdc-collapse__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import UI_GLOBAL from '../../config/constants';

// Define collapse constants
const UI_COLLAPSE = {
  cssClasses: {
    icon: 'mdc-collapse__icon'
  },
  EVENTS: {
    CHANGE: 'update:modelValue'
  }
};

export default {
  name: 'UiCollapse',
  customOptions: {
    UI_GLOBAL,
    UI_COLLAPSE
  }
};
</script>

<script setup>
import { ref, computed, watch } from 'vue';
import { useGlobal } from '../../config/constants';

const props = defineProps({
  // States
  modelValue: {
    type: Boolean,
    default: false
  },
  // UI attributes
  withIcon: {
    type: Boolean,
    default: false
  },
  iconEndAligned: {
    type: Boolean,
    default: false
  },
  ripple: {
    type: [Boolean, Number],
    default: false
  }
});

const emit = defineEmits([UI_GLOBAL.EVENTS.CLICK, UI_COLLAPSE.EVENTS.CHANGE]);

const isExpanded = ref(props.modelValue);

const { handleClick } = useGlobal({ emit });

const className = computed(() => ({
  'mdc-collapse': true,
  'mdc-collapse--expanded': isExpanded.value,
  'mdc-collapse--with-icon': props.withIcon,
  'mdc-collapse--icon-end-aligned': props.iconEndAligned
}));

watch(
  () => props.modelValue,
  (val) => (isExpanded.value = val)
);

function handleToggle() {
  isExpanded.value = !isExpanded.value;

  emit(UI_COLLAPSE.EVENTS.CHANGE, isExpanded.value);
}
</script>
