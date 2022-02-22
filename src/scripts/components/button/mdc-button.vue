<template>
  <button type="button" :class="className" @click="handleClick">
    <div class="mdc-button__ripple"></div>
    <slot name="icon">
      <i
        v-if="materialIcon"
        :class="getMaterialIconClass('mdc-button__icon')"
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
import { getMaterialIconClass } from '../../mixins/material-icon';

export default {
  name: 'MdcButton',
  inheritAttrs: false,
  customOptions: {
    getMaterialIconClass
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

const emit = defineEmits(['click']);

const { materialIcon } = useMaterialIcon(props);

const className = computed(() => ({
  'mdc-button': true,
  'mdc-button--outlined': props.outlined,
  'mdc-button--unelevated': props.unelevated
}));

function handleClick(event) {
  emit('click', event);
}
</script>
