<template>
  <div class="mdc-card__primary-action" tabindex="0" @click="handleClick">
    <slot>
      <!-- content within actionable area -->
    </slot>
  </div>
</template>

<script>
import rippleMixin from '../../mixins/ripple';

// Define card constants
const UI_CARD = {
  EVENT: {
    CLICK: 'click'
  }
};

export default {
  name: 'UiCardContent',
  mixins: [rippleMixin],
  mounted() {
    this.initRipple(this.$el);
  },
  methods: {
    handleClick(event) {
      this.$emit(UI_CARD.EVENT.CLICK, event);
    }
  }
};
</script>
