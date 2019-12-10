<template>
  <!-- Container -->
  <button type="button" :class="className" @click="handleClick">
    <div class="mdc-fab__ripple"></div>
    <template v-if="isExtended">
      <!-- Icon (optional) -->
      <slot name="before" :iconClass="UI_FAB.cssClasses.icon">
        <i
          v-if="materialIcon"
          :class="[UI_GLOBAL.cssClasses.icon, UI_FAB.cssClasses.icon]"
          >{{ materialIcon }}</i
        >
      </slot>
      <!-- Text label -->
      <span class="mdc-fab__label">
        <slot></slot>
      </span>
      <!-- Icon (optional) -->
      <slot name="after" :iconClass="UI_FAB.cssClasses.icon"></slot>
    </template>
    <template v-else>
      <!-- Icon -->
      <slot :iconClass="UI_FAB.cssClasses.icon">
        <i
          v-if="materialIcon"
          :class="[UI_GLOBAL.cssClasses.icon, UI_FAB.cssClasses.icon]"
          >{{ materialIcon }}</i
        >
      </slot>
    </template>
  </button>
</template>

<script>
import typeMixin from '../../mixins/type';
import materialIconMixin from '../../mixins/material-icon';
import rippleMixin from '../../mixins/ripple';
import UI_GLOBAL from '../../config/constants';

// Define fab constants
const UI_FAB = {
  TYPES: {
    regular: 0,
    extended: 1
  },
  cssClasses: {
    icon: 'mdc-fab__icon'
  }
};

export default {
  name: 'ui-fab',
  mixins: [typeMixin, materialIconMixin, rippleMixin],
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
      return this.checkType(UI_FAB.TYPES, 'extended');
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
    type() {
      this.init();
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.initRipple(this.$el);
    },
    handleClick(event) {
      this.$emit(UI_GLOBAL.EVENT.CLICK, event);
    }
  }
};
</script>
