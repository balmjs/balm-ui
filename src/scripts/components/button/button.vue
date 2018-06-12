<template>
  <button :type="type"
    :class="[className, actionClassName]"
    @click="handleClick">
    <ui-icon v-if="materialIcon"
      :class="UI_BUTTON.CLASSNAME.ICON"
      :size="iconSize"
      :dark="iconDark"
      :light="iconLight"
      :inactive="iconInactive">{{ materialIcon }}</ui-icon>
    <slot :className="slotClass"></slot>
  </button>
</template>

<script>
import buttonMixin from '../../mixins/button';

// Define constants
const UI_BUTTON = {
  CLASSNAME: {
    ICON: 'mdc-button__icon'
  },
  EVENT: {
    CLICK: 'click'
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
      UI_BUTTON,
      slotClass: {
        icon: UI_BUTTON.CLASSNAME.ICON
      }
    };
  },
  methods: {
    handleClick(event) {
      this.$emit(UI_BUTTON.EVENT.CLICK, event);
    }
  }
};
</script>
