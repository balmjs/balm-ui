<template>
  <!-- Container -->
  <button type="button" :class="className" @click="handleClick">
    <template v-if="extended">
      <!-- Icon (optional) -->
      <slot name="before" :iconClass="UI_FAB.SLOT_CLASS.icon"></slot>
      <!-- Text label -->
      <span class="mdc-fab__label">
        <slot></slot>
      </span>
      <!-- Icon (optional) -->
      <slot name="after" :iconClass="UI_FAB.SLOT_CLASS.icon"></slot>
    </template>
    <template v-else>
      <!-- Icon -->
      <i v-if="materialIcon" :class="[UI_GLOBAL.mdi, UI_FAB.SLOT_CLASS.icon]">
        {{ materialIcon }}
      </i>
      <template v-else>
        <slot :iconClass="UI_FAB.SLOT_CLASS.icon"></slot>
      </template>
    </template>
  </button>
</template>

<script>
import rippleMixin from '../../mixins/ripple';
import UI_GLOBAL from '../../config/constants';

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
      type: Boolean,
      default: false
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
      UI_GLOBAL,
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
      return this.icon || false;
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
