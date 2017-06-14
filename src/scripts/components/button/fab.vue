<template>
  <button type="button"
          :class="className"
          :disabled="disabled">
    <template v-if="materialIcon">
      <span class="mdc-fab__icon">
        <slot>{{ materialIcon }}</slot>
      </span>
    </template>
    <template v-else>
      <slot><!-- Custom Icon --></slot>
    </template>
  </button>
</template>

<script>
import {isString} from '../../helpers';

export default {
  name: 'ui-fab',
  props: {
    // element attributes
    disabled: {
      type: Boolean,
      default: false
    },
    // ui attributes
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
    }
  },
  computed: {
    materialIcon() {
      return isString(this.icon) ? this.icon : false;
    },
    className() {
      return {
        'mdc-fab': true,
        'mdc-fab--mini': this.mini,
        'mdc-fab--plain': this.plain,
        'material-icons': this.materialIcon,
      };
    }
  }
};
</script>
