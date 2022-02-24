<template>
  <div :class="className" @click="handleClick">
    <slot></slot>
    <sup v-if="count" class="mdc-badge__sup">{{ overflowCount }}</sup>
    <template v-else>
      <sup v-if="overlap && !dot"></sup>
      <sup v-else :class="supClassName">
        <slot name="badge"></slot>
      </sup>
    </template>
  </div>
</template>

<script>
export default {
  name: 'UiBadge',
  inheritAttrs: false,
  customOptions: {}
};
</script>

<script setup>
import { computed } from 'vue';
import { useStateType } from '../../mixins/state-type';

const props = defineProps({
  // States
  count: {
    type: Number,
    default: 0
  },
  // UI attributes
  overlap: {
    type: Boolean,
    default: false
  },
  maxCount: {
    type: Number,
    default: 99
  },
  dot: {
    type: Boolean,
    default: false
  },
  state: {
    type: String,
    default: '' // success, info, warning, error
  }
});

const emit = defineEmits(['click']);

const { stateType } = useStateType(props);

const className = computed(() => ({
  'mdc-badge': true,
  'mdc-badge--overlap': props.overlap
}));
const overflowCount = computed(() =>
  props.count > props.maxCount ? `${props.maxCount}+` : props.count
);
const supClassName = computed(() => [
  {
    'mdc-badge__sup': true,
    'mdc-badge__sup--dot': props.dot
  },
  stateType ? `mdc-badge__sup--${stateType}` : ''
]);

function handleClick(event) {
  emit('click', event);
}
</script>
