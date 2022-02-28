<template>
  <div ref="tooltip" :class="className" role="tooltip" aria-hidden="true">
    <div
      class="mdc-tooltip__surface mdc-tooltip__surface-animation"
      :style="style"
    >
      <template v-if="rich">
        <h2 class="mdc-tooltip__title">
          <slot name="title"></slot>
        </h2>
        <p class="mdc-tooltip__content">
          <slot :linkClass="UI_TOOLTIP.cssClasses.link"></slot>
        </p>
      </template>
      <template v-else>
        <slot></slot>
      </template>
    </div>
  </div>
</template>

<script>
// Define tooltip constants
const UI_TOOLTIP = {
  TYPES: {
    plain: 0,
    rich: 1
  },
  cssClasses: {
    link: 'mdc-tooltip__content-link'
  }
};

export default {
  name: 'UiTooltip',
  customOptions: {
    UI_TOOLTIP
  }
};
</script>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { MDCTooltip } from '../../../material-components-web/tooltip';
import checkType from '../../mixins/type';

const props = defineProps({
  // UI variants
  type: {
    type: [String, Number],
    default: 0
  },
  rich: {
    type: Boolean,
    default: false
  },
  // UI attributes
  width: {
    type: [String, Number],
    default: 0
  }
});

const tooltip = ref(null);

const isRich = computed(() => checkType(props, UI_TOOLTIP.TYPES, 'rich'));
const className = computed(() => ({
  'mdc-tooltip': true,
  'mdc-tooltip--rich': isRich.value
}));
const style = computed(() =>
  props.width
    ? {
        'max-width': `${props.width}px`
      }
    : {}
);

onMounted(() => new MDCTooltip(tooltip.value));
</script>
