<template>
  <!-- Container -->
  <button
    type="button"
    :class="[className, cardActionClassName]"
    @click="handleClick"
  >
    <div class="mdc-button__ripple"></div>
    <!-- Icon (optional) -->
    <slot name="before" :iconClass="UI_BUTTON.cssClasses.icon">
      <i
        v-if="materialIcon"
        :class="[UI_GLOBAL.cssClasses.icon, UI_BUTTON.cssClasses.icon]"
        aria-hidden="true"
        >{{ materialIcon }}</i
      >
    </slot>
    <!-- Text label -->
    <span :class="UI_BUTTON.cssClasses.label">
      <slot></slot>
    </span>
    <!-- Icon (optional) -->
    <slot name="after" :iconClass="UI_BUTTON.cssClasses.icon"></slot>
  </button>
</template>

<script>
import buttonMixin from '../../mixins/button';
import UI_GLOBAL from '../../config/constants';
import UI_BUTTON from './constants';

export default {
  name: 'ui-button',
  mixins: [buttonMixin],
  data() {
    return {
      UI_GLOBAL,
      UI_BUTTON
    };
  },
  methods: {
    handleClick(event) {
      this.$emit(UI_GLOBAL.EVENT.CLICK, event);
    }
  }
};
</script>
