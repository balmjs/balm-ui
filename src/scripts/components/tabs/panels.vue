<template>
  <div ref="panels" class="mdc-panels">
    <slot></slot>
  </div>
</template>

<script>
// Define tab panel constants
const UI_PANEL = {
  cssClasses: {
    active: 'active'
  },
  EVENTS: {
    CHANGE: 'update:modelValue'
  }
};

export default {
  name: 'UiPanels',
  customOptions: {
    UI_PANEL
  }
};
</script>

<script setup>
import { ref, watch, onMounted, nextTick } from 'vue';

const props = defineProps({
  // States
  modelValue: {
    type: Number,
    default: 0
  }
});

const panels = ref(null);

function updatePanel(activeIndex) {
  const el = panels.value;
  if (el) {
    const panels = el.querySelectorAll('.mdc-panel');
    if (panels.length) {
      panels.forEach((panel, index) => {
        if (
          index === activeIndex &&
          !panel.classList.contains(UI_PANEL.cssClasses.active)
        ) {
          panel.classList.add(UI_PANEL.cssClasses.active);
        } else {
          panel.classList.remove(UI_PANEL.cssClasses.active);
        }
      });
    }
  }
}

onMounted(() => {
  updatePanel(props.modelValue);

  watch(
    () => props.modelValue,
    (val) => updatePanel(val)
  );
});
</script>
