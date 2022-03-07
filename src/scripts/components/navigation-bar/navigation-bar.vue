<template>
  <!-- (M3) Container -->
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
// Define navigation bar constants
const name = 'UiNavigationBar';

const UI_NAVIGATION_BAR = {
  FIXED_ADJUST: {
    STANDARD: 'mdc-navigation-bar--fixed-adjust',
    STACKED: 'mdc-navigation-bar--stacked-fixed-adjust'
  }
};

export default {
  name,
  customOptions: {
    name,
    UI_NAVIGATION_BAR
  }
};
</script>

<script setup>
import { reactive, computed, onBeforeMount, onMounted } from 'vue';

const props = defineProps({
  contentSelector: {
    type: String,
    required: true
  },
  stacked: {
    type: Boolean,
    default: false
  },
  min: {
    type: Boolean,
    default: false
  },
  max: {
    type: Boolean,
    default: false
  }
});

const state = reactive({
  destinations: 4
});

const className = computed(() => {
  let result = [
    'mdc-navigation-bar',
    {
      'mdc-navigation-bar--stacked': props.stacked
    }
  ];

  const width = Math.floor(100 / state.destinations);
  result.push(`mdc-navigation-bar--dest-${width}`);

  return result;
});

onBeforeMount(() => {
  if (!props.contentSelector) {
    console.error(`[${name}]: The 'contentSelector' prop is required`);
  }

  if (props.min) {
    state.destinations = 3;
  } else if (props.max) {
    state.destinations = 5;
  }
});

onMounted(() => createFixedAdjustElement());

function createFixedAdjustElement() {
  const contentEl = document.querySelector(props.contentSelector);

  const newDiv = document.createElement('div');
  newDiv.classList.add(
    props.stacked
      ? UI_NAVIGATION_BAR.FIXED_ADJUST.STACKED
      : UI_NAVIGATION_BAR.FIXED_ADJUST.STANDARD
  );

  contentEl.appendChild(newDiv);
}
</script>
