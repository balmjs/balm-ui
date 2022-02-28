<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
// Define bottom navigation constants
const UI_BOTTOM_NAVIGATION = {
  FIXED_ADJUST: {
    STANDARD: 'mdc-bottom-navigation--fixed-adjust',
    STACKED: 'mdc-bottom-navigation--stacked-fixed-adjust'
  }
};

export default {
  name: 'UiBottomNavigation',
  customOptions: {
    UI_BOTTOM_NAVIGATION
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
    'mdc-bottom-navigation',
    {
      'mdc-bottom-navigation--stacked': props.stacked
    }
  ];

  const width = Math.floor(100 / state.destinations);
  result.push(`mdc-bottom-navigation--dest-${width}`);

  return result;
});

onBeforeMount(() => {
  if (props.min) {
    state.destinations = 3;
  } else if (props.max) {
    state.destinations = 5;
  }
});

onMounted(() => createFixedAdjustElement());

function createFixedAdjustElement() {
  if (props.contentSelector) {
    const contentEl = document.querySelector(props.contentSelector);

    const newDiv = document.createElement('div');
    newDiv.classList.add(
      props.stacked
        ? UI_BOTTOM_NAVIGATION.FIXED_ADJUST.STACKED
        : UI_BOTTOM_NAVIGATION.FIXED_ADJUST.STANDARD
    );
    contentEl.appendChild(newDiv);
  } else {
    console.warn(
      '[UiBottomNavigation]',
      `The 'contentSelector' prop is required`
    );
  }
}
</script>
