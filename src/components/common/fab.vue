<template>
  <ui-button fab
             :class="className"
             :disabled="disabled"
             :noRipple="noRipple"
             :dark="dark">
    <template v-if="materialIcon">
      <span class="mdc-fab__icon">
        <slot>{{ materialIcon }}</slot>
      </span>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </ui-button>
</template>

<script>
import UiButton from './button';
import {isString} from '../utils/helper';

export default {
  name: 'ui-fab',
  components: {
    UiButton
  },
  props: {
    // attribute
    disabled: {
      type: Boolean,
      default: false
    },
    // mdc
    noRipple: {
      type: Boolean,
      default: false
    },
    icon: {
      type: [Boolean, String],
      default: false
    },
    mini: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    // theme
    dark: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'mdc-fab': true,
        'mdc-fab--mini': this.mini,
        'mdc-fab--plain': this.plain,
        'material-icons': this.icon,
      };
    },
    materialIcon() {
      return isString(this.icon) ? this.icon : '';
    }
  }
};
</script>
