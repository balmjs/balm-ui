<template>
  <button type="button" :class="className" @click="handleClick">
    <span class="mdc-button__ripple"></span>
    <span class="mdc-button__focus-ring"></span>
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
import { useGlobal } from '../../config/constants';
import { iconProps, useMaterialIcon } from '../../mixins/material-icon';

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
  ...iconProps,
  noLabel: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits([UI_GLOBAL.EVENTS.CLICK]);

const { handleClick } = useGlobal({ emit });
const { materialIcon } = useMaterialIcon(props);

const className = computed(() => ({
  'mdc-button': true,
  'mdc-button--outlined': props.outlined,
  'mdc-button--unelevated': props.unelevated
}));
</script>
