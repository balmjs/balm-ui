<template>
  <button :type="type" :class="className" @click="handleClick">
    <ui-icon v-if="icon"
      :class="CLASSNAME_ICON"
      :size="iconSize"
      :dark="iconDark"
      :light="iconLight"
      :inactive="iconInactive">{{ icon }}</ui-icon>
    <slot :className="slotClass"></slot>
  </button>
</template>

<script>
import buttonMixin from '../../mixins/button';
import { UI_EVENT } from '../../config/constants';

const CLASSNAME_ICON = 'mdc-button__icon';

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
      CLASSNAME_ICON,
      slotClass: {
        icon: CLASSNAME_ICON
      }
    };
  },
  methods: {
    handleClick(event) {
      this.$emit(UI_EVENT.CLICK, event);
    }
  }
};
</script>
