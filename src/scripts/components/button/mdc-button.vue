<template>
  <button type="button" :class="className" @click="handleClick">
    <div class="mdc-button__ripple"></div>
    <slot name="icon">
      <i
        v-if="materialIcon"
        :class="UI_GLOBAL.getMaterialIconClass('mdc-button__icon')"
        aria-hidden="true"
        v-text="materialIcon"
      ></i>
    </slot>
    <template v-if="noLabel">
      <slot></slot>
    </template>
    <span v-else class="mdc-button__label">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import UI_GLOBAL from '../../config/constants';

export default {
  name: 'MdcButton',
  customOptions: {
    UI_GLOBAL
  }
};
</script>

<script setup>
import { computed } from 'vue';
import { icon, useMaterialIcon } from '../../mixins/material-icon';

const props = defineProps({
  // UI variants
  outlined: {
    type: Boolean,
    default: false
  },
  unelevated: {
    type: Boolean,
    default: false
  },
  // UI attributes
  icon,
  noLabel: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits([UI_GLOBAL.EVENTS.CLICK]);

const { materialIcon } = useMaterialIcon(props);

const className = computed(() => ({
  'mdc-button': true,
  'mdc-button--outlined': props.outlined,
  'mdc-button--unelevated': props.unelevated
}));

function handleClick(event) {
  emit(UI_GLOBAL.EVENTS.CLICK, event);
}
</script>
