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
import { events } from '../../../material-components-web/banner/constants';
import domMixin from '../../mixins/dom';

// Define banner constants
const UI_BANNER = {
  cssClasses: {
    image: 'mdc-banner__image'
  },
  EVENT: {
    CHANGE: 'update:modelValue',
    CLOSED: 'closed'
  }
};

export default {
  name: 'UiBanner',
  mixins: [domMixin],
  props: {
    // States
    modelValue: {
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
  emits: [UI_BANNER.EVENT.CHANGE, UI_BANNER.EVENT.CLOSED],
  data() {
    return {
      UI_BANNER,
      $banner: null
    };
  },
  watch: {
    modelValue(val) {
      if (val) {
        this.$banner.open();
      }
    }
  },
  mounted() {
    this.$banner = new MDCBanner(this.el);

    this.$banner.listen(events.CLOSED, ({ detail }) => {
      this.$emit(UI_BANNER.EVENT.CHANGE, false);
      this.$emit(UI_BANNER.EVENT.CLOSED, detail.reason);
    });
  }
};
</script>
