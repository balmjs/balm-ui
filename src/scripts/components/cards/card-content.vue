<template>
  <div class="mdc-card__primary-action" tabindex="0" @click="handleClick">
    <slot>
      <!-- content within actionable area -->
    </slot>
  </div>
</template>

<script>
import rippleMixin from '../../mixins/ripple';
import UI_CARD from './constants';

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
