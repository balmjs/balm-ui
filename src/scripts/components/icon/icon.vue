<template>
  <i :class="className" aria-hidden="true" @click="handleClick">
    <slot>
      <!-- The material icon name -->
    </slot>
  </i>
</template>

<script>
import typeMixin from '../../mixins/type';

// Define material icons constants
const UI_ICON = {
  TYPES: {
    filled: 0,
    outlined: 1,
    round: 2,
    twoTone: 3,
    sharp: 4
  },
  DEFAULT_SIZE: 24,
  EVENT: {
    CLICK: 'click'
  }
};

export default {
  name: 'UiIcon',
  mixins: [typeMixin],
  props: {
    // UI styles
    type: {
      type: [String, Number],
      default: 0
    },
    outlined: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    twoTone: {
      type: Boolean,
      default: false
    },
    sharp: {
      type: Boolean,
      default: false
    },
    // UI attributes
    size: {
      type: [Number, String],
      default: UI_ICON.DEFAULT_SIZE
    },
    dark: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    inactive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isFilled() {
      return this.checkType(UI_ICON.TYPES, 'filled');
    },
    isOutlined() {
      return this.checkType(UI_ICON.TYPES, 'outlined');
    },
    isRound() {
      return this.checkType(UI_ICON.TYPES, 'round');
    },
    isTwoTone() {
      return this.checkType(UI_ICON.TYPES, 'twoTone');
    },
    isSharp() {
      return this.checkType(UI_ICON.TYPES, 'sharp');
    },
    invalidIcon() {
      return this.dark && this.light;
    },
    activeIcon() {
      return this.dark || this.light;
    },
    className() {
      let result = {
        'material-icons': this.isFilled,
        'material-icons-outlined': this.isOutlined,
        'material-icons-round': this.isRound,
        'material-icons-two-tone': this.isTwoTone,
        'material-icons-sharp': this.isSharp,
        'md-dark': this.dark && !this.light,
        'md-light': this.light && !this.dark,
        'md-inactive': this.inactive
      };

      if (+this.size !== UI_ICON.DEFAULT_SIZE && this.size > 0) {
        result[`md-${this.size}`] = true;
      }

      return result;
    }
  },
  created() {
    if (this.invalidIcon || (!this.activeIcon && this.inactive)) {
      console.warn('[UiIcon]', 'Invalid dark or light icon');
    }
  },
  methods: {
    handleClick(event) {
      if (!this.inactive) {
        this.$emit(UI_ICON.EVENT.CLICK, event);
      }
    }
  }
};
</script>
