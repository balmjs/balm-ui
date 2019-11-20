<template>
  <!-- Container -->
  <button type="button" :class="className" @click="handleClick">
    <div class="mdc-fab__ripple"></div>
    <template v-if="isExtended">
      <!-- Icon (optional) -->
      <i v-if="materialIcon" :class="[UI_GLOBAL.mdi, UI_FAB.cssClasses.icon]">{{ materialIcon }}</i>
      <template v-else>
        <slot name="before" :iconClass="UI_FAB.cssClasses.icon"></slot>
      </template>
      <!-- Text label -->
      <span class="mdc-fab__label">
        <slot></slot>
      </span>
      <!-- Icon (optional) -->
      <slot name="after" :iconClass="UI_FAB.cssClasses.icon"></slot>
    </template>
    <template v-else>
      <!-- Icon -->
      <i v-if="materialIcon" :class="[UI_GLOBAL.mdi, UI_FAB.cssClasses.icon]">{{ materialIcon }}</i>
      <template v-else>
        <slot :iconClass="UI_FAB.cssClasses.icon"></slot>
      </template>
    </template>
  </button>
</template>

<script>
import variantMixin from '../../mixins/variant';
import materialIconMixin from '../../mixins/material-icon';
import rippleMixin from '../../mixins/ripple';
import UI_GLOBAL from '../../config/constants';

// Define constants
const UI_FAB = {
  VARIANTS: {
    regular: 0,
    extended: 1
  },
  EVENT: {
    CLICK: 'click'
  },
  cssClasses: {
    icon: 'mdc-fab__icon'
  }
};

export default {
  name: 'ui-fab',
  mixins: [variantMixin, materialIconMixin, rippleMixin],
  props: {
    // UI variants
    extended: {
      type: Boolean,
      default: false
    },
    // UI attributes
    mini: {
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
    isExtended() {
      return this.isVariant(UI_FAB.VARIANTS, 'extended');
    },
    className() {
      return {
        'mdc-fab': true,
        'mdc-fab--extended': this.isExtended,
        'mdc-fab--mini': this.mini,
        'mdc-fab--exited': this.exited
      };
    }
  },
  watch: {
    variant() {
      this.init();
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (!this.cssOnly) {
        this.initRipple(this.$el);
      }
    },
    handleClick(event) {
      this.$emit(UI_FAB.EVENT.CLICK, event);
    }
  }
};
</script>
