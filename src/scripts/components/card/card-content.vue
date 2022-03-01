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
    <div class="mdc-card__ripple"></div>
  </div>
</template>

<script>
import UI_GLOBAL from '../../config/constants';

export default {
  name: 'UiCardContent',
  customOptions: {
    UI_GLOBAL
  }
};
</script>

<script setup>
import { ref, onMounted } from 'vue';
import { useGlobal } from '../../config/constants';
import { useRipple } from '../../mixins/ripple';

const emit = defineEmits([UI_GLOBAL.EVENTS.CLICK]);

const cardContent = ref(null);

const { handleClick } = useGlobal({ emit });

onMounted(() => useRipple(cardContent.value));
</script>
