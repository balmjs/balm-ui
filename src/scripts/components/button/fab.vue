<template>
  <button type="button" :class="className" @click="handleClick">
    <span v-if="beforeLabel" class="mdc-fab__label">
      <slot name="label">{{ label }}</slot>
    </span>
    <span v-if="materialIcon" :class="[UI_FAB.SLOT_CLASS.icon, 'material-icons']">{{ materialIcon }}</span>
    <template v-else>
      <slot :className="UI_FAB.SLOT_CLASS"><!-- Custom icon --></slot>
    </template>
    <span v-if="afterLabel" class="mdc-fab__label">
      <slot name="label">{{ label }}</slot>
    </span>
  </button>
</template>

<script>
import rippleMixin from '../../mixins/ripple';
import getType from '../../utils/typeof';

// Define constants
const UI_FAB = {
  EVENT: {
    CLICK: 'click'
  },
  SLOT_CLASS: {
    icon: 'mdc-fab__icon'
  }
};

export default {
  name: 'ui-fab',
  mixins: [rippleMixin],
  props: {
    // UI attributes
    icon: {
      type: String,
      default: ''
    },
    mini: {
      type: Boolean,
      default: false
    },
    extended: {
      type: [Boolean, String],
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    exited: {
      type: Boolean,
      default: false
    },
    cssOnly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      UI_FAB
    };
  },
  computed: {
    className() {
      return {
        'mdc-fab': true,
        'mdc-fab--mini': this.mini,
        'mdc-fab--extended': this.extended,
        'mdc-fab--exited': this.exited
      };
    },
    materialIcon() {
      return getType(this.icon) === 'string' ? this.icon : false;
    },
    beforeLabel() {
      return this.extended === 'before';
    },
    afterLabel() {
      return this.extended === true || this.extended === 'after';
    }
  },
  mounted() {
    if (!this.cssOnly) {
      this.initRipple(this.$el);
    }
  },
  methods: {
    handleClick(event) {
      this.$emit(UI_FAB.EVENT.CLICK, event);
    }
  }
};
</script>
