<template>
  <div :class="className" role="tooltip" aria-hidden="true">
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
import { MDCTooltip } from '../../../material-components-web/tooltip';
import typeMixin from '../../mixins/type';

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
  mixins: [typeMixin],
  props: {
    // UI variants
    type: {
      type: [String, Number],
      default: 0
    },
    rich: {
      type: Boolean,
      default: false
    },
    width: {
      type: [String, Number],
      default: 0
    }
  },
  data() {
    return {
      UI_TOOLTIP,
      $tooltip: null
    };
  },
  computed: {
    isRich() {
      return this.checkType(UI_TOOLTIP.TYPES, 'rich');
    },
    className() {
      return {
        'mdc-tooltip': true,
        'mdc-tooltip--rich': this.isRich
      };
    },
    style() {
      return this.width
        ? {
            'max-width': `${this.width}px`
          }
        : {};
    }
  },
  mounted() {
    this.$tooltip = new MDCTooltip(this.$el);
  }
};
</script>
