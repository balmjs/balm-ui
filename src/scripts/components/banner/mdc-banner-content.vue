<template>
  <div class="mdc-banner__content" role="status" aria-live="assertive">
    <div class="mdc-banner__graphic-text-wrapper">
      <!-- Supporting illustration (optional) -->
      <div v-if="$parent.withImage" class="mdc-banner__graphic">
        <slot name="image"></slot>
      </div>
      <!-- Text -->
      <div class="mdc-banner__text">
        <slot></slot>
      </div>
    </div>
    <!-- Buttons -->
    <div class="mdc-banner__actions">
      <slot name="actions">
        <mdc-button
          v-if="secondaryButtonText"
          class="mdc-banner__secondary-action"
        >
          {{ secondaryButtonText }}
        </mdc-button>
        <mdc-button class="mdc-banner__primary-action">
          {{ primaryButtonText }}
        </mdc-button>
      </slot>
    </div>
  </div>
</template>

<script>
import MdcButton from '../button/mdc-button';

export default {
  name: 'MdcBannerContent',
  components: {
    MdcButton
  },
  props: {
    primaryButtonText: {
      type: String,
      default: 'OK'
    },
    secondaryButtonText: {
      type: String,
      default: ''
    }
  }
};
</script>
