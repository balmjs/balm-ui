<template>
  <!-- Container -->
  <header :class="className">
    <div class="mdc-top-app-bar__row">
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <!-- Navigation icon (optional) / Close button (instead of a navigation icon) -->
        <button
          :class="[UI_TOP_APP_BAR.cssClasses.icon, 'mdc-top-app-bar__navigation-icon', 'mdc-icon-button']"
          :id="defaultNavIcon === UI_TOP_APP_BAR.TYPES[1] ? null : navId"
          @click="handleClick"
        >
          <slot name="nav-icon">{{ defaultNavIcon }}</slot>
        </button>
        <!-- Title (optional) / Contextual title -->
        <span class="mdc-top-app-bar__title">
          <slot>{{ title }}</slot>
        </span>
      </section>
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
        <!-- Action items (optional) / Contextual actions -->
        <!-- Overflow menu (optional) -->
        <slot name="toolbar" :itemClass="UI_TOP_APP_BAR.cssClasses.item"></slot>
      </section>
    </div>
  </header>
</template>

<script>
import variantMixin from '../../mixins/variant';
import { MDCTopAppBar } from '../../../material-components-web/top-app-bar';
import UI_GLOBAL from '../../config/constants';

// Define constants
const UI_TOP_APP_BAR = {
  TYPES: ['menu', 'close'], // NOTE: Type - 0: Regular, 1: Contextual action bar
  VARIANTS: {
    standard: 0,
    fixed: 1,
    dense: 2,
    prominent: 3,
    prominentDense: 4,
    short: 5,
    shortCollapsed: 6
  },
  FIXED_ADJUST: {
    STANDARD: 'mdc-top-app-bar--fixed-adjust',
    PROMINENT: 'mdc-top-app-bar--prominent-fixed-adjust',
    DENSE: 'mdc-top-app-bar--dense-fixed-adjust',
    DENSE_PROMINENT: 'mdc-top-app-bar--dense-prominent-fixed-adjust',
    SHORT: 'mdc-top-app-bar--short-fixed-adjust'
  },
  EVENT: {
    NAV: 'nav',
    CLOSE: 'close'
  },
  cssClasses: {
    item: 'mdc-top-app-bar__action-item'
  }
};

export default {
  name: 'ui-top-app-bar',
  mixins: [variantMixin],
  props: {
    contentSelector: {
      type: String,
      required: true
    },
    type: {
      type: Number,
      default: 0
    },
    // UI variants
    fixed: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    prominent: {
      type: Boolean,
      default: false
    },
    prominentDense: {
      type: Boolean,
      default: false
    },
    short: {
      type: Boolean,
      default: false
    },
    shortCollapsed: {
      type: Boolean,
      default: false
    },
    // UI attributes
    title: {
      type: String,
      default: ''
    },
    navId: String
  },
  data() {
    return {
      UI_TOP_APP_BAR,
      $topAppBar: null,
      contentElement: null
    };
  },
  computed: {
    isFixed() {
      return this.isVariant(UI_TOP_APP_BAR.VARIANTS, 'fixed');
    },
    isDense() {
      return this.isVariant(UI_TOP_APP_BAR.VARIANTS, 'dense');
    },
    isProminent() {
      return this.isVariant(UI_TOP_APP_BAR.VARIANTS, 'prominent');
    },
    isProminentDense() {
      return (
        (this.dense && this.prominent) ||
        this.isVariant(UI_TOP_APP_BAR.VARIANTS, 'prominentDense')
      );
    },
    isShort() {
      return this.isVariant(UI_TOP_APP_BAR.VARIANTS, 'short');
    },
    isShortCollapsed() {
      return this.isVariant(UI_TOP_APP_BAR.VARIANTS, 'shortCollapsed');
    },
    className() {
      return {
        'mdc-top-app-bar': true,
        'mdc-top-app-bar--fixed': this.isFixed,
        'mdc-top-app-bar--dense': this.isDense || this.isProminentDense,
        'mdc-top-app-bar--prominent': this.isProminent || this.isProminentDense,
        'mdc-top-app-bar--short': this.isShort || this.isShortCollapsed,
        'mdc-top-app-bar--short-collapsed': this.isShortCollapsed
      };
    },
    defaultNavIcon() {
      const type = this.type;

      return type >= 0 && type <= UI_TOP_APP_BAR.TYPES.length - 1
        ? UI_TOP_APP_BAR.TYPES[type]
        : UI_TOP_APP_BAR.TYPES[0];
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
    createFixedAdjustElement() {
      if (this.contentSelector) {
        this.contentElement = document.querySelector(this.contentSelector);

        this.contentElement.classList.remove(
          ...Object.values(UI_TOP_APP_BAR.FIXED_ADJUST)
        );

        if (this.isDense) {
          this.contentElement.classList.add(UI_TOP_APP_BAR.FIXED_ADJUST.DENSE);
        } else if (this.isProminent) {
          this.contentElement.classList.add(
            UI_TOP_APP_BAR.FIXED_ADJUST.PROMINENT
          );
        } else if (this.isProminentDense) {
          this.contentElement.classList.add(
            UI_TOP_APP_BAR.FIXED_ADJUST.DENSE_PROMINENT
          );
        } else if (this.isShort || this.isShortCollapsed) {
          this.contentElement.classList.add(UI_TOP_APP_BAR.FIXED_ADJUST.SHORT);
        } else {
          this.contentElement.classList.add(
            UI_TOP_APP_BAR.FIXED_ADJUST.STANDARD
          );
        }
      } else {
        console.warn('`contentSelector` is required');
      }
    },
    init() {
      if (this.$topAppBar) {
        this.$topAppBar.destroy();
      }

      this.$nextTick(() => {
        this.createFixedAdjustElement();
        this.$topAppBar = new MDCTopAppBar(this.$el);
      });
    },
    handleClick() {
      this.$emit(
        UI_TOP_APP_BAR.TYPES[this.type] === 'close'
          ? UI_TOP_APP_BAR.EVENT.CLOSE
          : UI_TOP_APP_BAR.EVENT.NAV
      );
    }
  }
};
</script>
