<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'UiCardActions',
  customOptions: {}
};
</script>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  fullBleed: {
    type: Boolean,
    default: false
  }
});

const className = computed(() => ({
  'mdc-card__actions': true,
  'mdc-card__actions--full-bleed': props.fullBleed
}));
</script>
