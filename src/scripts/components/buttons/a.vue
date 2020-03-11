<template>
  <!-- Container -->
  <a :class="[className, cardActionClassName]">
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
    <span class="mdc-button__label">
      <slot></slot>
    </span>
    <!-- Icon (optional) -->
    <slot name="after" :iconClass="UI_BUTTON.cssClasses.icon"></slot>
  </a>
</template>

<script>
import buttonMixin from '../../mixins/button';
import UI_GLOBAL from '../../config/constants';
import UI_BUTTON from './constants';

export default {
  name: 'ui-a',
  mixins: [buttonMixin],
  data() {
    return {
      UI_GLOBAL,
      UI_BUTTON
    };
  }
};
</script>
