<template>
  <div class="mdc-card__primary-action" tabindex="0" @click="handleClick">
    <slot>
      <!-- content within actionable area -->
    </slot>
    <div class="mdc-card__ripple"></div>
  </div>
</template>

<script>
import domMixin from '../../mixins/dom';
import rippleMixin from '../../mixins/ripple';

// Define card constants
const UI_CARD = {
  EVENT: {
    CLICK: 'click'
  }
};

export default {
  name: 'UiCardContent',
  mixins: [domMixin, rippleMixin],
  emits: [UI_CARD.EVENT.CLICK],
  mounted() {
    this.initRipple(this.el);
  },
  methods: {
    handleClick(event) {
      this.$emit(UI_CARD.EVENT.CLICK, event);
    }
  }
};
</script>
