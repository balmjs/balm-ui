<template>
  <button type="button" :class="className" @click="handleClick">
    <template v-if="materialIcon">
      <span :class="CLASSNAME_ICON">{{ materialIcon }}</span>
    </template>
    <template v-else>
      <slot :className="slotClass"><!-- Custom Icon --></slot>
    </template>
  </button>
</template>

<script>
import rippleMixin from '../../mixins/ripple';
import getType from '../../helpers/typeof';
import UI_EVENT from '../../config/events';

const CLASSNAME_ICON = 'mdc-fab__icon';

export default {
  name: 'ui-fab',
  mixins: [rippleMixin],
  props: {
    // Mandatory, for the icon element
    icon: String,
    // Optional, modifies the FAB to a smaller size
    mini: {
      type: Boolean,
      default: false
    },
    // Optional, animates the FAB out of view.
    // When this class is removed, the FAB will return to view.
    exited: {
      type: Boolean,
      default: false
    },
    // UI attributes
    cssOnly: {
      type: Boolean,
      default: false
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
  computed: {
    materialIcon() {
      return getType(this.icon) === 'string' ? this.icon : false;
    },
    className() {
      return {
        'mdc-fab': true,
        'mdc-fab--mini': this.mini,
        'mdc-fab--exited': this.exited,
        'material-icons': this.materialIcon
      };
    }
  },
  mounted() {
    if (!this.cssOnly) {
      this.initRipple(this.$el);
    }
  },
  methods: {
    handleClick(event) {
      this.$emit(UI_EVENT.CLICK, event);
    }
  }
};
</script>
