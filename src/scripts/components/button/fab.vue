<template>
  <button type="button" :class="className">
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
import rippleMixin from '../../mixins/ripple';
import {isString} from '../../helpers/typeof';

export default {
  name: 'ui-fab',
  mixins: [rippleMixin],
  props: {
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
    exited: {
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
        'mdc-fab--exited': this.exited,
        'material-icons': this.materialIcon,
      };
    }
  },
  mounted() {
    if (!this.cssOnly) {
      this.initRipple(this.$el);
    }
  }
};
</script>
