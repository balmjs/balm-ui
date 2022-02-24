<template>
  <div
    ref="cardContent"
    class="mdc-card__primary-action"
    tabindex="0"
    @click="handleClick"
  >
    <slot>
      <!-- content within actionable area -->
    </slot>
  </div>
</template>

<script>
export default {
  name: 'UiCardContent',
  customOptions: {}
};
</script>

<script setup>
import { ref, onMounted } from 'vue';
import { useRipple } from '../../mixins/ripple';

const emit = defineEmits(['click']);

const cardContent = ref(null);

onMounted(() => useRipple(cardContent.value));

function handleClick(event) {
  emit('click', event);
}
</script>
