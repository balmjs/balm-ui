<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'UiCardMedia',
  customOptions: {}
};
</script>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  square: {
    type: Boolean,
    default: false
  },
  rectangle: {
    type: Boolean,
    default: false
  }
});

const className = computed(() => ({
  'mdc-card__media': true,
  'mdc-card__media--square': props.square,
  'mdc-card__media--16-9': props.rectangle
}));
</script>
