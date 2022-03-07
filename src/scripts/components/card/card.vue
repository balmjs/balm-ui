<template>
  <!-- Container -->
  <div :class="className">
    <slot>
      <!-- Card contents -->
    </slot>
  </div>
</template>

<script>
export default {
  name: 'UiCard',
  customOptions: {}
};
</script>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  // UI variants
  outlined: {
    type: Boolean,
    default: false
  }
});

const className = computed(() => ({
  'mdc-card': true,
  'mdc-theme--on-surface': true, // fix(@material-components): dark theme
  'mdc-card--outlined': props.outlined
}));
</script>
