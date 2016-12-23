<template>
  <div :class="`tt${name}`">
    <span :id="`tt${name}`">
      <slot name="target">{{ target }}</slot>
    </span>
    <div ref="tooltip" :class="[className, positionClassName]" :for="`tt${name}`">
      <slot name="tips">{{ tips }}</slot>
    </div>
  </div>
</template>

<script>
import '../../material-design-lite/tooltip/tooltip';

const POSITIONS = ['', 'top', 'right', 'bottom', 'left'];
const POSITION_TOP = 1; // Positions the tooltip to the top of the target
const POSITION_RIGHT = 2; // Positions the tooltip to the right of the target
const POSITION_BOTTOM = 3; // Positions the tooltip to the bottom of the target
const POSITION_LEFT = 4; // Positions the tooltip to the left of the target

export default {
  name: 'ui-tooltip',
  props: {
    name: {
      type: String,
      required: true
    },
    target: String,
    tips: String,
    large: {
      type: Boolean,
      default: false
    },
    position: {
      type: Number,
      default: 0
    }
  },
  computed: {
    className() {
      return {
        'mdl-tooltip': true,
        'mdl-tooltip--large': this.large
      };
    },
    positionClassName() {
      let currentPositon = (this.position > 0 && this.position < POSITIONS.length)
        ? POSITIONS[this.position]
        : '';
      let className = currentPositon ? `mdl-tooltip--${currentPositon}` : '';
      return className;
    }
  },
  mounted() {
    this.$ui.upgradeElement(this.$refs.tooltip, 'MaterialTooltip');
  }
};
</script>
