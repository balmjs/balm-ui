<template>
  <i
    :class="className"
    :tabindex="unclickable ? null : 0"
    :role="unclickable ? null : 'button'"
    @click="handleClick"
  >
    <slot>
      <!-- Material icon -->
    </slot>
  </i>
</template>

<script>
import UI_GLOBAL from '../../config/constants';
import { UI_TEXTFIELD_ICON } from './constants';

export default {
  name: 'UiTextfieldIcon',
  props: {
    trailing: {
      type: Boolean,
      default: false
    },
    unclickable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      let result = [
        UI_GLOBAL.cssClasses.icon,
        UI_TEXTFIELD_ICON.cssClasses.icon
      ];

      if (this.trailing) {
        result.push(UI_TEXTFIELD_ICON.cssClasses.trailingIcon);
      } else {
        result.push(UI_TEXTFIELD_ICON.cssClasses.leadingIcon);
      }

      return result;
    }
  },
  methods: {
    handleClick(event) {
      if (!this.unclickable) {
        this.$emit(UI_TEXTFIELD_ICON.EVENT.CLICK, event);
      }
    }
  }
};
</script>
