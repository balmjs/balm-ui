<template>
  <ui-button fab
             :class="className"
             :disabled="disabled"
             :cssOnly="cssOnly">
    <template v-if="materialIcon">
      <span class="mdc-fab__icon">
        <slot>{{ materialIcon }}</slot>
      </span>
    </template>
    <template v-else>
      <slot><!-- Custom Icon --></slot>
    </template>
  </ui-button>
</template>

<script>
import UiButton from './button';
import {isString} from '../../helpers';

export default {
  name: 'ui-fab',
  components: {
    UiButton
  },
  props: {
    // element attributes
    disabled: {
      type: Boolean,
      default: false
    },
    // ui attributes
    cssOnly: {
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
