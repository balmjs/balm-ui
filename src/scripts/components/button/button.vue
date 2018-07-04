<template>
  <button :type="type"
    :class="[className, actionClassName]"
    @click="handleClick">
    <ui-icon v-if="materialIcon"
      :class="UI_BUTTON.SLOT_CLASS.icon"
      :size="iconSize"
      :dark="iconDark"
      :light="iconLight"
      :inactive="iconInactive">{{ materialIcon }}</ui-icon>
    <slot :className="UI_BUTTON.SLOT_CLASS"></slot>
  </button>
</template>

<script>
import buttonMixin from '../../mixins/button';

// Define constants
const UI_BUTTON = {
  EVENT: {
    CLICK: 'click'
  },
  SLOT_CLASS: {
    icon: 'mdc-button__icon'
  }
};

export default {
  name: 'ui-button',
  mixins: [buttonMixin],
  props: {
    // Element attributes
    type: {
      type: String,
      default: 'button'
    }
  },
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
