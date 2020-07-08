<template>
  <!-- Container -->
  <div class="mdc-banner">
    <div class="mdc-banner__surface">
      <!-- Supporting illustration (optional) -->
      <slot name="icon">
        <i
          v-if="materialIcon"
          :class="[UI_GLOBAL.cssClasses.icon, 'mdc-banner__icon']"
          aria-hidden="true"
          v-text="materialIcon"
        ></i>
      </slot>
      <!-- Text -->
      <div class="mdc-banner__text">
        <slot>{{ message }}</slot>
      </div>
    </div>
    <!-- Buttons -->
    <div class="mdc-banner__actions">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script>
import materialIconMixin from '../../mixins/material-icon';
import UI_GLOBAL from '../../config/constants';

const UI_BANNER = {
  cssClasses: {
    button: 'mdc-banner__button'
  }
};

export default {
  name: 'UiBanner',
  mixins: [materialIconMixin],
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      UI_GLOBAL
    };
  }
};
</script>
