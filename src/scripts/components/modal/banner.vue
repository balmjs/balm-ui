<template>
  <!-- Container -->
  <div class="mdc-banner" role="banner">
    <div class="mdc-banner__content" role="status" aria-live="assertive">
      <!-- Supporting illustration (optional) -->
      <slot name="image" :imageClass="UI_BANNER.cssClasses.image"></slot>
      <!-- Text -->
      <div class="mdc-banner__text">
        <slot>{{ message }}</slot>
      </div>
      <!-- Buttons -->
      <div class="mdc-banner__actions">
        <slot name="actions">
          <button
            v-if="secondaryButtonText"
            type="button"
            class="mdc-button mdc-banner__secondary-action"
          >
            <div class="mdc-button__ripple"></div>
            <div class="mdc-button__label">{{ secondaryButtonText }}</div>
          </button>
          <button type="button" class="mdc-button mdc-banner__primary-action">
            <div class="mdc-button__ripple"></div>
            <div class="mdc-button__label">{{ primaryButtonText }}</div>
          </button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { MDCBanner } from '../../../material-components-web/banner';

// Define banner constants
const UI_BANNER = {
  cssClasses: {
    image: 'mdc-banner__image'
  },
  EVENT: {
    CHANGE: 'change',
    CLOSED: 'closed'
  }
};

export default {
  name: 'UiBanner',
  model: {
    prop: 'open',
    event: UI_BANNER.EVENT.CHANGE
  },
  props: {
    // States
    open: {
      type: Boolean,
      default: false
    },
    // UI attributes
    message: {
      type: String,
      default: ''
    },
    primaryButtonText: {
      type: String,
      default: 'OK'
    },
    secondaryButtonText: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      UI_BANNER,
      $banner: null
    };
  },
  watch: {
    open(val) {
      if (val) {
        this.$banner.open();
      }
    }
  },
  mounted() {
    this.$banner = new MDCBanner(this.$el);

    this.$banner.listen('MDCBanner:closed', ({ detail }) => {
      this.$emit(UI_BANNER.EVENT.CHANGE, false);
      this.$emit(UI_BANNER.EVENT.CLOSED, detail.reason);
    });
  }
};
</script>
