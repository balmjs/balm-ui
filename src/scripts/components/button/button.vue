<template>
  <button type="button"
    :class="[className, actionClassName]"
    @click="handleClick">
    <i v-if="materialIcon" :class="[UI_BUTTON.SLOT_CLASS.icon, 'material-icons']">
      {{ materialIcon }}
    </i>
    <slot :iconClass="UI_BUTTON.SLOT_CLASS.icon"></slot>
  </button>
</template>

<script>
import buttonMixin from '../../mixins/button';
import UI_BUTTON from './constants';

export default {
  name: 'ui-button',
  mixins: [buttonMixin],
  data() {
    return {
      UI_BUTTON
    };
  },
  methods: {
    handleClick(event) {
      this.$emit(UI_BUTTON.EVENT.CLICK, event);
    }
  }
};
</script>
